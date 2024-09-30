import "./CreateCVRoute.css";

const CreateCVRoute = ({ currentStep }) => {
  const isActive = (stepNumber) => currentStep === stepNumber;

  return (
    <div className="CreateCVRoute">
      <div className={`main-information ${isActive(0) ? "active-step" : ""}`}>
        <div className="main-information-number">
          <p>1</p>
        </div>
        <div className="main-information-text">
          <h5>MAIN INFORMATION</h5>
        </div>
      </div>

      <div className={`summary ${isActive(1) ? "active-step" : ""}`}>
        <div className="summary-number">
          <p>2</p>
        </div>
        <div className="summary-text">
          <h5>LINKS</h5>
        </div>
      </div>

      <div className={`your-skills ${isActive(2) ? "active-step" : ""}`}>
        <div className="your-skills-number">
          <p>3</p>
        </div>
        <div className="your-skills-text">
          <h5>SUMMARY</h5>
        </div>
      </div>

      <div className={`your-experience ${isActive(3) ? "active-step" : ""}`}>
        <div className="your-experience-number">
          <p>4</p>
        </div>
        <div className="your-experience-text">
          <h5>EDUCATION</h5>
        </div>
      </div>

      <div className={`your-education ${isActive(4) ? "active-step" : ""}`}>
        <div className="your-education-number">
          <p>5</p>
        </div>
        <div className="your-education-text">
          <h5>EXPERIENCE</h5>
        </div>
      </div>

      <div className={`your-honers-awards ${isActive(5) ? "active-step" : ""}`}>
        <div className="your-honers-awards-number">
          <p>6</p>
        </div>
        <div className="your-honers-awards-text">
          <h5>PROJECT</h5>
        </div>
      </div>

      <div
        className={`your-hobbies-interests ${isActive(6) ? "active-step" : ""}`}
      >
        <div className="your-hobbies-interests-number">
          <p>7</p>
        </div>
        <div className="your-hobbies-interests-text">
          <h5>SKILLS</h5>
        </div>
      </div>

      <div className={`your-links ${isActive(7) ? "active-step" : ""}`}>
        <div className="your-links-number">
          <p>8</p>
        </div>
        <div className="your-links-text">
          <h5>LANGUAGES</h5>
        </div>
      </div>
    </div>
  );
};

export default CreateCVRoute;
