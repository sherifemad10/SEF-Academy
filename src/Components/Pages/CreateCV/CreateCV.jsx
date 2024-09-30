import "./CreateCV.css";
import TimeFromNow from "../../CustomHooks/UseTimer";
import CreateCVRoute from "./CreateCVRoute/CreateCVRoute";
import CVPage from "./CV/CV";
import MainInformation from "./MainInformation/MainInformation";
import YourLinks from "./YourLinks/YourLinks";
import Summary from "./Summary/Summary";
import Education from "./Education/Education";
import WorkExperience from "./WorkExperience/WorkExperience";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Languages from "./Languages/Languages";
import { useEffect, useState } from "react";
import html2pdf from "html2pdf.js";

const CreateCV = () => {
  // State to manage the current step
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("cvStep");
    return savedStep ? parseInt(savedStep) : 0;
  });
  // Persist step on change
  useEffect(() => {
    localStorage.setItem("cvStep", step);
  }, [step]);

  // Array of components for each section
  const sections = [
    <MainInformation />,
    <YourLinks />,
    <Summary />,
    <Education />,
    <WorkExperience />,
    <Project />,
    <Skills />,
    <Languages />,
  ];

  // Function to go to the next step
  const handleNext = () => {
    if (step < sections.length - 1) {
      setStep(step + 1);
    }
  };

  // Function to go to the previous step
  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // Function to handle the download of the CV as PDF
  const handleDownload = () => {
    const element = document.getElementById("cv-page");

    // Options for pdf generation
    const options = {
      margin: 0, // Set margin to 0 for full page usage
      filename: "CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 }, // Adjust scale for better quality
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // A4 format
    };

    // Generate the PDF
    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="CreateCV">
      <div className="CreateCV-wrapper">
        <div className="CreateCV-contant container">
          <div className="CreateCV-top-header">
            <p className="CV-portal">Create CV</p>
            <p>{TimeFromNow(Date.now())}</p>
          </div>
          {/* end CreateCV-top-header */}

          <div className="createCV-customize-your-cv">
            <h3>Customize Your CV</h3>
            <p>
              Here you can create your CV by answering questions and getting it
              ready for download or applying to jobs through the platform.
            </p>
          </div>
          {/* end createCV-customize-your-cv */}

          <CreateCVRoute currentStep={step} />

          <div className="createCV-body">
            {/* Always render CVPage as static */}
            <div id="cv-page">
              <CVPage />
            </div>

            <div className="createCV-body-form-btn">
              {sections[step]}

              <div className="continue-back">
                {step > 0 && (
                  <div className="back-btn">
                    <button onClick={handleBack}>BACK</button>
                  </div>
                )}

                <div className="continue">
                  {step < sections.length - 1 ? (
                    <button onClick={handleNext}>CONTINUE</button>
                  ) : (
                    <button onClick={handleDownload}>DOWNLOAD CV</button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* end createCV-body */}
        </div>
        {/* end CreateCV-contant */}
      </div>
      {/* end CreateCV-wrapper */}
    </div>
  );
};

export default CreateCV;
