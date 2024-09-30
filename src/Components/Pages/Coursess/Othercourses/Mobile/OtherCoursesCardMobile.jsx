import "./OtherCoursesCardMobile.css";
import { useNavigate } from "react-router-dom";

const OtherCoursesCardMobile = ({
  id,
  img,
  name,
  lesson,
  introduction,
  startData,
  level,
}) => {
  const navigate = useNavigate();

  return (
    <div className="OtherCoursesCardMobile">
      <div className="OtherCoursesCardMobile-img">
        <img src={img} alt="courses img" />
      </div>

      <div className="OtherCoursesCardMobile-text">
        <h4>{name}</h4>
      </div>

      <div className="OtherCoursesCardMobile-text">
        <p>
          <span>Lessons : </span> {lesson} Lessons
        </p>
      </div>

      <div className="OtherCoursesCardMobile-text">
        <p>
          <span>Instructor : </span> {introduction}
        </p>
      </div>

      <div className="OtherCoursesCardMobile-text">
        <p>
          <span>Level : </span> {level}
        </p>
      </div>

      <div className="OtherCoursesCardMobile-text">
        <p>
          <span>Start Date : </span> {startData}
        </p>
      </div>

      <div className="OtherCoursesCardMobile-action">
        <p onClick={() => navigate(`/coursesDetails/${id}`)}>View Details</p>
        <button>Enroll</button>
      </div>
    </div>
  );
};

export default OtherCoursesCardMobile;
