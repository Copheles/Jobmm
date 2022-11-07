import Job from "../models/Job.js"
import { StatusCodes } from "http-status-codes"
import { BadRequestError, NotFoundError, UnAuthenticatedError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";

const createJob = async(req, res) => {
  const {position, company, requirements, qualification} = req.body;
  if(!position || !company || !requirements || !qualification){
    throw new BadRequestError('Please provide all values')
  }
  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body)

  res.status(StatusCodes.CREATED).json(job)

}

const getAllJobs = async(req, res) => {
  const { status, jobType, sort, search } = req.query

  const queryObject = {
    // createdBy: req.user.userId
  }
   // add stuff based on condition

  if(status && status !== 'all'){
    queryObject.status = status
  }
  if(jobType && jobType !== 'all'){
    queryObject.jobType = jobType
  }
  if(search){
    queryObject.position = {$regex: search, $options: 'i'}
  }

  // No await
  let result = Job.find(queryObject)
  console.log(result);
  
  if (sort === 'latest') {
    result = result.sort('-createdAt')
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt')
  }
  if (sort === 'a-z') {
    result = result.sort('position')
  }
  if (sort === 'z-a') {
    result = result.sort('-position')
  }
  
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;
 
  result = result.skip(skip).limit(limit)

  // chain sort conditions
  const jobs = await result
  const totalJobs = await Job.countDocuments(queryObject)
  const numOfPages = Math.ceil(totalJobs / limit)
  res.status(StatusCodes.OK).json({
    jobs,
    totalJobs,
    numOfPages
  })
}

const getJob = async(req, res) => {
  const { user:{userId}, params: {id: jobId}}= req;
  console.log(`User Id: ${userId}, Post Id: ${jobId}`);

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId
  })

  if(!job){
    res.status(400).json({
      message: `No Job wtih id: ${jobId} found`
    })
  }
  res.status(200).json({
    job
  })
}

const updateJob = async(req, res) => {
  const { id: jobId} = req.params;
  const { company, position} = req.body;

  // if(!position || !company ||!requirements || !qualification){
  //   throw new BadRequestError('Please provide all values')
  // }

  const job = await Job.findOne({_id: jobId})

  if(!job){
    throw new NotFoundError(`No job with id : ${jobId}`)
  }

  // check permissions

  console.log(typeof req.user.userId);
  console.log(typeof job.createdBy)

  checkPermissions(req.user, job.createdBy)

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId}, req.body, {
    new:true,
    runValidators: true
  })
  // job.position = position;
  // job.company = company

  // await job.save()

  res.status(StatusCodes.OK).json({
    updatedJob
  })
}

const deleteJob = async(req, res) => {
  const {id: jobId} = req.params

  const job = await Job.findOne({_id: jobId})

  if(!job){
    throw new NotFoundError(`No job with id : ${jobId}`)
  }

  checkPermissions(req.user, job.createdBy)

  await job.remove()

  res.status(StatusCodes.OK).json({
    message: `Success! job removed`
  })
}


const showStats = async(req, res) => {
  res.send('showStats')
}


export { createJob, deleteJob, getAllJobs, updateJob, showStats, getJob}