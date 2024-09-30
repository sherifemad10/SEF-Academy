import { MdOutlineDateRange } from "react-icons/md";
import "./UpcomingExams.css";
import { BsClockHistory } from "react-icons/bs";
import Loading from "../../../Loading/Loading";
import { useContext } from "react";
import DataContext from "../../../Context/Context";
import { useNavigate } from "react-router-dom";

const UpcomingExams = () => {
  const navigate = useNavigate();
  const { value, loading, error } = useContext(DataContext);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div className="UpcomingExams">
      <h6>Upcoming Exams</h6>

      {value.docs.map((exam) => (
        <div className="UpcomingExams-card" key={exam.id}>
          <div className="UpcomingExams-card-date-time">
            <p>
              <span>
                {" "}
                <MdOutlineDateRange />
              </span>
              {exam.data().date}
            </p>
            <p>
              <span>
                {" "}
                <BsClockHistory />
              </span>
              {exam.data().time}
            </p>
          </div>
          {/* end UpcomingExams-card-date-time */}

          <div className="UpcomingExams-card-title-instructor">
            <h6>{exam.data().name}</h6>
            <p>
              <span>Instructor:</span> John Doe
            </p>
          </div>
          {/* end UpcomingExams-card-title-instructo */}

          <div className="UpcomingExams-card-level">
            <p>LEV.{exam.data().level}</p>
          </div>
          {/* end UpcomingExams-card-level */}

          <div className="UpcomingExams-card-NA">
            <p>NA</p>
          </div>
          {/* end UpcomingExams-card-NA */}

          <div className="UpcomingExams-card-btn">
            <button
              onClick={() => {
                navigate(`/onlineexam/${exam.data().id}`);
              }}
            >
              {" "}
              JOIN EXAM{" "}
            </button>
          </div>
          {/* end UpcomingExams-card-btn */}
        </div>
      ))}
    </div>
  );
};

export default UpcomingExams;
