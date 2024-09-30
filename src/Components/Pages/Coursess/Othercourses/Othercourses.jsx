import "./Othercourses.css";
import Pagination from "../../AdminPanal/Articles/Pagination/Pagination";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../../services/Firebase/Config";
import Loading from "../../../Loading/Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtherCoursesCardMobile from "./Mobile/OtherCoursesCardMobile";

const Othercourses = () => {
  const corsesQuery = query(collection(db, "Courses"), orderBy("id", "desc"));

  const [value, loading, error] = useCollection(corsesQuery);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  const filteredArticles = value.docs.filter((item) => {
    const data = item.data();
    const title = data?.name ? data.name.toLowerCase() : "";
    return title.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="Othercourses">
      <div className="title-search">
        <h6>Other Courses</h6>

        <div className="search-courese">
          <div className="input-wrapper">
            <button className="icon">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              type="text"
              name="text"
              className="input"
              placeholder="search.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>{" "}
      {/* title-search */}
      <div className="course-list">
        {filteredArticles?.slice(0, 4).map((course) => (
          <OtherCoursesCardMobile
            key={course.id}
            id={course.id}
            img={course.data()?.img}
            name={course.data()?.name}
            lesson={course.data()?.lesson}
            introduction={course.data()?.introduction}
            startData={course.data()?.startData}
            level={course.data()?.level}
          />
        ))}

        <table className="othercourses-table">
          <thead>
            <tr>
              <th></th>
              <th>Start Date</th>
              <th>Level</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filteredArticles.slice(0, 6).map((courses) => (
              <tr key={courses.id}>
                <td>
                  <div className="table-img-lesson">
                    <div className="table-body-img-lesson">
                      <img src={courses.data().img} alt="" />
                      <div className="table-body-title-lesson-text">
                        <h6>{courses.data().name}</h6>
                        <p>{courses.data().lesson + " " + "Lessons"}</p>
                        <p>
                          <span>Instructor :</span>{" "}
                          {courses.data().introduction}
                        </p>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="table-startdate">{courses.data().startData}</td>
                <td className="table-level">{courses.data().level}</td>
                <td className="table-action">
                  <button>Enroll</button>
                  <p
                    onClick={() =>
                      navigate(`/coursesDetails/${courses.data().id}`)
                    }
                  >
                    View Details
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default Othercourses;
