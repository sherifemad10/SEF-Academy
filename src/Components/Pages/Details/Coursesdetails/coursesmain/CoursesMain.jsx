import "./coursesMain.css";
import { MdOutlinePlayLesson, MdDateRange } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { PiStudentBold, PiCertificateBold } from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { useState } from "react";

const CoursesMain = ({ courses }) => {
  const [enroll, setEnroll] = useState(false);

  return (
    <div className="CoursesMain">
      <div className="coursesMain-img">
        <img src={courses.img} alt={courses.name} />
      </div>

      <div className="coursesMain-detalis">
        <div className="lesson-level">
          <div className="Lesson">
            <div className="Lesson-icon">
              <MdOutlinePlayLesson />
            </div>

            <div className="Lesson-text">
              <p>Lessons</p>
              <h6>{courses.lesson}</h6>
            </div>
          </div>
          {/* end Lesson */}

          <div className="Level">
            <div className="Level-icon">
              <SiLevelsdotfyi />
            </div>

            <div className="Level-text">
              <p>Level</p>
              <h6>{courses.level}</h6>
            </div>
          </div>
          {/* end Level */}
        </div>
        {/* end lesson-level */}

        <div className="coursesMain-detalis-text">
          <p>
            <span>
              {" "}
              <PiStudentBold />{" "}
            </span>{" "}
            Students : 20{" "}
          </p>

          <p>
            <span>
              {" "}
              <IoLanguage />{" "}
            </span>{" "}
            Language : {courses.language}{" "}
          </p>

          <p>
            <span>
              {" "}
              <GiDuration />{" "}
            </span>{" "}
            Duration: {courses.duration}{" "}
          </p>

          <p>
            <span>
              {" "}
              <MdDateRange />{" "}
            </span>{" "}
            Start Date : {courses.startData}{" "}
          </p>

          <p>
            <span>
              {" "}
              <PiCertificateBold />{" "}
            </span>{" "}
            Certificate : {courses.certificate}{" "}
          </p>
        </div>
        {/* end coursesMain-detalis-text */}

        <div className="coursesMain-btn">
          {enroll ? (
            <button
              onClick={() => {
                setEnroll(false);
              }}
              className="enrolled"
            >
              Enroll
            </button>
          ) : (
            <button
              onClick={() => {
                setEnroll(true);
              }}
              className="enroll"
            >
              Enroll
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesMain;
