import { useCollection } from "react-firebase-hooks/firestore";
import "./JobSidebar.css";
import { collection } from "firebase/firestore";
import { db } from "../../../services/Firebase/Config";
import { useNavigate } from "react-router-dom";

const JobSidebar = ({ filters, setFilters, showSlider }) => {
  const [value, loading, error] = useCollection(collection(db, "Jobs"));
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const uniqueLocations = [
    ...new Set(value.docs.map((doc) => doc.data().location)),
  ];
  const uniqueTypes = [...new Set(value.docs.map((doc) => doc.data().jobType))];
  const uniqueStatuses = [
    ...new Set(value.docs.map((doc) => doc.data().status)),
  ];
  const uniqueSalaries = [
    ...new Set(
      value.docs.map(
        (doc) => `${doc.data().salarystart} - ${doc.data().salaryend}`
      )
    ),
  ];

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const newValues = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: newValues };
    });
  };

  const handleClearAll = () => {
    setFilters({
      jobLocation: [],
      jobType: [],
      jobStatus: [],
      jobSalary: [],
    });
  };

  return (
    <div className={`JobSidebar ${showSlider}`}>
      <div className="JobSidebar-wrapper">
        <div className="JobSidebar-filter">
          <h5>Filters</h5>
          <button onClick={handleClearAll}>Clear All</button>
        </div>

        <div className="JobSidebar-location">
          <h5>Location</h5>
          {uniqueLocations.map((location, index) => (
            <div className="jobtype-fulltime" key={index}>
              <div className="checkbox-wrapper-46">
                <input
                  type="checkbox"
                  id={`cbx-location-${index}`}
                  className="inp-cbx"
                  checked={filters.jobLocation.includes(location)}
                  onChange={() => handleCheckboxChange("jobLocation", location)}
                />
                <label htmlFor={`cbx-location-${index}`} className="cbx">
                  <span>
                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                      <polyline points="1.5 6 4.5 9 10.5 1" />
                    </svg>
                  </span>
                  <span>{location}</span>
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="JobSidebar-location">
          <h5>Job Type</h5>
          {uniqueTypes.map((type, index) => (
            <div className="jobtype-fulltime" key={index}>
              <div className="checkbox-wrapper-46">
                <input
                  type="checkbox"
                  id={`cbx-jobtype-${index}`}
                  className="inp-cbx"
                  checked={filters.jobType.includes(type)}
                  onChange={() => handleCheckboxChange("jobType", type)}
                />
                <label htmlFor={`cbx-jobtype-${index}`} className="cbx">
                  <span>
                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                      <polyline points="1.5 6 4.5 9 10.5 1" />
                    </svg>
                  </span>
                  <span>{type}</span>
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="JobSidebar-location">
          <h5>Job Status</h5>
          {uniqueStatuses.map((status, index) => (
            <div className="jobtype-fulltime" key={index}>
              <div className="checkbox-wrapper-46">
                <input
                  type="checkbox"
                  id={`cbx-status-${index}`}
                  className="inp-cbx"
                  checked={filters.jobStatus.includes(status)}
                  onChange={() => handleCheckboxChange("jobStatus", status)}
                />
                <label htmlFor={`cbx-status-${index}`} className="cbx">
                  <span>
                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                      <polyline points="1.5 6 4.5 9 10.5 1" />
                    </svg>
                  </span>
                  <span>{status}</span>
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="JobSidebar-location">
          <h5>Job Salary</h5>
          {uniqueSalaries.map((salaryRange, index) => (
            <div className="jobtype-fulltime" key={index}>
              <div className="checkbox-wrapper-46">
                <input
                  type="checkbox"
                  id={`cbx-salary-${index}`}
                  className="inp-cbx"
                  checked={filters.jobSalary.includes(salaryRange)}
                  onChange={() =>
                    handleCheckboxChange("jobSalary", salaryRange)
                  }
                />
                <label htmlFor={`cbx-salary-${index}`} className="cbx">
                  <span>
                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                      <polyline points="1.5 6 4.5 9 10.5 1" />
                    </svg>
                  </span>
                  <span>{salaryRange}</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="create-cv">
        <button onClick={() => navigate("/createcv")}>Create Your CV</button>
      </div>
    </div>
  );
};

export default JobSidebar;
