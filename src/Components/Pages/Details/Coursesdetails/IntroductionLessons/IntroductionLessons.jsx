import { useState } from "react";
import "./IntroductionLessons.css";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const IntroductionLessons = ({ courses }) => {
  const [accordion, setAccordion] = useState(false);

  const toggleAccordion = () => setAccordion(!accordion);

  // Safely check if lessons content is available
  const hasLessons =
    courses?.lessonscontant && courses.lessonscontant.length > 0;
  const firstLesson = hasLessons ? courses.lessonscontant[0] : null;

  return (
    <div className="IntroductionLessons">
      <div className="Introduction-courses">
        <h6>Introduction</h6>
        <p>{courses.materials}</p>
      </div>

      {firstLesson && (
        <div className="Lessons-courses">
          <h6>Lessons</h6>
          <div className="Accordion">
            <div className="Accordion-header">
              <div className="Accordion-title">
                <h6>{firstLesson.title}</h6>
              </div>

              <div className="Accordion-icon">
                <button
                  onClick={toggleAccordion}
                  className={accordion ? "dec" : "inc"}
                >
                  {accordion ? <IoMdClose /> : <FaPlus />}
                </button>
              </div>
            </div>

            {accordion && (
              <div className="Accordion-text">
                <p>{firstLesson.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroductionLessons;
