import { useNavigate } from 'react-router-dom';
import './StudentPortalHeader.css'
import { IoCheckmarkDoneCircle } from "react-icons/io5";



const StudentPortalHeader = ({firstName, secondName}) => {
  const navgate = useNavigate()
  

  return (
    <div className='StudentPortalHeader'>

      <div className="Name-viewProfile">

        <h6>Welcome Back <span>{firstName} {secondName}</span></h6>

        <button onClick={()=>{
          navgate('/viewprofile')
        }} className="viewProfile">View Profile</button>

      </div>

      <div className='Exam-courses-user'>

        <div className='upcoming-exam-courses'>

          <div className='Exam-courses-user-number'>
            <p>1</p>
          </div>

          <div className='exam-courses-user-upcoming'>
            <p>Upcoming <span>Exam</span></p>
          </div>

        </div>


      {/* end Exam-courses-user */}


        <div className='upcoming-exam-courses'>

          <div className='Exam-courses-user-number'>
            <p>4</p>
          </div>

          <div className='exam-courses-user-upcoming'>
            <p>REGISTERED <span>COURSES</span></p>
          </div>

        </div>


      {/* end Exam-courses-user */}


        <div className='upcoming-exam-courses'>

          <div className='Exam-courses-user-number'>
            <p>2</p>
          </div>

          <div className='exam-courses-user-upcoming'>
            <p>COMPLETED <span>COURSES</span></p>
          </div>

        </div>


      {/* end Exam-courses-user */}
      </div>

      {/* level */}
      <div className="User-levels">

        <div className="User-levels-number">
          <p>Level : 1</p>
          <p>97%</p>
        </div>

        <div className="User-levels-bar">
          <div className="User-levels-bar-fill">
            <div className="User-levels-bar-fill-inner" style={{width: '97%'}}></div>
          </div>
        </div>

      </div>
      {/* User-levels */}

      <div className='AllClear'>
        <p><span><IoCheckmarkDoneCircle/></span> ALL CLEAR, YOU DON'T HAVE ANY EXAMS TODAY. </p>
      </div>



      
    </div>
  )
}

export default StudentPortalHeader
