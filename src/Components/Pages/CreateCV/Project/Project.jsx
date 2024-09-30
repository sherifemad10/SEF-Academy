import { RiDeleteBin6Line } from "react-icons/ri";
import "./Project.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import DataContext from "../../../Context/Context";

const Project = () => {
  const { project, setProject } = useContext(DataContext);

  // Handle input change
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProjects = [...project];
    updatedProjects[index][name] = value;
    setProject(updatedProjects);
  };

  // Add new Project field
  const handleAdd = () => {
    setProject([...project, { name: "", url: "", date: "", description: "" }]);
  };

  // Remove Project field
  const handleRemove = (index) => {
    const updatedProjects = project.filter((_, i) => i !== index);
    setProject(updatedProjects);
  };

  return (
    <div className="Project-page">
      <form className="Project-page-from">
        {project.map((project, index) => (
          <div key={index} className="Project-from-wrapper">
            <div className="Project-from-contant">
              <div className="Project-from-contant-name">
                <label htmlFor={`name-${index}`}>Project Name</label>
                <input
                  type="text"
                  id={`name-${index}`}
                  name="name"
                  value={project.name}
                  onChange={(event) => handleChange(index, event)}
                  required
                />
              </div>

              <div className="Project-from-contant-url">
                <label htmlFor={`url-${index}`}>Project URL</label>
                <input
                  type="url"
                  id={`url-${index}`}
                  name="url"
                  value={project.url}
                  onChange={(event) => handleChange(index, event)}
                  required
                />
              </div>

              <div className="Project-from-contant-data">
                <label htmlFor={`data-${index}`}>Project Data</label>
                <input
                  type="text"
                  id={`data-${index}`}
                  name="date"
                  value={project.date}
                  onChange={(event) => handleChange(index, event)}
                  required
                />
              </div>

              <div className="Project-from-contant-dec">
                <label htmlFor={`description-${index}`}>
                  Project Description
                </label>
                <textarea
                  id={`description-${index}`}
                  rows="4"
                  name="description"
                  value={project.description}
                  onChange={(event) => handleChange(index, event)}
                  required
                />
              </div>
            </div>

            <div className="Project-page-form-add-remove">
              <div className="Project-page-form-add">
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

        {/* <div className='YourLinks-continue-back'>
        <button className='Back' type='button'>BACK</button>
        <button type='submit'>CONTINUE</button>
      </div> */}
      </form>

      {/* <CVPage /> */}
    </div>
  );
};

export default Project;
