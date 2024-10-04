import "./Navbar.css";
import Logo from "../../../../public/assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../Context/Context";

const Navbar = () => {
  const { user, userdata } = useContext(DataContext);

  const [dropdownTech, setDropdownTech] = useState(false);
  const [dropdownCourse, setDropdownCourse] = useState(false);
  const [navScroll, setnavScroll] = useState("");
  const [navToggle, setnavToggle] = useState("none");
  const navigate = useNavigate();

  const handelnavToggle = () => {
    setnavToggle(navToggle === "none" ? "flex" : "none");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setnavScroll("scroll");
      } else {
        setnavScroll("");
      }
    });
  }, []);

  return (
    <div className="Navbar">
      {/* Header */}
      <header className="header">
        {user && userdata.role === "Student" ? (
          <>
            <NavLink onClick={handleLogout}>Login Out</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/exam">Exam</NavLink>
          </>
        ) : user && userdata.role === "Admin" ? (
          <>
            <NavLink onClick={handleLogout}>Login Out</NavLink>
            <NavLink to="/exam">Exam</NavLink>
            <NavLink to="/admin">Admin panal</NavLink>
          </>
        ) : user && userdata.role === "Instructors" ? (
          <>
            <NavLink onClick={handleLogout}>Login Out</NavLink>
            <NavLink to="/profilee">Profile</NavLink>
            <NavLink to="/createexam">Exam</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </header>

      {/* Navigation */}
      <div className={`navbar ${navScroll}`}>
        <div className="Logo">
          <img src={Logo} alt="SEF Academy" />
        </div>

        <nav className="Links">
          {/* mobile */}
          <label className="hamburger">
            <input type="checkbox" onChange={handelnavToggle} />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>

          <ul className={`${navToggle}`}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="dropdown-group">
              <NavLink
                to="/tech"
                onClick={() => {
                  setDropdownTech(!dropdownTech);
                  setDropdownCourse(false);
                }}
              >
                Tech
                {dropdownTech ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </NavLink>

              {/* Dropdown */}
              {dropdownTech && (
                <ul className="dropdown-list">
                  <li>
                    <NavLink to="/business">Front-End</NavLink>
                  </li>
                  <li>
                    <NavLink to="/business">Back-end</NavLink>
                  </li>
                  <li>
                    <NavLink to="/business">Full-Stake</NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/business">Business</NavLink>
            </li>
            <li>
              <NavLink to="/security">Security</NavLink>
            </li>
            <li>
              <NavLink to="/sports">Sports</NavLink>
            </li>
            <li>
              <NavLink to="/medical">Medical</NavLink>
            </li>
            <li>
              <NavLink to="/startups">Startups</NavLink>
            </li>

            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>

            {/* dropdown */}

            <li className="dropdown-group-courses">
              <NavLink
                to="/courses"
                onClick={() => {
                  setDropdownCourse(!dropdownCourse);
                  setDropdownTech(false);
                }}
              >
                Courses
                {dropdownCourse ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </NavLink>

              {/* Dropdown */}
              {dropdownCourse && (
                <ul className="dropdown-list-courses">
                  <li>
                    <NavLink to="/business">React</NavLink>
                  </li>
                  <li>
                    <NavLink to="/business">JavaScript</NavLink>
                  </li>
                  <li>
                    <NavLink to="/business">Java</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/allJobs">Jobs</NavLink>
            </li>

            <li>
              <NavLink to="/contact">
                <button>Contact Us</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
