import { IoMdAddCircleOutline } from "react-icons/io";
import "./Languages.css";
import { RiDeleteBin6Line } from "react-icons/ri";
// import CVPage from '../CV/CV'
import { useContext } from "react";
import DataContext from "../../../Context/Context";

const Languages = () => {
  const { setLanguages, languages } = useContext(DataContext);
  // Handle input change
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedlanguages = [...languages];
    updatedlanguages[index][name] = value;
    setLanguages(updatedlanguages);
  };

  // Add new skill field
  const handleAdd = () => {
    setLanguages([...languages, { Languages: "", level: "" }]);
  };

  // Remove skill field
  const handleRemove = (index) => {
    const updatedlanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedlanguages);
  };
  return (
    <div className="Languages-page">
      <form className="Languages-page-form">
        {languages.map((language, index) => (
          <div className="Languages-page-form-wrapper" key={index}>
            <div className="Languages-page-form-contant">
              <div className="Languages-page-form-contant-languages">
                <label htmlFor={`languages-${index}`}>
                  Languages{index + 1}
                </label>
                <input
                  type="text"
                  id={`languages-${index}`}
                  name="Languages"
                  value={language.Languages}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div className="Languages-page-form-contant-level">
                <label htmlFor={`level-${index}`}>Level</label>
                <select
                  id={`level-${index}`}
                  name="level"
                  value={language.level}
                  onChange={(event) => handleChange(index, event)}
                >
                  <option value="" hidden></option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Advanced">Native</option>
                </select>
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

export default Languages;
