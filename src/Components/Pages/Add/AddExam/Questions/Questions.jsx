import { IoCheckmarkDoneCircle, IoCloseSharp } from 'react-icons/io5'
import UploadimgExam from '../UploadimgExam/UploadimgExam'
import './Questions.css'
import { IoIosAddCircleOutline } from 'react-icons/io'

const Questions = ({ questions = [], setQuestions, addQuestion, handleInputChange }) => {

  if (!Array.isArray(questions)) {
    return <div>No questions available.</div>;
  }

  
const handleDelete = (index) => {
  const updatedLessons = [...questions];
  updatedLessons.splice(index, 1);
  setQuestions(updatedLessons);
};

  return (
    <div className='Questions'>
      {
        questions.map((question, index) => (
          <div className='question-wrapper' key={index}>
            <div className='Questions-contant'>

              <div className='question-mark'>
                <div className='question'>
                  <label htmlFor={`question-${index}`}>Question {index + 1}</label>
                  <input
                    type="text"
                    id={`question-${index}`}
                    value={question.questionText}
                    onChange={(e) => handleInputChange(index, "questionText", e.target.value)}
                  />
                </div>

                <div className='mark'>
                  <label htmlFor={`mark-${index}`}>Mark</label>
                  <input
                    type="text"
                    id={`mark-${index}`}
                    value={question.mark}
                    onChange={(e) => handleInputChange(index, "mark", e.target.value)}
                  />
                </div>
              </div>

              <div className='typeQuestion-img'>
                <div className='typeQuestion'>
                  <label htmlFor={`typeQuestion-${index}`}>Question Type</label>
                  <select
                    id={`typeQuestion-${index}`}
                    value={question.type}
                    onChange={(e) => handleInputChange(index, "type", e.target.value)}
                  >
                    <option value="" hidden></option>
                    <option value="trueandfalse">True and False</option>
                    <option value="multipleChoose">Multiple Choice</option>
                    <option value="shortAnswer">Short Answer</option>
                  </select>
                </div>

                <div className='Question-img'>
                  <label htmlFor={`Question-img-${index}`}>Question Image</label>
                  <UploadimgExam setQuestions={setQuestions} index={index} handleInputChange={handleInputChange}/>
                </div>
              </div>

              <div className='Answer'>
              {
  question.type === "multipleChoose" && (
    <div className='multipleChoose'>
      
      {/* Option 1 (Correct Answer) */}
      <div className='option-true'>
        <label htmlFor={`option-true-${index}`}>Option 1</label>
        <div className='true-input'>
          <input
            type="text"
            id={`option-true-${index}`}
            value={question.options[0]} // First option (correct answer)
            onChange={(e) => handleInputChange(index, 'options[0]', e.target.value)}
          />
          <div className='true-icon'>
            <span><IoCheckmarkDoneCircle /></span>
            <p>Correct Answer</p>
          </div>
        </div>
      </div>
      {/* end option-true */}

      {/* Option 2 (Wrong Answer) */}
      <div className='option-false'>
        <label htmlFor={`option-false-${index}`}>Option 2</label>
        <div className='false-input'>
          <input
            type="text"
            id={`option-false-${index}`}
            value={question.options[1]} // Second option (wrong answer)
            onChange={(e) => handleInputChange(index, 'options[1]', e.target.value)}
          />
          <div className='false-icon'>
            <span><IoCloseSharp /></span>
            <p>Wrong Answer</p>
          </div>
        </div>
      </div>
      {/* end option-false */}

      {/* Option 3 (Wrong Answer) */}
      <div className='option-false'>
        <label htmlFor={`option-false-2-${index}`}>Option 3</label>
        <div className='false-input'>
          <input
            type="text"
            id={`option-false-2-${index}`}
            value={question.options[2]} // Third option (wrong answer)
            onChange={(e) => handleInputChange(index, 'options[2]', e.target.value)}
          />
          <div className='false-icon'>
            <span><IoCloseSharp /></span>
            <p>Wrong Answer</p>
          </div>
        </div>
      </div>
      {/* end option-false */}
    </div>
  )
}

                {question.type === "trueandfalse" && (
                  <div className='tureFlase'>
                    <div className='option-true'>
                      <label htmlFor={`option-true-${index}`}>Option</label>
                       
                      <div className='true-input'>
                      <input
                        type="text"
                        id={`option-true-${index}`}
                        value={question.options[0]}
                        onChange={(e) => handleInputChange(index, "options[0]", e.target.value)}
                      />
                      <div className='true-icon'>
                        <span><IoCheckmarkDoneCircle />
                        </span>
                        <p>Correct Answer</p>
                      </div>

                      </div>
                      
                    </div>

                    <div className='option-false'>
                      <label htmlFor={`option-false-${index}`}>Option</label>
                      <div className='false-input'>
                      <input
                        type="text"
                        id={`option-false-${index}`}
                        value={question.options[1]}
                        onChange={(e) => handleInputChange(index, "options[1]", e.target.value)}
                      />
                      <div className='false-icon'>
                        <span><IoCloseSharp />
                        </span>
                        <p>Wrong Answer</p>
                      </div>

                      </div>
                      {/* end true-input */}

                      </div>
                  </div>
                )}

                {question.type === "shortAnswer" && (
                  <div className='shortAnswer'>
                  <label htmlFor={`option-true-${index}`}>Answer</label>
                  
                  <div className='true-Answer'>
                  <textarea
                      id={`answer-${index}`}
                      rows="4"
                      cols="100"
                      value={question.options[0]}
                      onChange={(e) => handleInputChange(index, "options[0]", e.target.value)}
                    ></textarea>
                  <div className='true-icon'>
                    <span><IoCheckmarkDoneCircle /> </span>
                    <p>Correct Answer</p>
                  </div>
                  </div>
                  
                  
                  </div>
                )}
              </div>
            </div>



            <div className='add-remove'>
            <div className='add-other-questions'>
              <p>Add Question <span onClick={addQuestion}><IoIosAddCircleOutline className='addQuestion' /></span></p>
            </div>
            <div className='remove-question'>

            <button onClick={handleDelete} className="button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 69 14"
                              className="svgIcon bin-top"
                            >
                              <g clipPath="url(#clip0_35_24)">
                                <path
                                  fill="black"
                                  d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_35_24">
                                  <rect fill="white" height={14} width={69} />
                                </clipPath>
                              </defs>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 69 57"
                              className="svgIcon bin-bottom"
                            >
                              <g clipPath="url(#clip0_35_22)">
                                <path
                                  fill="black"
                                  d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_35_22">
                                  <rect fill="white" height={57} width={69} />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>

            </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Questions
