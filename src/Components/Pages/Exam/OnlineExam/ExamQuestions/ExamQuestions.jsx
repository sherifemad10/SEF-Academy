import { useState } from "react";
import "./ExamQuestions.css";
import { useNavigate, useParams } from "react-router-dom";

const ExamQuestions = ({ questions }) => {
  console.log(questions);
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate(); // Fix the typo here

  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
  const [mark, setMark] = useState(0); // Track the mark
  const [wasCorrect, setWasCorrect] = useState(false); // Track if the previous answer was correct

  const options = questions.options;

  // Check correct answer
  const handleOptionClick = (id) => {
    const selectedOption = options.find((option) => option.id === id);

    if (selectedAnswer !== null) {
      // If previously selected answer was correct and now the user selects an incorrect one
      if (wasCorrect && !selectedOption.isCorrect) {
        setMark((prevMark) => prevMark - 1);
      }
      // If previously selected answer was incorrect and now the user selects a correct one
      else if (!wasCorrect && selectedOption.isCorrect) {
        setMark((prevMark) => prevMark + 1);
      }
    } else {
      // If this is the first selection, simply adjust the mark if correct
      if (selectedOption.isCorrect) {
        setMark((prevMark) => prevMark + 1);
      }
    }

    setWasCorrect(selectedOption.isCorrect); // Update whether the selected option is correct
    setSelectedAnswer(id); // Set the selected answer
  };

  return (
    <div className="ExamQuestions">
      {questions.map((questions) => (
        <div className="ExamQuestions-wrapper" key={questions.id}>
          <div className="question-number">
            <p>Question 1</p>
          </div>

          <div className="question-title">
            <h5>{questions.questionText}</h5> {/* Use dynamic title */}
          </div>

          <div className="question-answar">
            {questions.options.map((option, index) => (
              <div
                key={option.id}
                className={`question-answar-option ${
                  selectedAnswer === option.id
                    ? option.isCorrect
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                onClick={() => handleOptionClick(option.id)}
              >
                <p>
                  {index + 1}
                  {" -  "}
                  {option}
                </p>
              </div>
            ))}
          </div>

          <div className="ExamQuestions-mark">
            <p>{questions.mark} Marks</p>
          </div>
        </div>
      ))}

      <div className="finsh-exam">
        <button onClick={() => navigate(`/examresult/${id}`)}>Submit</button>
      </div>
    </div>
  );
};

export default ExamQuestions;
