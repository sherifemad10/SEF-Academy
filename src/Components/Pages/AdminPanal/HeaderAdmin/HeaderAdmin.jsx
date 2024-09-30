import './HeaderAdamin.css'
import { useNavigate } from 'react-router-dom'

const HeaderAdmin = ({linkto, Title}) => {
  const navigate = useNavigate();

  return (
    <div>

          <div className="article-header">

            <div className="admin-panel">
              <p className="AdminPanel">Admin Panel</p>
              <p>6th June 2023</p>
            </div>

            <div className="createArticle">
                <button onClick={()=>{
                  navigate(linkto)
                }}>{Title}</button>
            </div>

          </div>
      
    </div>
  )
}

export default HeaderAdmin
