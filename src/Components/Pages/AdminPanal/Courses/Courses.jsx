import { useCollection } from 'react-firebase-hooks/firestore'
import Pagination from '../Articles/Pagination/Pagination'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'
import Sidebar from '../Sidebar/Sidebar'
import './Courses.css'
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore'
import { db } from '../../../services/Firebase/Config'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Loading from '../../../Loading/Loading'
import TimeFromNow from '../../../CustomHooks/UseTimer'
import UsehandleDelete from '../../../CustomHooks/Usedelete'
import MobilSidebar from '../Users/Mobile/MobilSidebar/MobilSidebar'
import CoursesCardMobile from './Mobile/CoursesCardMobile'

const Courses = () => {
    const createCourses = "/createCourses"
  const Title = "CREATE NEW COURSES"
  
  const coursesQuery = query(
    collection(db, 'Courses'), 
    orderBy("id", "desc"), 
  );
  const [value, loading, error] = useCollection(coursesQuery);


  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  const filteredCourses = value.docs.filter(item => {
    const data = item.data();
    const title = data?.name ? data.name.toLowerCase() : '';
    return title.includes(searchQuery.toLowerCase());
  });

    // Paginate courses based on current page and itemsPerPage
    const paginatedCourses = filteredCourses.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  const handleEdit = (courseData,id) => {
    navigate(`/updataCourses/${id}`, { state: courseData } );
  };



  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (id)=>{
    console.log("deleted")
    await deleteDoc(doc(db, 'Courses', id));
  }
  




  return (
    <div className='AddedCourses'>

<div className="articles-wrapper">
        <div className="articles-contant container">
          <HeaderAdmin linkto={createCourses} Title={Title} />
          
          {/* end article-header */}
          {/* article-body */}
          <div className="article-body">
            <Sidebar />
            <MobilSidebar/>

            <div className="posted-artical">
              <div className="posted-artical-header">
                <div className="Articlesss">
                  <h5>Courses</h5>
                </div>

                <div className="search-artical">
                  <div className="input-wrapper">
                    <button className="icon">
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 22L20 20"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      name="text"
                      className="input"
                      placeholder="search in articles.."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>{" "}
              {/* end posted artical header */}
              <div className="posted-artical-body">
              {paginatedCourses.slice(0, 7).map((user) => (
                  <CoursesCardMobile
                    key={user.id}
                    userid={user.data().id}
                    title={user.data().name}
                    introduction={user.data().introduction}
                    state={user.data().state}
                    level={user.data().level}
                    startData={user.data().startData}
                    time={user.data().time}
                    data={user.data()}
                    handleEdit={handleEdit}
                  />
                ))}
                <table className='courses-table'>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Instructor</th>
                      <th>Level</th>
                      <th>Start Date</th>
                      <th>Published on</th>
                    </tr>
                  </thead>

                  <tbody>

                    {
                      paginatedCourses.slice(0,6).map((item) => (
                        <tr key={item.id}>
                      <td>{item.data().name}</td>
                      <td>
                        {
                          item.data().state === 'On Going' ? <button className="published">{item.data().state}</button> : <button className="draft">{item.data().state}</button>
                        }
                      </td>

                      <td>{item.data().introduction}</td>
                      <td>{item.data().level}</td>
                      <td>{item.data().startData}</td>
                      <td>{TimeFromNow(item.data().time)}</td>
                      <td className="action">
                        {/* edit btn */}

                        <button onClick={() => handleEdit(item.data(),item.data().id)} className="editBtn">
                          <svg height="1em" viewBox="0 0 512 512">
                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                          </svg>
                        </button>

                        {/* delete edit btn */}
                        <button onClick={() => handleDelete(item.id)} className="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 69 14"
                            className="svgIcon bin-top"
                          >
                            <g clipPath="url(#clip0_35_24)">
                              <path
                                fill="black"
                                d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_35_24">
                                <rect fill="white" height={14} width={69} />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 69 57"
                            className="svgIcon bin-bottom"
                          >
                            <g clipPath="url(#clip0_35_22)">
                              <path
                                fill="black"
                                d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_35_22">
                                <rect fill="white" height={57} width={69} />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </td>
                    </tr>
                        
                        
                      ))
                    }

                    
                  </tbody>
                  
                </table>
              </div>{" "}
              {/* end posted artical body */}
            </div>{" "}
            {/* end posted-artical */}
          </div>{" "}
          {/* end articles-contant */}
        </div>{" "}
        {/* end article-body */}
        <Pagination currentPage={currentPage}
                totalItems={filteredCourses.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}/>
      </div>{" "}
      
    </div>
  )
}

export default Courses
