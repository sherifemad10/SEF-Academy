import { useState } from 'react';
import OnlineExamHeader from '../OnlineExam/OnlineExamHeader/OnlineExamHeader'
import ExamResultDetails from './ExamResultDetails/ExamResultDetails';
import { useParams } from 'react-router-dom';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../../../services/Firebase/Config';
import Loading from '../../../Loading/Loading';

const ExamResult = () => {
  const {id} = useParams()
  const [value, loading, error] = useDocument(doc(db, 'Exams', id));

  const timer = 60 * 60

  const [time] = useState(timer * 0.5);


  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }
  var duration = value.data().duration;


  

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };


  return (
    <div className='ExamResult'>

<div className='Exam-wrapper'>

<div className='StudentPortal-contant container'>

  <div className='studentPortal-top-header'>

    <p className='student-portal'>Online Exams Result</p>
    <p>6th June 2024</p>
  </div>
  {/* studentPortal-top-header */}

  <div className='hearder-online-exam'>
  <OnlineExamHeader timer={duration}/>

  <div className='ExamResult-timer'>

  <div className="ExamTimer">
      <p>{formatTime(time)}</p>

      <div className="User-levels-bar">
        <div className="User-levels-bar-fill">
          <div className="User-levels-bar-fill-inner" style={{ width: `${(time / 3600) * 100}%` }}></div>
        </div>
      </div>
    </div>

  </div>

  <ExamResultDetails/>




  </div>





  </div>
  </div>


      
    </div>
  )
}

export default ExamResult
