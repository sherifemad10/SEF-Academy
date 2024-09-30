import { useRef, useState } from "react";
import "./Slideshow.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlinePlayLesson } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../../services/Firebase/Config";
import Loading from "../../../Loading/Loading";
import { useNavigate } from "react-router-dom";

const Slideshow = () => {
  const navigate = useNavigate();

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const corsesQuery = query(collection(db, "Courses"), orderBy("id", "desc"));

  const [value, loading, error] = useCollection(corsesQuery);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  // Mock data for cards

  const cardWidth = 200; // Adjust this based on your card size

  // Move slider left
  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      sliderRef.current.scrollLeft -= cardWidth;
    }
  };
  // Move slider right
  const handleRightClick = () => {
    if (currentIndex < value.docs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      sliderRef.current.scrollLeft += cardWidth;
    }
  };

  return (
    <div className="slideshow">
      <div className="slider-container">
        <div className="slider-header">
          <h6>Courses New</h6>
          <div className="buttons">
            <button onClick={handleLeftClick}>
              <IoIosArrowDropleft />
            </button>
            <button onClick={handleRightClick}>
              <IoIosArrowDropright />
            </button>
          </div>
        </div>

        <div className="slider" ref={sliderRef}>
          {value.docs.map((card) => (
            <div
              onClick={() => navigate(`/coursesDetails/${card.data().id}`)}
              key={card.id}
              className="courses-card"
            >
              <div className="img-card">
                <img src={card.data().img} alt="img" />
              </div>

              <div className="name-instructor">
                <h6>{card.data().name}</h6>
                <p>
                  <span>Instructor:</span> Sherif Emad
                </p>
              </div>

              <div className="data-lessoncount">
                <p>
                  <span>
                    <BsCalendar2Date />
                  </span>
                  {card.data().startData}
                </p>
                <p>
                  <span>
                    <MdOutlinePlayLesson />
                  </span>
                  {card.data().lesson}
                </p>
              </div>

              <div className="enroll-btn">
                <button>Enroll</button>
              </div>

              <div className="details-card">
                <p
                  onClick={() => navigate(`/coursesDetails/${card.data().id}`)}
                >
                  View Details{" "}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
