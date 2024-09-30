import './ViewprofileMain.css'
import img from '../../../../../public/assets/logo.png'

const ViewprofileMain = ({name, setName, education, setEducation, handelEdit, saveEdit, edit}) => {
  return (
    <div className='ViewprofileMain'>

      <div className='ViewprofileMain-btn'>
        {
          edit ?
            <button onClick={saveEdit}>Save Changes</button>
          :
          <button onClick={handelEdit}>Edit Profile</button>

        }
      </div>

      <div className='ViewprofileMain-img-name'>

        <div className='ViewprofileMain-img'>
            <img src={img} alt="" />
        </div>

        <div className='ViewprofileMain-name'>
          {
            edit ?
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            :
            <h6>{name}</h6>
          }

          {
              edit ?
              <input type="text" value={education} onChange={(e)=>setEducation(e.target.value)}/>
              :
              <p>{education}</p>
          }
          
        </div>


      </div>  {/* end ViewprofileMain-img-name */}
      
    </div>
  )
}

export default ViewprofileMain
