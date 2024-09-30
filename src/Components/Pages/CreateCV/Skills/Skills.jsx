import { RiDeleteBin6Line } from "react-icons/ri";
import "./Skills.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import DataContext from "../../../Context/Context";
// import CVPage from '../CV/CV'

const Skills = () => {
  const { skills, setSkills } = useContext(DataContext);

  // Handle input change
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value;
    setSkills(updatedSkills);
  };

  // Add new skill field
  const handleAdd = () => {
    setSkills([...skills, { skill: "" }]);
  };

  // Remove skill field
  const handleRemove = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <div className="Skills-page">
      <form className="Skills-page-form">
        {skills.map((skill, index) => (
          <div className="Skills-page-form-warpper" key={index}>
            <div className="Skills-page-form-contant">
              <div className="Skills-page-form-warpper-skills">
                <label htmlFor={`skill-${index}`}>Skills</label>
                <input
                  type="text"
                  id={`skill-${index}`}
                  name="skill"
                  value={skill.skill}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
            </div>

            <div className="skill-page-form-add-remove">
              <div className="skill-page-form-add">
                <button type="button" className="added" onClick={handleAdd}>
                  <IoMdAddCircleOutline />
                </button>
              </div>
              <div className="skill-page-form-remove">
                <button
                  type="button"
                  className="remove"
                  onClick={() => handleRemove(index)}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* <div className='YourLinks-continue-back'>
        <button className='Back' type='button'>BACK</button>
        <button type='submit'>CONTINUE</button>
      </div> */}
      </form>

      {/* <CVPage /> */}
    </div>
  );
};

export default Skills;
