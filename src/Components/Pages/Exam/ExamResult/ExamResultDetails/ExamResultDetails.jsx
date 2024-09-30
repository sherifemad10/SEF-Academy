import CircularProgress from '../../../StudentPortal/yourAchievements/yourAchievementsCard/progress'
import './ExamResultDetails.css'

const ExamResultDetails = () => {
  const mark = 19
  const calcPercent = mark/20
  const percent = calcPercent * 100
  return (
    <div className='ExamResultDetails'>

      <div className='ExamResultDetails-btn-progressbar'>

        <CircularProgress percent={percent}/>

        <button>VIEW ASNWERS</button>

      </div>
      {/* end ExamResultDetails-btn-progressbar */}

      <div className='ExamResultDetails-text'>

        <div className='Number-of-questions-answered'>
          <h5>Number of questions answered :</h5>
          <p>20 Questions</p>
        </div>

        <div className='Number-of-questions-answered'>
          <h5>Number of questions not answered :</h5>
          <p>0 Questions</p>
        </div>

        <div className='Number-of-questions-answered'>
          <h5>Number of questions answered correctly :</h5>
          <p>19 Questions</p>
        </div>

        <div className='Number-of-questions-answered'>
          <h5>Number of wrong answers :</h5>
          <p>1 Answer</p>
        </div>
        
        <div className='Number-of-questions-answered'>
          <h5>Time Taken:</h5>
          <p>60:00 Minutes</p>
        </div>

      </div>

    </div>
  )
}

export default ExamResultDetails