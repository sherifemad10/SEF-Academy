import "./coursesHeader.css";

const CoursesHeader = ({ courses }) => {
  return (
    <div className="coursesHeader">
      <p className="catogray">Tech</p>
      <h6>{courses.name}</h6>
      <p className="instructor">
        <span>Instructor :</span> {courses.introduction}
      </p>
    </div>
  );
};

export default CoursesHeader;
