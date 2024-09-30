import "./JobsDetails.css";
import Loading from "../../../Loading/Loading";
import { doc, setDoc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../../services/Firebase/Config";
import { useParams } from "react-router-dom";
import { useState } from "react";
import UploadCv from "./UploadCV/UploadCV";
import { Bounce, toast } from "react-toastify";

const JobsDetails = () => {
  const [apply, setApply] = useState(false);
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [mobile, setMobile] = useState("");
  const [cv, setCV] = useState("");
  const { id } = useParams();
  const [value, loading, error] = useDocument(doc(db, "Jobs", id));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  const jobs = value.data();

  // submit
  async function Submit(e) {
    e.preventDefault();
    const taskid = Date.now();
    await setDoc(doc(db, "Applicants", taskid.toString()), {
      id: taskid,
      company: jobs.company,
      position: jobs.position,
      email: email,
      experience: experience,
      mobile: mobile,
      cv: cv,
      jobId: id,
      status: "Pending",
    });
    toast("Your application has been submitted successfully", {
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
    setApply(false);
    setEmail("");
    setExperience("");
    setMobile("");
    setCV("");
  }

  function cancel(e) {
    e.preventDefault();
    setApply(false);
    setEmail("");
    setExperience("");
    setMobile("");
    setCV("");
  }

  return (
    <div className="JobsDetails">
      <div className="AllJobs-wrapper">
        <div className="AllJobs-contant container">
          <div className="AllJobs-top-header">
            <p className="Jobs-portal">job Details</p>
            <p>{jobs.time}</p>
          </div>

          <div className="JobsDetails-wrappper">
            <div className="JobsDetails-header">
              <div className="JobsDetails-header-title-state-apply">
                <h2>{jobs.filed}</h2>
                <div className="jobType-status">
                  <p>{jobs.jobType}</p>
                  <p>{jobs.status}</p>
                </div>

                <h6>{jobs.company}</h6>

                <p className="posted-time">Posted {jobs.time}</p>

                {apply ? (
                  <form className="Apply-for-job">
                    <div className="email-experence">
                      <div className="your-email">
                        <label htmlFor="email">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="Years-Of-Experience">
                        <label htmlFor="Experience">Years Of Experience</label>
                        <input
                          type="number"
                          name="Experience"
                          id="Experience"
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="Mobile-number">
                      <label htmlFor="Mobile-number">Mobile Number</label>
                      <input
                        type="number"
                        name="Mobile-number"
                        id="Mobile-number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>

                    <UploadCv cv={cv} setCV={setCV} />

                    <div className="cancel-submit-btn">
                      <button onClick={cancel} className="cancel">
                        Cancel
                      </button>
                      <button onClick={Submit} className="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <button className="applyNow" onClick={() => setApply(true)}>
                    Apply For Job
                  </button>
                )}
              </div>

              <div className="JobsDetails-header-img">
                <img src={jobs.img} alt={jobs.title} />
              </div>
            </div>
            {/* end JobsDetails-header */}

            <div className="JobsDetails-aboutCompony">
              <h6> About Compony</h6>
              <p>{jobs.aboutCompony}</p>
            </div>

            <div className="JobsDetails-aboutCompony">
              <h6>Job Description</h6>
              <p>{jobs.jobDescription}</p>
            </div>

            <div className="JobsDetails-aboutCompony">
              <h6>Job Requirements</h6>
              <p>{jobs.jobRequirements}</p>
            </div>
            <div className="JobsDetails-aboutCompony">
              <h6>Job Skills</h6>
              <p>{jobs.skills}</p>
            </div>
          </div>
          {/* end JobsDetails-wrappper */}
        </div>
      </div>
    </div>
  );
};

export default JobsDetails;
