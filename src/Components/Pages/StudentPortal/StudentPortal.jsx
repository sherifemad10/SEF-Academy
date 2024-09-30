import { useContext } from 'react'
import './StudentPortal.css'
import StudentPortalMain from './StudentPortalBody/StudentPortalmain'
import StudentPortalHeader from './StudentPortalHeader/StudentPortalHeader'
import YourAchievements from './yourAchievements/YourAchievements'
import DataContext from '../../Context/Context'

const StudentPortal = () => {
  const {userdata} = useContext(DataContext)
  // console.log(userdata.fristName)

  const firstName = userdata?.fristName || 'User'; 
  console.log(firstName)
  const secondName = userdata?.SecondName || ''; 
  return (
    <div className='StudentPortal'>
      <div className='StudentPortal-wrapper'>

        <div className='StudentPortal-contant container'>

          <div className='studentPortal-top-header'>

            <p className='student-portal'>Student Portal</p>
            <p>6th June 2024</p>
          </div>

          <StudentPortalHeader firstName={firstName} secondName={secondName}/>

          <StudentPortalMain/>

          <YourAchievements firstName={firstName} secondName={secondName}/>




        </div>

      </div>
      
    </div>
  )
}

export default StudentPortal
