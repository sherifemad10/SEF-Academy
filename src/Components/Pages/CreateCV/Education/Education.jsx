// import CVPage from '../CV/CV'
import { useContext } from "react";
import "./Education.css";
import DataContext from "../../../Context/Context";

const Education = () => {
  const {
    degree,
    setDegree,
    university,
    setUniversity,
    startyear,
    setStartyear,
    graduate,
    setGraduate,
    GPA,
    setGPA,
  } = useContext(DataContext);
  return (
    <div className="Education-page">
      <form className="Education-page-form">
        <div className="Education-page-form-degree">
          <label>Degree</label>
          <input
            type="text"
            placeholder="Bachelor of Computer Science"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>

        <div className="Education-page-form-university">
          <label>University</label>
          <input
            type="text"
            placeholder="University of Menoufia"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </div>

        <div className="Education-page-form-start-end-year">
          <div className="Education-page-form-startyear">
            <label>Start Year</label>
            <input
              type="number"
              placeholder="2020"
              value={startyear}
              onChange={(e) => setStartyear(e.target.value)}
            />
          </div>
          <div className="Education-page-form-graduate">
            <label>Graduate Year</label>
            <input
              type="number"
              placeholder="2024"
              value={graduate}
              onChange={(e) => setGraduate(e.target.value)}
            />
          </div>
        </div>

        <div className="Education-page-form-GPA">
          <label>GPA</label>
          <input
            type="text"
            placeholder="Excellent"
            value={GPA}
            onChange={(e) => setGPA(e.target.value)}
          />
        </div>

        {/* <div className='YourLinks-continue-back'>
          <button className='Back'>BACK</button>
          <button>CONTINUE</button>
        </div> */}
      </form>

      {/* <CVPage /> */}
    </div>
  );
};

export default Education;
