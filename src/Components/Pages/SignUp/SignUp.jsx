import './SignUp.css'
import Logo from '../../../../public/assets/seff_logo_black.jpg'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { Bounce, toast } from 'react-toastify'
import { useRef } from 'react'


const SignUp = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c6y5927', 'template_lhf8rkg', form.current, {
        publicKey: '7n8s8qqhxViNfz9K2',
      })
      .then(
        () => {
          toast('🦄 Sign Up Successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
        },
        (error) => {
          toast.error(error.text, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
        }
      );
    e.target.reset();
  };


  return (
    <div className='SignUp'>

      <div className='signin-wrapper'>

        <div className='signin-img'>
          <img src={Logo} alt="Logo" />
          </div>

          <form className='signup-form' ref={form} onSubmit={sendEmail}>
            <div className='signup-form-fristName-secondName'>

              <div className='signup-form-fristName'>
                <span><FaRegUserCircle /></span>
                <input type="text" name="frist_name" id="fristName" placeholder='Frist Name' />
              </div>

              <div className='signup-form-lastName'>
                <span><FaRegUserCircle /></span>
                <input type="text" name="last_name" id="lastName" placeholder='Last Name' />
              </div>

            </div>

            <div className='signup-form-email'>
              <span><MdOutlineEmail /></span>
              <input type="email" name="user_email" id="email" placeholder='Email' />
            </div>

            <div className='signup-password-confirm'>

              <div className='signup-form-password'>
                  <span><RiLockPasswordLine/></span>
                <input type="password" name="user_password" id="password" placeholder='Password' />
           </div>

              <div className='signup-form-password'>
                  <span><RiLockPasswordLine/></span>
                <input type="password" name="user_confirm" id="password" placeholder='confirm Password' />
              </div>

            </div>

            <div className='signup-form-submit'>
              <button type="submit">Sign Up</button>
            </div>
            <div className='signup-form-haveaccunt'>
              <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </div>

          </form>


      </div>


    </div>
  )
}

export default SignUp