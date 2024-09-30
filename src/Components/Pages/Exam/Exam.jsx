import Pagination from "../AdminPanal/Articles/Pagination/Pagination";
import "./Exam.css";
import PreviousExams from "./PreviousExams/PreviousExams";
import UpcomingExams from "./UpcomingExams/UpcomingExams";

const Exam = () => {
  return (
    <div className="Exam">
      <div className="Exam-wrapper">
        <div className="StudentPortal-contant container">
          <div className="studentPortal-top-header">
            <p className="student-portal">Exams</p>
            <p>6th June 2024</p>
          </div>
          {/* studentPortal-top-header */}

          <UpcomingExams />

          <PreviousExams />

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Exam;
