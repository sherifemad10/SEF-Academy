import { useNavigate } from 'react-router-dom'
import './MobilSidebar.css'

const MobilSidebar = () => {
  const navigate = useNavigate()
  return (
    <div className='MobilSidebar'>
        <button onClick={()=>navigate('/students')}>Users</button>
        <button onClick={()=>navigate('/admin')}>Articles</button>
        <button onClick={()=>navigate('/jobs')}>Jobs</button>
        <button onClick={()=>navigate('/coursesAdded')}>Courses</button>
      
    </div>
  )
}

export default MobilSidebar