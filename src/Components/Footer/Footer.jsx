import "./Footer.css";
import Logo from "../../../public/assets/logo.png";
import { NavLink } from "react-router-dom";
import { MdOutlineMarkEmailRead, MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <div className="Footer container">
      {/* logo */}
      <div className="Footer-logo">
        <img src={Logo} alt="logo" />
      </div>

      {/* footer Link */}
      <div className="Footer-Link">
        <div className="Footer-Link-Left">
          <h4>SOFTWARE ENGINEERING FOR FUTURE</h4>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/tech">Tech</NavLink>
            </li>
            <li>
              <NavLink to="/business">Business</NavLink>
            </li>
            <li>
              <NavLink to="/security">Security</NavLink>
            </li>
          </ul>

          <ul>
            <li>
              <NavLink to="/medical">Medical</NavLink>
            </li>
            <li>
              <NavLink to="/startups">Startups</NavLink>
            </li>

            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>

            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>

            <li>
              <NavLink to="/jobs">Jobs</NavLink>
            </li>

            <li>
              <NavLink to="/sports">Sports</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Footer-Link-Right */}
        <div className="Footer-Link-Right">
          <div className="Email">
            <p>sefffuture@gmail.com</p>
            <MdOutlineMarkEmailRead className="Email-icon" />
          </div>

          <div className="Phone">
            <div className="tel">
              <p>+20 109 8481 288</p>
              <p>+20 155 5177 645</p>
            </div>

            <MdOutlinePhoneInTalk className="phone-icon" />
          </div>
        </div>
      </div>

      {/* footer-end */}
      <div className="line"></div>

      <div className="footer-end">
        <div className="copyright">
          <p>
            {" "}
            © 2024 EGYPT, ALL RIGHTS RESERVED TO{" "}
            <a href="https://www.linkedin.com/in/sherifemad/" target="_blank">
              SHERIF EMAD
            </a>{" "}
          </p>
        </div>

        {/* social */}
        <div className="social">
          <>
            <div className="card">
              <a className="socialContainer containerOne" href="#">
                <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a className="socialContainer containerTwo" href="#">
                <svg viewBox="0 0 16 16" className="socialSvg twitterSvg">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a className="socialContainer containerThree" href="#">
                <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>

              <a className="socialContainer containerFour" href="#">
                <svg
                  viewBox="0 0 320 512"
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="socialSvg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Footer;
