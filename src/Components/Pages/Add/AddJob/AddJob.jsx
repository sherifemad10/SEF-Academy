import { useState } from "react";
import Sidebar from "../../AdminPanal/Sidebar/Sidebar";
import HeaderOfAdd from "../HeaderofAdd/HeaderOfAdd";
import "./AddJob.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../services/Firebase/Config";
import Uploadimg from "../UploadImg/Uploadimg";
import MobilSidebar from "../../AdminPanal/Users/Mobile/MobilSidebar/MobilSidebar";
import { Bounce, toast } from "react-toastify";

const AddJob = () => {
  const titleHeader = "Create New Job";

  const [company, setCompany] = useState("");
  const [filed, setFiled] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const [aboutCompony, setAboutCompony] = useState("");
  const [position, setPosition] = useState("");
  const [jobType, setJobType] = useState("");
  const [status, setStatus] = useState("");
  const [salarystart, setSalarystart] = useState("");
  const [salaryend, setSalaryend] = useState("");
  const [currency, setCurrency] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobRequirements, setJobRequirements] = useState("");
  const [skills, setSkills] = useState([]);
  // const [time,setTime] = useState('')
  // const [Applications,setApplications] = useState('')
  // const [type,setType] = useState('')

  async function Publish() {
    const taskid = Date.now();
    console.log(taskid);
    await setDoc(doc(db, "Jobs", taskid.toString()), {
      id: taskid,
      company: company,
      position: position,
      status: status,
      time: Date.now(),
      img: img,
      filed: filed,
      location: location,
      aboutCompony: aboutCompony,
      jobType: jobType,
      // type: type,
      salarystart: salarystart,
      salaryend: salaryend,
      currency: currency,
      jobDescription: jobDescription,
      jobRequirements: jobRequirements,
      skills: skills,
      state: "Open",
    });
    clearAll();

    toast("Job Publish successfully", {
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
    await setDoc(doc(db, "Jobs", taskid.toString()), {
      id: taskid,
      company: company,
      position: position,
      status: status,
      time: Date.now(),
      img: img,
      filed: filed,
      location: location,
      aboutCompony: aboutCompony,
      jobType: jobType,
      // type: type,
      salarystart: salarystart,
      salaryend: salaryend,
      currency: currency,
      jobDescription: jobDescription,
      jobRequirements: jobRequirements,
      skills: skills,
      state: "close",
    });
    clearAll();
    toast("Job Save successfully", {
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

  const clearAll = () => {
    setCompany("");
    setFiled("");
    setLocation("");
    setImg("");
    setAboutCompony("");
    setPosition("");
    setJobType("");
    setStatus("");
    setSalarystart("");
    setSalaryend("");
    setCurrency("");
    setJobDescription("");
    setJobRequirements("");
    setSkills([]);
  };

  return (
    <div className="addjob">
      <div className="addjob-wrapper">
        <div className="addjob-contant container">
          <HeaderOfAdd titleHeader={titleHeader} />

          {/* Job-body */}
          <div className="job-body">
            <MobilSidebar />
            <Sidebar />

            {/* Add Job */}
            <div className="add-job-form">
              <div className="add-job-header">
                <div className="Jobss-title">
                  <h5>Add Jobs Details</h5>
                </div>

                <div className="publish">
                  <button
                    className="publish-btn"
                    onClick={() => {
                      Publish();
                    }}
                  >
                    Publish
                  </button>
                </div>
              </div>{" "}
              {/* end posted-artical-header */}
              {/* form */}
              <form>
                <div className="compony-field-location-img">
                  <div className="compony-field-location">
                    <div className="compony">
                      <label htmlFor="company-name">Company Name</label>
                      <input
                        id="company-name"
                        type="text"
                        value={company}
                        onChange={(e) => {
                          setCompany(e.target.value);
                        }}
                      />
                    </div>
                    {/* compony */}
                    <div className="field-location">
                      <div className="Field" name="field">
                        <label htmlFor="field">Field</label>

                        <select
                          id="field-list"
                          value={filed}
                          onChange={(e) => {
                            setFiled(e.target.value);
                          }}
                        >
                          <option value="" hidden></option>
                          <option value="FrontEnd">FrontEnd</option>
                          <option value="BackEnd">BackEnd</option>
                          <option value="UI/UX">UI/UX</option>
                        </select>
                      </div>{" "}
                      {/* Field */}
                      <div className="location">
                        <label htmlFor="location">Location</label>

                        {/* <input type="text" id="category" list="location-list" /> */}

                        <select
                          id="location-list"
                          name="location"
                          value={location}
                          onChange={(e) => {
                            setLocation(e.target.value);
                          }}
                        >
                          <option value="" hidden></option>
                          <option value="new-york">New York</option>
                          <option value="london">London</option>
                          <option value="tokyo">Tokyo</option>
                          <option value="cairo">Cairo</option>
                        </select>
                      </div>{" "}
                      {/* location */}
                    </div>{" "}
                    {/* field-location */}
                  </div>{" "}
                  {/* compony-field-location */}
                  {/* upload logo */}
                  <Uploadimg setImg={setImg} />
                </div>{" "}
                {/* compony-field-location-img */}
                <div className="about-compony">
                  <label htmlFor="about-compony">About Company</label>
                  <textarea
                    name="about-compony"
                    id="about-compony"
                    cols="5"
                    rows="8"
                    value={aboutCompony}
                    onChange={(e) => {
                      setAboutCompony(e.target.value);
                    }}
                  ></textarea>
                </div>{" "}
                {/* about-compony */}
                <div className="postion-jobtype">
                  <div className="postion">
                    <label htmlFor="postion">Postion</label>
                    <input
                      type="text"
                      id="postion"
                      value={position}
                      onChange={(e) => {
                        setPosition(e.target.value);
                      }}
                    />
                  </div>
                  <div className="job-type">
                    <label htmlFor="job-type">Job Type</label>

                    <select
                      id="job-type"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    >
                      <option value="" hidden></option>
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>{" "}
                  {/* job-type */}
                  <div className="Remote-onsite">
                    <div className="Remote">
                      <input
                        type="radio"
                        id="cbx2"
                        style={{ display: "none" }}
                        name="type"
                        value="Remote"
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      <label htmlFor="cbx2" className="check">
                        <svg width="18px" height="18px" viewBox="0 0 18 18">
                          <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
                          <polyline points="1 9 7 14 15 4" />
                        </svg>
                      </label>

                      <label htmlFor="Remote">Remote</label>
                    </div>

                    <div className="onsite">
                      <input
                        type="radio"
                        id="cbx3"
                        style={{ display: "none" }}
                        name="type"
                        value="onsite"
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      <label htmlFor="cbx3" className="check">
                        <svg width="18px" height="18px" viewBox="0 0 18 18">
                          <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
                          <polyline points="1 9 7 14 15 4" />
                        </svg>
                      </label>

                      <label htmlFor="onsite">Onsite</label>
                    </div>
                  </div>
                  {/* Remote-onsite */}
                </div>
                {/* postion-jobtype */}
                <div className="salary-currency">
                  <div className="salary">
                    <div className="salarystart">
                      <label htmlFor="salary">Salary Range</label>
                      <input
                        type="number"
                        id="salary"
                        value={salarystart}
                        onChange={(e) => setSalarystart(e.target.value)}
                      />
                    </div>

                    <p>To</p>
                    <div className="salaryend">
                      <input
                        type="number"
                        id="salary"
                        value={salaryend}
                        onChange={(e) => setSalaryend(e.target.value)}
                      />
                    </div>
                  </div>
                  {/*salary */}
                  <div className="currency">
                    <label htmlFor="currency">Currency</label>
                    <select
                      id="currency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option value="" hidden></option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="EGP">EGP</option>
                    </select>
                  </div>{" "}
                  {/* currency */}
                </div>
                {/* salary-currency */}
                <div className="jobDescription">
                  <label htmlFor="jobDescription">Job Description</label>
                  <textarea
                    name="jobDescription"
                    id="jobDescription"
                    cols="30"
                    rows="10"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  ></textarea>
                </div>{" "}
                {/* jobDescription */}
                <div className="jobRequirement">
                  <label htmlFor="jobRequirement">Job Requirement</label>
                  <textarea
                    name="jobRequirement"
                    id="jobRequirement"
                    cols="30"
                    rows="10"
                    value={jobRequirements}
                    onChange={(e) => setJobRequirements(e.target.value)}
                  ></textarea>
                </div>{" "}
                {/* jobRequirement */}
                <div className="requiredSkills">
                  <label htmlFor="requiredSkills">Skills</label>
                  <input
                    type="text"
                    id="requiredSkills"
                    value={skills}
                    onChange={(e) => {
                      setSkills(e.target.value);
                    }}
                  />
                </div>{" "}
                {/* requiredSkills */}
                {/* save or cancel */}
                <div className="save-cancel">
                  <button onClick={clearAll} className="cancel">
                    Cancel
                  </button>
                  <button
                    className="save"
                    onClick={(e) => {
                      e.preventDefault();
                      Draft();
                    }}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>{" "}
        {/* addjob-contant */}
      </div>
      {/* addjob-wrapper */}
    </div>
  );
};

export default AddJob;
