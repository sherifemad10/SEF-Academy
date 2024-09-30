
import { Circle } from 'rc-progress'
import './yourAchievementsCard.css'
import CircularProgress from './progress'



const YourAchievementsCard = ({title, hour, percentage, level}) => {
 const percent = percentage

  return (
    <div className='YourAchievementsCard'>




 <CircularProgress percent={percent}/>

       







<div className='YourAchievementsCard-text'>

  <h6>{title}</h6>

  <p>{level}</p>

  <p>{hour}</p>

</div>




      
    </div>
  )
}

export default YourAchievementsCard
