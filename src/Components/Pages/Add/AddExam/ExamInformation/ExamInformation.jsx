import { BsClockHistory } from 'react-icons/bs'
import './ExamInformation.css'

const ExamInformation = ({coursesName, setCoursesName, level, setLevel, fullMark, setfullMark, examDate, setexamDate, Time, setTime, duration, setDuration}) => {
  return (
    <div className='ExamInformation'>

      <div className='ExamInformation-name-level-mark'>

        <div className='ExamInformation-name'>
          <label htmlFor="name">Exam Name</label>
          <input type="text" id='name' value={coursesName} onChange={(eo)=> setCoursesName(eo.target.value)} />
        </div>

        <div className='ExamInformation-level'>
          <label htmlFor="level">Level</label>
          <input type="text" id='level' value={level} onChange={(eo)=> setLevel(eo.target.value)}/>
        </div>

        <div className='ExamInformation-Mark'>
          <label htmlFor="Mark">Full Mark</label>
          <input type="text" id='Mark' value={fullMark} onChange={(eo)=> setfullMark(eo.target.value)}/>
        </div>


      </div>
      {/* end ExamInformation-name-level-mark */}
      
      <div className='ExamInformation-date-time-duration'>
        <div className='ExamInformation-date'>
          <label htmlFor="date">Date</label>
          <input type="date" id='date' value={examDate} onChange={(eo)=> setexamDate(eo.target.value)}/>
          </div>

        <div className='ExamInformation-time'>
          <label htmlFor="time">Time</label>
          <input type="time" id='time' value={Time} onChange={(eo)=> setTime(eo.target.value)}/>
          </div>

          <div className='ExamInformation-duration'>
            <label htmlFor="duration">Duration</label>
            <div className='duration-clock'>
            <BsClockHistory className='duration-icons' />
            <input type="text" id='duration' value={duration} onChange={(eo)=> setDuration(eo.target.value)}/>
            </div>
            </div>


      </div>

    </div>
  )
}

export default ExamInformation