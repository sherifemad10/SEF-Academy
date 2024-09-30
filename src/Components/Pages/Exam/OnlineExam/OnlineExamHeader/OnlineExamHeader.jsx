import { MdOutlineDateRange } from "react-icons/md";
import "./OnlineExamHeader.css";
import { BsClockHistory } from "react-icons/bs";
import { GoStopwatch } from "react-icons/go";

const OnlineExamHeader = ({ timer }) => {
  // console.log(value.docs)

  // const timer = examm

  return (
    <div className="OnlineExamHeader">
      <div className="OnlineExamHeader-tittle-mark-instructor">
        <h4>Introduction to React JS</h4>
        <p>Lev. 1, 20 Marks</p>
        <p>
          <span>Instructor :</span> Tariq Ali
        </p>
      </div>
      {/* end OnlineExamHeader-tittle-mark-instructor */}

      <div className="OnlineExamHeader-date-time-duration">
        <div className="OnlineExamHeader-date">
          <MdOutlineDateRange className="onlineExam-icon" />
          <div className="OnlineExamHeader-text">
            <p>Date</p>
            <p>Wednesday, June 7th</p>
          </div>
        </div>

        <div className="OnlineExamHeader-date">
          <BsClockHistory className="onlineExam-icon" />

          <div className="OnlineExamHeader-text">
            <p>Time</p>
            <p>12:30 PM</p>
          </div>
        </div>

        <div className="OnlineExamHeader-date">
          <GoStopwatch className="onlineExam-icon" />

          <div className="OnlineExamHeader-text">
            <p>Duration</p>
            <p>{timer} Hour</p>
          </div>
        </div>
      </div>
      {/* end OnlineExamHeader-date-time-duration */}
    </div>
  );
};

export default OnlineExamHeader;
