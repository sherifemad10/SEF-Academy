import ExamQuestions from "./ExamQuestions/ExamQuestions";
import ExamTimer from "./ExamTimer/ExamTimer";
import "./OnlineExam.css";
import OnlineExamHeader from "./OnlineExamHeader/OnlineExamHeader";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../../services/Firebase/Config";
import Loading from "../../../Loading/Loading";

const OnlineExam = () => {
  const { id } = useParams();
  console.log("Exam ID from URL:", id);

  // Get data from the database
  const [value, loading, error] = useCollection(collection(db, "Exams"));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  const examm = value.docs.find((exam) => exam.id === id);
  console.log(examm.data());

  if (!examm) {
    return <h5>No exam found with this ID.</h5>;
  }

  const { questions } = examm.data(); // Assuming the exam data has a 'questions' field
  // console.log(questions)

  // console.log("Exam Data:", questions[0].options);

  const timer = examm.data().duration;
  console.log(timer);

  return (
    <div className="OnlineExam">
      <div className="Exam-wrapper">
        <div className="StudentPortal-contant container">
          <div className="studentPortal-top-header">
            <p className="student-portal">Online Exams</p>
            <p>6th June 2024</p>
          </div>
          {/* studentPortal-top-header */}

          <div className="hearder-online-exam">
            <OnlineExamHeader timer={timer} />
            <ExamTimer timer={timer} />
          </div>

          <ExamQuestions questions={questions} />
        </div>
      </div>
    </div>
  );
};

export default OnlineExam;
