import { useState } from "react";
import "./AddExam.css";
import ExamInformation from "./ExamInformation/ExamInformation";
import Questions from "./Questions/Questions";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../services/Firebase/Config";
import { Bounce, toast } from "react-toastify";

const AddExam = () => {
  const [coursesName, setCoursesName] = useState("");
  const [level, setLevel] = useState("");
  const [fullMark, setfullMark] = useState("");
  const [examDate, setexamDate] = useState("");
  const [Time, setTime] = useState("");
  const [duration, setDuration] = useState("");

  const [questions, setQuestions] = useState([
    { id: 1, questionText: "", mark: "", type: "", img: "", options: [] },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { questionText: "", mark: "", type: "", img: "", options: [] },
    ]);
  };

  // Handle input changes for fields and options
  const handleInputChange = (index, field, value) => {
    const updatedQuestions = questions.map((question, i) => {
      if (i === index) {
        if (field.includes("options")) {
          // Extract option index from field like 'options[0]'
          const optionIndex = parseInt(field.match(/\d+/)[0], 10);
          const updatedOptions = [...question.options];
          updatedOptions[optionIndex] = value;
          return { ...question, options: updatedOptions };
        }
        // Update other fields like questionText, mark, type
        return { ...question, [field]: value };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  async function Publish() {
    const taskid = Date.now();
    console.log(taskid);
    await setDoc(doc(db, "Exams", taskid.toString()), {
      id: taskid,
      name: coursesName,
      level: level,
      fullMark: fullMark,
      date: examDate,
      time: Time,
      duration: duration,
      questions: questions,
      state: "Upcoming",
    });
    clearall();
    toast("Exam Added successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  async function Draft() {
    const taskid = Date.now();
    console.log(taskid);
    await setDoc(doc(db, "Exams", taskid.toString()), {
      id: taskid,
      name: coursesName,
      level: level,
      fullMark: fullMark,
      date: Date,
      time: Time,
      duration: duration,
      questions: questions,
      state: "fished",
    });
    clearall();
    toast("Exam Save successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  const clearall = () => {
    setCoursesName("");
    setLevel("");
    setfullMark("");
    setexamDate("");
    setTime("");
    setDuration("");
    setQuestions([
      { id: 1, questionText: "", mark: "", type: "", img: "", options: [] },
    ]);
  };

  return (
    <div className="AddExam">
      <div className="AddExam-wrapper">
        <div className="AddExam-contant container">
          <div className="AddExam-top-header">
            <p className="AddExam-title">Add Exam</p>
            <p>6th June 2024</p>
          </div>{" "}
          {/*end AddExam-top-header */}
          <div className="AddExam-header">
            <h5>Add Exam Details</h5>
            <button onClick={Publish}>PUBLISH</button>
          </div>
          <ExamInformation
            coursesName={coursesName}
            setCoursesName={setCoursesName}
            level={level}
            setLevel={setLevel}
            fullMark={fullMark}
            setfullMark={setfullMark}
            examDate={examDate}
            setexamDate={setexamDate}
            Time={Time}
            setTime={setTime}
            duration={duration}
            setDuration={setDuration}
          />
          <Questions
            questions={questions}
            setQuestions={setQuestions}
            addQuestion={addQuestion}
            handleInputChange={handleInputChange}
          />
          {/* save or cancel */}
          <div className="save-cancel">
            <button className="cancel">Cancel</button>
            <button onClick={Draft} className="save">
              Save
            </button>
          </div>{" "}
          {/* save-cancel */}
        </div>{" "}
        {/* AddExam-contant */}
      </div>
      {/* AddExam-wrapper */}
    </div>
  );
};

export default AddExam;
