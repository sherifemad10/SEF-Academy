import { BsClockHistory } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";

const PreviousExamsCard = ({ title, instructor, level, NA, date, time }) => {
  return (
    <div className="UpcomingExams-card">
      <div className="UpcomingExams-card-date-time">
        <p>
          <span>
            {" "}
            <MdOutlineDateRange />
          </span>
          {date}
        </p>
        <p>
          <span>
            {" "}
            <BsClockHistory />
          </span>
          {time}
        </p>
      </div>
      {/* end UpcomingExams-card-date-time */}

      <div className="UpcomingExams-card-title-instructor">
        <h6>{title}</h6>
        <p>
          <span>Instructor:</span> {instructor}{" "}
        </p>
      </div>
      {/* end UpcomingExams-card-title-instructo */}

      <div className="UpcomingExams-card-level">
        <p>{level}</p>
      </div>
      {/* end UpcomingExams-card-level */}

      <div className="UpcomingExams-card-NA">
        <p>{NA}</p>
      </div>
      {/* end UpcomingExams-card-NA */}
    </div>
  );
};

export default PreviousExamsCard;
