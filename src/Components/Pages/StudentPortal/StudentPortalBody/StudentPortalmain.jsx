import './StudentPortalmain.css'
import { BsClockHistory } from "react-icons/bs";


const StudentPortalMain = () => {
  return (
    <div className='StudentPortalMain'>

      <div className='registeredCourses'>
        <h5>Registered Courses</h5>


        <div className='registeredCourses-card'>
          <h6>Introduction to React js</h6>
          <p> <span>Instructor :</span> Tariq Ali</p>

          <div className='level-viewDetails'>
            <p>Lev : 1</p>
            <button className='viewDetails'>View Details</button>
          </div>


        </div>




      </div>
      {/* end registeredCourses */}

      <div className="Exam-Upcoming">
        <h5>Upcoming Exam</h5>
        <div className="Exam-Upcoming-card">

          <div className='Exam-Upcoming-card-date'>
            <p>7 TH</p>
            <p className='Month'>JUN</p>
            <p className='day'>WEB</p>
          </div>

          <div className='Exam-Upcoming-card-text'>
          <h6>Introduction to React js</h6>
          <p> <span>Instructor :</span> Tariq Ali</p>

          <div className='level-timer'>
            <p>Lev . 1 Exam</p>
            <p><span> <BsClockHistory/> </span> 10:00 pm</p>
          </div>

          </div>
          {/* Exam-Upcoming-card-text */}
        
      </div>

      </div>




      

    </div>
  )
}

export default StudentPortalMain