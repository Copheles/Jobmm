import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import moment from "moment";

export default function Job({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  status,
  createdAt,
  createdBy,
}) {
  const { setEditJob, deleteJob, user, getSingleJob  } = useAppContext();
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        {/* content center later */}
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />

          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            {user._id === createdBy && (
              <>
                <Link
                  to="/add-job"
                  className="btn edit-btn"
                  onClick={() => setEditJob(_id)}
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn delete-btn"
                  onClick={() => deleteJob(_id)}
                >
                  Delete
                </button>
                
              </>
            )}
            <Link
                  to={`/jobs/${_id}`}
                  className="btn edit-btn"
                  onClick={() => getSingleJob(_id)}
                >
                  See More
            </Link>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}
