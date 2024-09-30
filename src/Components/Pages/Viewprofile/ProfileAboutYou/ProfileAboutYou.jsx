import './ProfileAboutYou.css'

const ProfileAboutYou = ({about, setAbout, edit}) => {
  return (
    <div className='ProfileAboutYou'>

      <div className='About-you'>
        <div className='about-you-tittle'>
          <h6>About You</h6>
        </div>

        <div className='about-you-dec'>
          {
            edit ?
            <textarea name="" id="" cols="30" rows="10" value={about} onChange={(eo)=> setAbout(eo.target.value)
            }></textarea>
            :
            <p>{about}</p>

          }
        </div>

      </div>
      {/* end About-you */}

      <div className='coursess-in-progress'>
        <div className='coursess-in-progress-tittle'>
          <h6>In Progress</h6>
          </div>
          <div className='coursess-in-progress-card'>

            <div className='coursess-in-progress-card-name-Instructor'>
              <h6>What is CSS</h6>
              <p><span>Instructor:</span> Sherif Emad</p>
            </div>

            <div className='coursess-in-progress-card-level'>
              <p>LEV.1</p>
            </div>




          </div>
          {/* end coursess-in-progress-card */}


      </div>
      {/* end In Progress courses */}



      <div className='coursess-in-progress'>
        <div className='coursess-in-progress-tittle'>
          <h6>Previous</h6>
          </div>
          <div className='coursess-in-progress-card'>

            <div className='coursess-in-progress-card-name-Instructor'>
              <h6>What is CSS</h6>
              <p><span>Instructor:</span> Sherif Emad</p>
            </div>

            <div className='coursess-in-progress-card-level'>
              <p>LEV.1</p>
            </div>




          </div>
          {/* end coursess-in-progress-card */}


      </div>
        {/* end Previous courses */}



    </div>
  )
}

export default ProfileAboutYou