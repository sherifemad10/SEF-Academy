import { IoLocationOutline } from "react-icons/io5";
import "./CV.css";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { useContext } from "react";
import DataContext from "../../../Context/Context";

const CVPage = () => {
  const {
    fristName,
    lastName,
    Profession,
    loction,
    email,
    phoneNumber,
    linkedin,
    portfolio,
    github,
    summary,
    degree,
    university,
    startyear,
    graduate,
    GPA,
    workExperiences,
    project,
    skills,
    languages,
  } = useContext(DataContext);

  return (
    <div className="CV">
      <div className="cv-name-information">
        <div className="cv-name">
          {fristName && lastName ? (
            <h1>
              {fristName} {lastName}
            </h1>
          ) : (
            <h1>Sherif Emad</h1>
          )}
          {Profession ? <p>{Profession}</p> : <p>Front End Developer</p>}
        </div>

        <div className="cv-information">
          <div className="your-location">
            {loction ? (
              <p>
                {" "}
                <span>
                  {" "}
                  <IoLocationOutline />
                </span>{" "}
                {loction}
              </p>
            ) : (
              <p>
                <span>
                  {" "}
                  <IoLocationOutline />
                </span>
                Quweisna, Al Minufiyah , Egypt
              </p>
            )}
          </div>
          {/* end Loaction */}

          <div className="your-email">
            {email ? (
              <p>
                {" "}
                <span>
                  {" "}
                  <MdOutlineEmail />
                </span>{" "}
                {email}
              </p>
            ) : (
              <p>
                <span>
                  {" "}
                  <MdOutlineEmail />
                </span>
                sherifemad.web@gmail.com
              </p>
            )}
          </div>
          {/* end email */}

          <div className="your-phone-number">
            {phoneNumber ? (
              <p>
                {" "}
                <span>
                  {" "}
                  <MdOutlinePhone />
                </span>{" "}
                +{phoneNumber}
              </p>
            ) : (
              <p>
                <span>
                  {" "}
                  <MdOutlinePhone />
                </span>
                01145455951
              </p>
            )}
          </div>
          {/* end phone-number */}
        </div>

        <div className="your-links">
          <div className="your-linkedin">
            {linkedin ? (
              <p>
                <span> LinkedIn : </span>
                <a href={linkedin} target="_blank">
                  {linkedin}
                </a>
              </p>
            ) : (
              <p></p>
            )}
          </div>
          {/* end linked */}

          <div className="your-portfolio">
            {portfolio ? (
              <p>
                <span> Portfolio : </span>
                <a href={portfolio} target="_blank">
                  {portfolio}
                </a>
              </p>
            ) : (
              <p></p>
            )}
          </div>
          {/* end Portfolio */}

          <div className="your-github">
            {github ? (
              <p>
                <span> Github : </span>
                <a href={github} target="_blank">
                  {github}
                </a>
              </p>
            ) : (
              <p></p>
            )}
          </div>
          {/* end Github */}
        </div>
      </div>
      {/* end cv-name-information */}

      <div className="line"></div>

      <div className="Summary">
        <h2>Summary</h2>
        {summary ? (
          <p>{summary}</p>
        ) : (
          <p>
            As a front-end web developer specializing in React.js, I excel at
            creating dynamic, responsive web applications. Proficient in HTML,
            HTML5, CSS, CSS3, Bootstrap, and Tailwind CSS, I focus on delivering
            seamless user experiences through clean and efficient code. My
            passion for modern development practices ensures that I stay updated
            with industry trends, enabling me to build innovative and visually
            appealing solutions.
          </p>
        )}
      </div>

      {/* end Summary */}

      <div className="line"></div>

      <div className="your-education">
        <h2>Education</h2>

        <div className="your-education-warpper">
          <div className="your-education-text">
            {degree && university ? (
              <h4>
                {degree} <span>{university}</span>
              </h4>
            ) : (
              <h4>
                Bachelor of Computer Science <span>University of Menoufia</span>
              </h4>
            )}
            {/* <h4>Bachelor of Agriculture <span>Menoufia University</span></h4> */}
            {GPA ? (
              <p>
                GPA: <span>{GPA}</span>
              </p>
            ) : (
              <p>
                GPA: <span>Excellent</span>
              </p>
            )}
          </div>

          <div className="start-graduate-year">
            {startyear && graduate ? (
              <p>
                {startyear} - {graduate}
              </p>
            ) : (
              <p>2020 - 2024</p>
            )}
          </div>
        </div>
      </div>
      {/* end your-education */}
      <div className="line"></div>

      <div className="your-work-experience">
        <h2>Work Experience</h2>
        <div className="your-work-experience-warpper">
          <div className="your-work-experience-contant">
            {workExperiences &&
              workExperiences.map((experience, index) => (
                <div className="your-work-experience-text-year" key={index}>
                  <div className="your-work-experience-text" key={index}>
                    <h4>
                      {experience.position || "Frontend Developer"} -{" "}
                      <span> {experience.company || "SEF Academy"}</span>
                    </h4>
                    <p className="role">
                      Role: <span>{experience.role || "Team Leader"}</span>
                    </p>
                    <p>
                      {experience.description ||
                        "In this training, I learned many skills, such as how to manage an entire project, how to divide the project into small tasks and distribute them to team members, how to follow up with each person in the team and help solve any problem they face, and also how to receive tasks from team members and link them together so that we can get the final form of the project."}
                    </p>
                  </div>
                  <div className="your-work-experience-year">
                    <p>
                      {experience.start || "Aug 2024"} -{" "}
                      {experience.end || "Present"}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* end your-work-experience */}

      <div className="line"></div>

      <div className="your-project">
        <h2>Projects</h2>
        <div className="your-project-warpper">
          <div className="your-project-contant">
            {project &&
              project.map((project, index) => (
                <div className="your-project-text-date" key={index}>
                  <div className="your-project-text">
                    <a href={project.url} target="_blank">
                      <h4>
                        {project.name || "Swatch"}{" "}
                        <span>
                          {" "}
                          <IoIosLink />
                        </span>
                      </h4>
                    </a>
                    <p>
                      {project.description ||
                        "A dynamic movie website that fetches data from an API, allowing users to browse movies, view details, and manage a personalized watchlist."}
                    </p>
                  </div>
                  <div className="your-project-year">
                    <p>{project.date || "Sep 5"} </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* end your-project */}

      <div className="line"></div>

      <div className="your-skills">
        <h2>Skills</h2>
        <div className="your-skills-text">
          {skills &&
            skills.map((skill, index) => (
              <ul key={index}>
                <li>{skill.skill || "HTML"}</li>
              </ul>
            ))}
        </div>
      </div>
      {/* END your-skills */}

      <div className="line"></div>
      <div className="your-languages">
        <h2>Languages</h2>
        <div className="your-languages-text">
          {languages &&
            languages.map((language, index) => (
              <ul key={index}>
                <li>
                  {language.Languages || "English"} ({language.level || "Good"})
                </li>
              </ul>
            ))}
        </div>
      </div>
      {/* end your-languages */}
    </div>
  );
};

export default CVPage;
