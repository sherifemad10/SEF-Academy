import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* user */}
        <div className='user'>
          <div className='user-header'>
          <h4>Users</h4>
          </div>

          <div className='user-body'>
            <Link to='#'>
              <p>Admins</p>
            </Link>

            <Link to='#'>
              <p>Editers</p>
            </Link>

            <Link to='#'>
              <p>Instructors</p>
            </Link>

            <Link to='/students'>
              <p>Students</p>
            </Link>

            </div>
            

            </div>

            {/* Articles */}
        <div className='Articless'>
          <div className='Articless-header'>
          <h4>Articles</h4>
          </div>

          <div className='Articless-body'>
            <Link to='/admin'>
              <p>Published Article</p>
            </Link>

            <Link to='#'>
              <p>Scheduled Articles</p>
            </Link>

            <Link to='#'>
              <p>Saved Drafts</p>
            </Link>

            </div>

            </div>

              {/* Articles */}
        <div className='Jobss'>
          <div className='Jobss-header'>
          <h4>Jobs</h4>
          </div>

          <div className='Jobss-body'>
            <Link to='/jobs'>
              <p>Published Jobs</p>
            </Link>

            <Link to='#'>
              <p>Saved Drafts</p>
            </Link>

            </div>
            

            </div>

         {/* Courses */}
         <div className='sidebar-Coursess'>
          <div className='Coursess-headerr'>
          <h4>Courses</h4>
          </div>

          <div className='Coursess-body'>
            <Link to='/coursesAdded'>
              <p>Published Courses</p>
            </Link>

            <Link to='#'>
              <p>Scheduled Courses</p>
            </Link>

            <Link to='#'>
              <p>Saved Drafts</p>
            </Link>
            </div>

            </div>

    </div>
  )
}

export default Sidebar