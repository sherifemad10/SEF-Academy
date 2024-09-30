import { useContext } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
// import CVPage from '../CV/CV';
import "./WorkExperience.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import DataContext from "../../../Context/Context";

const WorkExperience = () => {
  const { workExperiences, setWorkExperiences } = useContext(DataContext);

  // Handle input change
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedWorkExperiences = [...workExperiences];
    updatedWorkExperiences[index][name] = value;
    setWorkExperiences(updatedWorkExperiences);
  };

  // Add new work experience field
  const handleAdd = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        position: "",
        company: "",
        role: "",
        start: "",
        end: "",
        description: "",
      },
    ]);
  };

  // Remove work experience field
  const handleRemove = (index) => {
    const updatedWorkExperiences = workExperiences.filter(
      (_, i) => i !== index
    );
    setWorkExperiences(updatedWorkExperiences);
  };

  return (
    <div className="WorkExperience-page">
      <form className="WorkExperience-page-form">
        {workExperiences.map((experience, index) => (
          <div key={index} className="WorkExperience-page-form-wrapper">
            <div className="WorkExperience-page-form-contant">
              <div className="WorkExperience-page-form-postion-company">
                <div className="WorkExperience-page-form-postion">
                  <label htmlFor={`position-${index}`}>Position</label>
                  <input
                    type="text"
                    id={`position-${index}`}
                    name="position"
                    placeholder="Front-End Developer"
                    value={experience.position}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div className="WorkExperience-page-form-company">
                  <label htmlFor={`company-${index}`}>Company</label>
                  <input
                    type="text"
                    id={`company-${index}`}
                    name="company"
                    placeholder="SEF Academy"
                    value={experience.company}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
              </div>

              <div className="WorkExperience-page-form-Role">
                <label htmlFor={`role-${index}`}>Role</label>
                <input
                  type="text"
                  id={`role-${index}`}
                  name="role"
                  placeholder="Team Leader"
                  value={experience.role}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div className="WorkExperience-page-form-year">
                <div className="WorkExperience-page-form-start">
                  <label htmlFor={`start-${index}`}>From</label>
                  <input
                    type="number"
                    id={`start-${index}`}
                    name="start"
                    placeholder="2023"
                    value={experience.start}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>

                <div className="WorkExperience-page-form-end">
                  <label htmlFor={`end-${index}`}>To</label>
                  <input
                    type="number"
                    id={`end-${index}`}
                    name="end"
                    placeholder="2024"
                    value={experience.end}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
              </div>

              <div className="WorkExperience-page-form-dec">
                <label htmlFor={`dec-${index}`}>Description</label>
                <textarea
                  id={`dec-${index}`}
                  name="description"
                  rows="5"
                  value={experience.description}
                  onChange={(event) => handleChange(index, event)}
                ></textarea>
              </div>
            </div>

            <div className="WorkExperience-page-form-add-remove">
              <div className="WorkExperience-page-form-add">
                <button type="button" className="added" onClick={handleAdd}>
                  <IoMdAddCircleOutline />
                </button>
              </div>
              <div className="WorkExperience-page-form-remove">
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

      
      </form>

      {/* <CVPage /> */}
    </div>
  );
};

export default WorkExperience;
