import { useContext } from "react";
import DataContext from "../../Context/Context";
import "./Coursess.css";
import Othercourses from "./Othercourses/Othercourses";
import Slideshow from "./Slideshow/Slideshow";
import PleaseLogin from "../PleaseLogin/PleaseLogin";

const Coursess = () => {
  const { user } = useContext(DataContext);

  return (
    <>
      {user ? (
        <div className="Coursess">
          <div className="Coursess-wrapper">
            <div className="coursess-contant container">
              <div className="article-header">
                <div className="admin-panel">
                  <p className="AdminPanel">Courses</p>
                  <p>6th June 2023</p>
                </div>
              </div>{" "}
              {/* article-header */}
              <Slideshow />
              <Othercourses />
            </div>{" "}
            {/* coursess-contant */}
          </div>
          {/* Coursess-wrapper */}
        </div>
      ) : (
        <PleaseLogin />
      )}
    </>
  );
};

export default Coursess;
