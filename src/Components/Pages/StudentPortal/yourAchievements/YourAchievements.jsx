import EarnedCertificates from '../StudentPortalBody/EarnedCertificates/EarnedCertificates'
import './yourAchievements.css'
import YourAchievementsCard from './yourAchievementsCard/YourAchievementsCard'

const YourAchievements = ({firstName, secondName}) => {
  const titleCard1 = "Introduction to React js"
  const hourCard1 = "27 / 30 Hours"
  const percentageCard1 = "91"
  const levelCard1 = "LEV. 1"

  const titleCard2 = "Introduction to Data Analysis"
  const hourCard2 = "13 / 17 Hours"
  const percentageCard2 = "75"
  const levelCard2 = "LEV. 1"

  const titleCard3 = "System analysis and design"
  const hourCard3 = "24 / 24 Hours"
  const percentageCard3 = "100"
  const levelCard3 = "LEV. 1"

  const titleCard4 = "Introduction to JavaScript"
  const hourCard4 = "24 / 30 Hours"
  const percentageCard4 = "80"
  const levelCard4 = "LEV. 1"


  return (
    <div className='YourAchievements'>
      <h6>Here's how you've been doing for
      the <span>last month</span></h6>

      <div className="YourAchievements-card">

      <YourAchievementsCard title={titleCard1} hour={hourCard1} percentage={percentageCard1} level={levelCard1}/>

      <YourAchievementsCard title={titleCard2} hour={hourCard2} percentage={percentageCard2} level={levelCard2}/>

      <YourAchievementsCard title={titleCard3} hour={hourCard3} percentage={percentageCard3} level={levelCard3}/>

      <YourAchievementsCard title={titleCard4} hour={hourCard4} percentage={percentageCard4} level={levelCard4}/>

      </div>

      <EarnedCertificates firstName={firstName} secondName={secondName}/>

  



    </div>
  )
}

export default YourAchievements