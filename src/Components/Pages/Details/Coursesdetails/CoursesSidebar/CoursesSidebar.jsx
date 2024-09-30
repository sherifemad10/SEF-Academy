import "./CoursesSidebar.css";

const CoursesSidebar = ({ courses }) => {
  return (
    <div className="CoursesSidebarr">
      <div className="coursesSidebar-text">
        <h6>Assessment</h6>
        <p>{courses.assessment}</p>
      </div>

      <div className="coursesSidebar-text">
        <h6>Requirements</h6>
        <p>{courses.requirements}</p>
      </div>

      <div className="coursesSidebar-text">
        <h6>Materials</h6>
        <p>{courses.materials}</p>
      </div>
    </div>
  );
};

export default CoursesSidebar;
