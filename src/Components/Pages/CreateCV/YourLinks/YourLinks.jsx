// import CVPage from '../CV/CV'
import { useContext } from "react";
import "./YourLinks.css";
import DataContext from "../../../Context/Context";

const YourLinks = () => {
  const { linkedin, setLinkedin, portfolio, setPortfolio, github, setGitHub } =
    useContext(DataContext);
  return (
    <div className="YourLinks-page">
      <form className="YourLinks-page-form">
        <div className="YourLinks-page-form-linkedin">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>

        <div className="YourLinks-page-form-portfolio">
          <label htmlFor="portfolio">Portfolio</label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
          />
        </div>
        <div className="YourLinks-page-form-github">
          <label htmlFor="github">GitHub</label>
          <input
            type="url"
            id="github"
            name="github"
            value={github}
            onChange={(e) => setGitHub(e.target.value)}
          />
        </div>
    
      </form>

      {/* <CVPage /> */}
    </div>
  );
};

export default YourLinks;
