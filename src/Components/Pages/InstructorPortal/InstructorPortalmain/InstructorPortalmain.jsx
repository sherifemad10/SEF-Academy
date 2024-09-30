import { BsClockHistory } from "react-icons/bs";
import "./InstructorPortalmain.css";
import { PiStudentBold } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const InstructorPortalmain = () => {
  const nagvate = useNavigate();
  return (
    <div className="InstructorPortalmain">
      <div className="registeredCourses">
        <h5>Ongoing Courses</h5>

        <div className="registeredCourses-card">
          <h6>Introduction to React js</h6>

          <div className="level-viewDetails">
            <p>Lev : 1</p>
            <div className="student-btnviewDetails">
              <p>
                <span>
                  <PiStudentBold />
                </span>{" "}
                20 Students
              </p>
              <button className="viewDetails">View Details</button>
            </div>
          </div>
        </div>
      </div>
      {/* end registeredCourses */}

      <div className="Exam-Upcoming">
        <div className="Exam-Upcoming-title">
          <h5>Upcoming Exam</h5>
          <button
            onClick={() => {
              nagvate("/createexam");
            }}
          >
            CREATE NEW
          </button>
        </div>
        <div className="Exam-Upcoming-card">
          <div className="Exam-Upcoming-card-date">
            <p>7 TH</p>
            <p className="Month">JUN</p>
            <p className="day">WEB</p>
          </div>

          <div className="Exam-Upcoming-card-text">
            <div className="Exam-Upcoming-card-text-top">
              <h6>Introduction to React js</h6>
              <button>
                {" "}
                <CiEdit />{" "}
              </button>
            </div>

            <p>
              {" "}
              <span>Instructor :</span> Tariq Ali
            </p>

            <div className="level-timer">
              <p>Lev . 1 Exam</p>
              <p>
                <span>
                  {" "}
                  <BsClockHistory />{" "}
                </span>{" "}
                10:00 pm
              </p>
            </div>
          </div>
          {/* Exam-Upcoming-card-text */}
        </div>
      </div>
    </div>
  );
};

export default InstructorPortalmain;
