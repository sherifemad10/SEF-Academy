import { MdOutlineEmail, MdOutlinePhoneInTalk } from 'react-icons/md'
import './ProfileSidebar.css'

const ProfileSidebar = ({age, setAge, nationality, setNationality, country, setCountry, city, setCity, university, setUniversity, major, setMajor, graduation, setGraduation, email, setEmail, phone, setPhone, edit, userdata}) => {
  return (
    <div className='ProfileSidebar'>
      <div className='Personal-info'>
        <div className='Personal-info-title'>
        <h6>Personal Info</h6>
        </div>

        <div className='Personal-info-text'>
          {
            edit ?
            <div className='Personal-info-text-input'>

              <div className='Personal-info-input'>
                <p>Age :</p>

                <input type="text" value={age} placeholder='Age' onChange={(eo)=> setAge(eo.target.value)
              } />
              </div>

              <div className='Personal-info-input'>
                <p>Nationality :</p>
                <input type="text" value={nationality} placeholder='Nationality' onChange={(eo)=> setNationality(eo.target.value)
                  } />
              </div>

              <div className='Personal-info-input'>
                <p>Country :</p>
                <input type="text" value={country} placeholder='Country' onChange={(eo)=> setCountry(eo.target.value)
                  } />
              </div>

              <div className='Personal-info-input'>
                <p>City :</p>
                <input type="text" value={city} placeholder='City' onChange={(eo)=> setCity(eo.target.value)
                  } />
              </div>

              </div>

        
            :
            <>
              <p><span>Student ID :</span> {userdata.userID}</p>
              <p><span>Age :</span> {age}</p>
              <p><span>Nationality :</span> {nationality}</p>
              <p><span>Country :</span> {country}</p>
              <p><span>City :</span> {city}</p>
              </>
          }
        
        </div>

      </div> {/* end Personal-info */}

      <div className='Personal-info'>
        <div className='Personal-info-title'>
        <h6>Education</h6>
        </div>

        <div className='Personal-info-text'>
          <div className='eduction'>
            {
              edit ?
              <div className='Personal-info-input'>
                <p>University :</p>
                <input type="text" value={university} placeholder='University' onChange={(eo)=> setUniversity(eo.target.value)
                } />
                </div>

                :
                <>
                  <h6>University : </h6>
                  <p>International Islamic University</p>
                </>


            }
        
          </div>

          <div className='eduction'>
            {
              edit ?
              <div className='Personal-info-input'>
                <p>Major :</p>
                <input type="text" value={major} placeholder='Major' onChange={(eo)=> setMajor(eo.target.value)
                } />
                </div>

                :
                <>
                  <h6>Major : </h6>
                  <p>Computer science</p>
                </>
            }
        
          </div>

          <div className='eduction'>
            {
              edit ?
              <div className='Personal-info-input'>
                <p>Graduation Year :</p>
                <input type="text" value={graduation} placeholder='Graduation Year' onChange={(eo)=> setGraduation(eo.target.value)
                } />
                </div>
                :
                <>
                <h6>Graduation Year : </h6>
                <p>2026</p>
                </>
            }
    
          </div>
          
          
          
        </div>

      </div> {/* end Personal-info */}

      <div className='Personal-info'>
        <div className='Personal-info-title'>
        <h6>Contact Info</h6>
        </div>

        <div className='Contact-Info-text'>
          <div className='Contact-Info-email'>
            {
              edit ?
              <div className='Personal-info-input'>
                <h6> <span> <MdOutlineEmail />
                </span>Email</h6>

                <input type="text" value={email} placeholder='Email' onChange={(eo)=> setEmail(eo.target.value)
                } />
                </div>
                :
                <>
                <h6> <span> <MdOutlineEmail />
            </span>Email</h6>
            <p>4Hqg6@example.com</p>
                </>
            }
            
          </div>

          <div className='Contact-Info-email'>
            {
              edit ?
              <div className='Personal-info-input'>
                <h6> <span> <MdOutlinePhoneInTalk />
                </span>Mobile Number</h6>
                <input type="text" value={phone} placeholder='Mobile Number' onChange={(eo)=> setPhone(eo.target.value)
                } />
                </div>
                :
                <>
              <h6> <span> <MdOutlinePhoneInTalk />
            </span>Mobile Number</h6>
            <p>011566477666</p>  
            </>


            }
            
          </div>
          
        </div>

      </div> {/* end Personal-info */}



      
      
    </div>
  )
}

export default ProfileSidebar
