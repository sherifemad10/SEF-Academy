import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../Context/Context";
import { useContext } from "react";

const InstructorPortalHeader = () => {
  const navgate = useNavigate();
  const { userdata } = useContext(DataContext);

  return (
    <div className="StudentPortalHeader">
      <div className="Name-viewProfile">
        <h6>
          Welcome Back{" "}
          <span>
            {userdata.fristName} {userdata.SecondName}
          </span>
        </h6>

        <button
          onClick={() => {
            navgate("/viewprofile");
          }}
          className="viewProfile"
        >
          View Profile
        </button>
      </div>

      <div className="Exam-courses-user">
        <div className="upcoming-exam-courses">
          <div className="Exam-courses-user-number">
            <p>1</p>
          </div>

          <div className="exam-courses-user-upcoming">
            <p>
              Upcoming <span>Exam</span>
            </p>
          </div>
        </div>

        {/* end Exam-courses-user */}

        <div className="upcoming-exam-courses">
          <div className="Exam-courses-user-number">
            <p>4</p>
          </div>

          <div className="exam-courses-user-upcoming">
            <p>
              REGISTERED <span>COURSES</span>
            </p>
          </div>
        </div>

        {/* end Exam-courses-user */}

        <div className="upcoming-exam-courses">
          <div className="Exam-courses-user-number">
            <p>2</p>
          </div>

          <div className="exam-courses-user-upcoming">
            <p>
              COMPLETED <span>COURSES</span>
            </p>
          </div>
        </div>

        {/* end Exam-courses-user */}
      </div>

      <div className="AllClear">
        <p>
          <span>
            <IoCheckmarkDoneCircle />
          </span>{" "}
          ALL CLEAR, YOU DON'T HAVE ANY EXAMS TODAY.{" "}
        </p>
      </div>
    </div>
  );
};

export default InstructorPortalHeader;
