import "./JobsContant.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const JobsContant = ({
  img,
  filed,
  company,
  salaryend,
  salarystart,
  currency,
  status,
  jobDescription,
  skills,
  time,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div className="JobsContant">
      <div className="JobsContant-header">
        <div className="JobsContant-header-left">
          <div className="JobsContant-header-left-img">
            <img src={img} alt={company} />
          </div>

          <div className="JobsContant-header-left-text">
            <h5>{filed}</h5>
            <p>{company}</p>
          </div>
        </div>
        {/* end JobsContant-header-left*/}

        <div className="JobsContant-header-right">
          <div className="JobsContant-header-right-salary">
            <p>
              <span>
                {salarystart} - {salaryend} {currency}
              </span>{" "}
              Per Month
            </p>
          </div>

          <div className="JobsContant-header-right-status">
            <p>
              <span>
                {" "}
                <IoLocationOutline />{" "}
              </span>{" "}
              {status}
            </p>
          </div>
        </div>

        {/* END JobsContant-header-right */}
      </div>
      {/* end Header */}

      <div className="JobsContant-dec">
        <p>{jobDescription}</p>
      </div>
      {/* end dec */}

      <div className="JobsContant-skills">
        <h6>{skills}</h6>
      </div>
      {/* end skills */}

      <div className="JobsContant-postTime-details">
        <div className="JobsContant-postTime">
          <p>
            <span>
              <BsClockHistory />
            </span>{" "}
            {time}
          </p>
        </div>
        <div className="JobsContant-details">
          <button onClick={() => navigate(`/jobDetails/${id}`)}>
            View Details
          </button>
        </div>
      </div>
      {/* end postTime-details */}
    </div>
  );
};

export default JobsContant;
