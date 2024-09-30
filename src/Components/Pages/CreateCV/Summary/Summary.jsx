// import CVPage from '../CV/CV'
import { useContext } from "react";
import "./Summary.css";
import DataContext from "../../../Context/Context";

const Summary = () => {
  const { summary, setSummary } = useContext(DataContext);
  return (
    <div className="Summary-page">
      <form className="Summary-page-form">
        <div className="summary-page-form-input">
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            name="summary"
            rows="15"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          ></textarea>
        </div>
      </form>

      {/* <CVPage /> */}
    </div>
  );
};

export default Summary;
