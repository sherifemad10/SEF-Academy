import { collection, orderBy, query } from "firebase/firestore";
import Sidebar from "../Sidebar/Sidebar";
import "./Applications.css";
import { db } from "../../../services/Firebase/Config";
import { useCollection } from "react-firebase-hooks/firestore";
import Loading from "../../../Loading/Loading";
import Pagination from "../Articles/Pagination/Pagination";
import MobilSidebar from "../Users/Mobile/MobilSidebar/MobilSidebar";
import ApplicationCardMobile from "./Mobile/ApplicationCardMobile";

const Applications = () => {
  const applicationsQuery = query(
    collection(db, "Applicants"),
    orderBy("id", "desc")
  );

  const [value, loading, error] = useCollection(applicationsQuery);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  return (
    <div className="Applications">
      <div className="applications-wrapper">
        <div className="applications-contant container">
          <div className="article-header">
            <div className="admin-panel">
              <p className="AdminPanel">Admin Panel</p>
              <p>6th June 2024</p>
            </div>
          </div>

          <div className="applications-body">
            <Sidebar />
            <MobilSidebar />

            <div className="applications-artical">
              <div className="posted-applications-header">
                <div className="applicationsss">
                  <h5>Applications For Job at company name</h5>
                </div>
              </div>
              {/* end posted-applications-header*/}
              <div className="posted-applications-body">
                {value.docs.slice(0, 7).map((user) => (
                  <ApplicationCardMobile
                    key={user.id}
                    company={user.data().company}
                    experience={user.data().experience}
                    email={user.data().email}
                    mobile={user.data().mobile}
                    cv={user.data().cv}
                  />
                ))}
                <table className="application-table">
                  <thead>
                    <tr>
                      <th>Applicant</th>
                      <th>Experience</th>
                      <th>Email</th>
                      <th>Mobile Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {value.docs.slice(0, 5).map((doc) => (
                      <tr key={doc.id}>
                        <td>{doc.data().company}</td>
                        <td>{doc.data().experience}</td>
                        <td>{doc.data().email}</td>
                        <td>{doc.data().mobile}</td>
                        <td>
                          <a href={doc.data().cv} download>
                            <button>
                              Download <span> CV</span>
                            </button>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination />

              </div>
            </div>

          </div>
          
        </div>
        {/* end applications-contant */}
      </div>
      {/* end applications-wrapper */}
    </div>
  );
};

export default Applications;
