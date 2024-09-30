import "./InstructorPortalUpcoming.css";
import img from "../../../../../public/assets/react.jpeg";
import { MdOutlineDateRange, MdOutlinePlayLesson } from "react-icons/md";

const InstructorPortalUpcoming = () => {
  return (
    <div className="InstructorPortalUpcoming">
      <h6>Upcoming Courses</h6>

      <div className="InstructorPortalUpcoming-card">
        <div className="InstructorPortalUpcoming-img">
          <img src={img} alt="" />
          <p>LEV.1</p>
        </div>

        <div className="InstructorPortalUpcoming-text">
          <h6>Python for Beginners</h6>
          <div className="InstructorPortalUpcoming-data-time-details">
            <div className="InstructorPortalUpcoming-data-time">
              <p>
                <span>
                  <MdOutlineDateRange />
                </span>
                6th June 2024
              </p>
              <p>
                <span>
                  <MdOutlinePlayLesson />
                </span>
                12 Lesson
              </p>
            </div>

            <div className="InstructorPortalUpcoming-data-detail-btn">
              <button>VIEW DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorPortalUpcoming;
