import { useState } from "react";
import Sidebar from "../../AdminPanal/Sidebar/Sidebar";
import Uploadimg from "../UploadImg/Uploadimg";
import "./AddCourses.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../services/Firebase/Config";
import { IoMdAddCircleOutline } from "react-icons/io";
import MobilSidebar from "../../AdminPanal/Users/Mobile/MobilSidebar/MobilSidebar";
import { Bounce, toast } from "react-toastify";

const AddCourses = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [lesson, setLessons] = useState("");
  const [language, setLanguage] = useState("");
  const [startData, setStartData] = useState("");
  const [duration, setDuration] = useState("");
  const [certificate, setCertificate] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [assessment, setAssessment] = useState("");
  const [requirements, setRequirements] = useState("");
  const [materials, setMaterials] = useState("");
  const [img, setImg] = useState("");

  const [lessons, setLessonsArray] = useState([
    { title: "", description: "", url: "" },
  ]);

  // Add a new lesson input
  const addLesson = () => {
    setLessonsArray([...lessons, { title: "", description: "", url: "" }]);
  };

  // Handle lesson input change
  const handleLessonChange = (index, field, value) => {
    const updatedLessons = lessons.map((lesson, i) =>
      i === index ? { ...lesson, [field]: value } : lesson
    );
    setLessonsArray(updatedLessons);
  };

  // delete

  const handleDelete = (index) => {
    const updatedLessons = [...lessons];
    updatedLessons.splice(index, 1);
    setLessonsArray(updatedLessons);
  };

  // publish
  async function Publish() {
    const taskid = Date.now();
    console.log(taskid);
    await setDoc(doc(db, "Courses", taskid.toString()), {
      id: taskid,
      name: name,
      level: level,
      lesson: lesson,
      language: language,
      startData: startData,
      duration: duration,
      certificate: certificate,
      introduction: introduction,
      assessment: assessment,
      requirements: requirements,
      materials: materials,
      lessonscontant: lessons,
      time: Date.now(),
      img: img,
      state: "On Going",
    });
    clearForm();
    toast("Courses Publish successfully", {
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

  // Draft
  async function Draft() {
    const taskid = Date.now();
    console.log(taskid);
    await setDoc(doc(db, "Courses", taskid.toString()), {
      id: taskid,
      name: name,
      level: level,
      lessons: lesson,
      language: language,
      startData: startData,
      duration: duration,
      certificate: certificate,
      introduction: introduction,
      assessment: assessment,
      requirements: requirements,
      materials: materials,
      lessonscontant: lessons,
      time: Date.now(),
      img: img,
      state: "Ended",
    });
    clearForm();
    toast("Courses Save successfully", {
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

  // Clear form data
  const clearForm = () => {
    setName("");
    setLevel("");
    setLessons("");
    setLanguage("");
    setStartData("");
    setDuration("");
    setCertificate("");
    setIntroduction("");
    setAssessment("");
    setRequirements("");
    setMaterials("");
    setImg("");
    setLessonsArray([{ title: "", description: "", url: "" }]);
  };

  return (
    <div className="AddCourses">
      <div className="AddCourses-wrapper">
        <div className="AddCourses-contant container">
          <div className="article-header">
            <div className="admin-panel">
              <p className="AdminPanel">Create New Courses</p>
              <p>6th June 2024</p>
            </div>
          </div>
          {/* article-header */}
          <div className="courses-body">
            <MobilSidebar />
            <Sidebar />
            <div className="add-courses-form">
              <div className="add-courses-header">
                <div className="coursess">
                  <h5>Add Courses Details</h5>
                </div>

                <div className="publish">
                  <button onClick={Publish} className="publish-btn">
                    Publish
                  </button>
                </div>
              </div>{" "}
              {/* end add-courses-header */}
              <form>
                <div className="name-level-number">
                  <div className="name">
                    <label htmlFor="course-name">Course Name</label>
                    <input
                      id="course-name"
                      type="text"
                      value={name}
                      onChange={(eo) => {
                        setName(eo.target.value);
                      }}
                    />
                  </div>
                  <div className="level">
                    <label htmlFor="level">Level</label>
                    <select
                      id="level"
                      value={level}
                      onChange={(eo) => {
                        setLevel(eo.target.value);
                      }}
                    >
                      <option value="" hidden></option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div className="number-of-lesson">
                    <label htmlFor="course-number">Number of Lessons</label>
                    <input
                      id="course-number"
                      type="number"
                      value={lesson}
                      onChange={(eo) => {
                        setLessons(eo.target.value);
                      }}
                    />
                  </div>{" "}
                  {/* number-of-lesson */}
                </div>{" "}
                {/* name-level-number */}
                <div className="language-data-duration-certificate">
                  <div className="language">
                    <label htmlFor="language">Language</label>
                    <input
                      type="text"
                      id="language"
                      value={language}
                      onChange={(eo) => {
                        setLanguage(eo.target.value);
                      }}
                    />
                  </div>
                  <div className="start-data">
                    <label htmlFor="data">Start Date</label>
                    <input
                      type="date"
                      id="data"
                      value={startData}
                      onChange={(eo) => {
                        setStartData(eo.target.value);
                      }}
                    />
                  </div>{" "}
                  {/* start-data */}
                  <div className="duration">
                    <label htmlFor="duration">Duration</label>
                    <input
                      type="time"
                      id="duration"
                      value={duration}
                      onChange={(eo) => {
                        setDuration(eo.target.value);
                      }}
                    />
                  </div>
                  <div className="certificate">
                    <label htmlFor="certificate">Certificate</label>
                    <input
                      type="text"
                      id="certificate"
                      value={certificate}
                      onChange={(eo) => {
                        setCertificate(eo.target.value);
                      }}
                    />
                  </div>{" "}
                  {/* certificate */}
                </div>{" "}
                {/* language-data-duration-certificate */}
                <div className="course-introduction">
                  <label htmlFor="introduction">Course Introduction</label>
                  <textarea
                    id="introduction"
                    rows="4"
                    cols="50"
                    value={introduction}
                    onChange={(eo) => {
                      setIntroduction(eo.target.value);
                    }}
                  ></textarea>
                </div>{" "}
                {/* course-introduction */}
                <div className="assessment-requirements">
                  <div className="assessment">
                    <label htmlFor="assessment"> Courses Assessment</label>
                    <textarea
                      id="assessment"
                      rows="4"
                      cols="50"
                      value={assessment}
                      onChange={(eo) => {
                        setAssessment(eo.target.value);
                      }}
                    ></textarea>
                  </div>{" "}
                  {/* assessment */}
                  <div className="requirements">
                    <label htmlFor="requirements">Courses Requirements</label>
                    <textarea
                      id="requirements"
                      rows="4"
                      cols="50"
                      value={requirements}
                      onChange={(eo) => {
                        setRequirements(eo.target.value);
                      }}
                    ></textarea>
                  </div>{" "}
                  {/* requirements */}
                </div>{" "}
                {/* assessment-requirements */}
                <div className="course-materials">
                  <label htmlFor="material">Course Materials</label>
                  <textarea
                    id="material"
                    rows="4"
                    cols="50"
                    value={materials}
                    onChange={(eo) => {
                      setMaterials(eo.target.value);
                    }}
                  ></textarea>
                </div>{" "}
                {/* course-material */}
                <div className="Publishing-Date">
                  <label htmlFor="Publishing-Date">Publishing Date</label>
                  <input type="date" id="Publishing-Date" />
                </div>{" "}
                {/* Publishing-Date */}
                <Uploadimg setImg={setImg} img={img} />
                <div className="Lessons">
                  <label htmlFor="Lessons">Lessons</label>

                  {lessons.map((lesson, index) => (
                    <div className="lesson-contanter" key={index}>
                      <div className="lesson-contant">
                        <div className="lesson-contant-header">
                          <h5>Lesson {index + 1}</h5>

                          <button onClick={handleDelete} className="button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 69 14"
                              className="svgIcon bin-top"
                            >
                              <g clipPath="url(#clip0_35_24)">
                                <path
                                  fill="black"
                                  d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_35_24">
                                  <rect fill="white" height={14} width={69} />
                                </clipPath>
                              </defs>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 69 57"
                              className="svgIcon bin-bottom"
                            >
                              <g clipPath="url(#clip0_35_22)">
                                <path
                                  fill="black"
                                  d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_35_22">
                                  <rect fill="white" height={57} width={69} />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </div>{" "}
                        {/* lesson-contant-header */}
                        <div className="lesson-title">
                          <label htmlFor="lesson-title">Title</label>
                          <input
                            type="text"
                            name="lesson-title"
                            id="lesson-title"
                            value={lesson.title}
                            onChange={(e) =>
                              handleLessonChange(index, "title", e.target.value)
                            }
                          />
                        </div>{" "}
                        {/* lesson-title */}
                        <div className="lesson-description">
                          <label htmlFor="lesson-description">
                            Description
                          </label>
                          <textarea
                            name="lesson-description"
                            id="lesson-description"
                            cols="30"
                            rows="4"
                            value={lesson.description}
                            onChange={(e) =>
                              handleLessonChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                          ></textarea>
                        </div>{" "}
                        {/* lesson-description */}
                        <div className="lecture-url">
                          <label htmlFor="lecture-url">Lecture URL</label>
                          <input
                            type="link"
                            name="lecture-url"
                            id="lecture-url"
                            value={lesson.url}
                            onChange={(e) =>
                              handleLessonChange(index, "url", e.target.value)
                            }
                          />
                        </div>{" "}
                        {/* lecture-url */}
                      </div>{" "}
                      {/* lesson-contant */}
                      <div className="add-lessson">
                        <h6>Add Lesson</h6>
                        <IoMdAddCircleOutline
                          onClick={addLesson}
                          className="addLesson-icon"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* save or cancel */}
                <div className="save-cancel">
                  <button className="cancel">Cancel</button>
                  <button onClick={Draft} className="save">
                    Save
                  </button>
                </div>{" "}
                {/* save-cancel */}
              </form>
            </div>{" "}
            {/* add-courses-form */}
          </div>{" "}
          {/* courses-body */}
        </div>
        {/* AddCourses-contant */}
      </div>
      {/* AddCourses-wrapper"> */}
    </div>
  );
};

export default AddCourses;
