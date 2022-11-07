import express from "express";
const router = express.Router()

import { createJob, deleteJob, getAllJobs, updateJob, showStats, getJob} from '../controllers/jobsController.js'

router.route('/').post(createJob).get(getAllJobs)
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob).get(getJob)

export default router