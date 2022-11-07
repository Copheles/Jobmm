import { useAppContext } from "../context/appContext";
import moment from "moment";
import Wrapper from "../assets/wrappers/SingleJobPage";

import Req from "../assets/wrappers/Requirements";
import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaSchool,
  FaAsterisk,
} from "react-icons/fa";
import JobInfo from "./JobInfo";

const Requirements = ({ requirements }) => {
  const requirementsList = requirements.split("*").slice(1);
  return (
    <Req>
      {requirementsList.map((req) => (
        <li className="requirement-list">- {req}</li>
      ))}
    </Req>
  );
};

export default function SingleJobInfo() {
  console.log("hello");
  const {
    position,
    company,
    requirements,
    qualification,
    jobLocation,
    jobType,
    status,
    job,
  } = useAppContext();

  let date = moment(job.createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <Wrapper>
      <div className="box">
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </div>
      <span className={`${status}`}>{status}</span>
      <ul>
        {date && (
          <li>
            <JobInfo icon={<FaCalendarAlt />} text={date} />
          </li>
        )}
        {jobLocation && (
          <li>
            <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          </li>
        )}
        {jobType && (
          <li>
            <JobInfo icon={<FaBriefcase />} text={jobType} />
          </li>
        )}
        {qualification && (
          <li>
            <JobInfo icon={<FaSchool />} text={qualification} />
          </li>
        )}
        {requirements && (
          <li>
            <JobInfo icon={<FaAsterisk />} text={"requirement"} />

            <Requirements requirements={requirements} />
          </li>
        )}
      </ul>
    </Wrapper>
  );
}
