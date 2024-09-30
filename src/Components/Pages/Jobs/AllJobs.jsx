import TimeFromNow from "../../CustomHooks/UseTimer";
import "./AllJobs.css";
import JobsContant from "./JobsContant/JobsContant";
import JobsHeader from "./JobsHeader/JobsHeader";
import JobSidebar from "./JobSidebar/JobSidebar";
import Loading from "../../Loading/Loading";
import Pagination from "../AdminPanal/Articles/Pagination/Pagination";
import { useContext, useState } from "react";
import DataContext from "../../Context/Context";
import PleaseLogin from "../PleaseLogin/PleaseLogin";
import FilterIconMobile from "./Mobile/FilterIconMobile";

const AllJobs = () => {
  const {
    errorjobs,
    loadingjobs,
    filteredJobs,
    searchQuery,
    setSearchQuery,
    user,
  } = useContext(DataContext);

  const [showSlider, setShowSlider] = useState("hide");

  const handelSlider = () => {
    setShowSlider(showSlider === "hide" ? "active" : "hide");
  };

  // Lift filter state to AllJobs component
  const [filters, setFilters] = useState({
    jobLocation: [],
    jobType: [],
    jobStatus: [],
    jobSalary: [],
  });

  // Function to filter the jobs based on selected filters
  const applyFilters = (jobs) => {
    return jobs.filter((job) => {
      const { location, jobType, status, salarystart, salaryend } = job.data();

      // Filter by location
      const locationMatch =
        filters.jobLocation.length === 0 ||
        filters.jobLocation.includes(location);

      // Filter by job type
      const typeMatch =
        filters.jobType.length === 0 || filters.jobType.includes(jobType);

      // Filter by status
      const statusMatch =
        filters.jobStatus.length === 0 || filters.jobStatus.includes(status);

      // Filter by salary range (you could refine this further based on specific needs)
      const salaryMatch =
        filters.jobSalary.length === 0 ||
        filters.jobSalary.some((salaryRange) => {
          const [minSalary, maxSalary] = salaryRange.split(" - ").map(Number);
          return salarystart >= minSalary && salaryend <= maxSalary;
        });

      return locationMatch && typeMatch && statusMatch && salaryMatch;
    });
  };

  const filteredResults = applyFilters(filteredJobs);

  if (loadingjobs) {
    return <Loading />;
  }

  if (errorjobs) {
    return <h5>Error: {errorjobs.message}</h5>;
  }

  return (
    <>
      {user ? (
        <div className="AllJobs">
          <div className="AllJobs-wrapper">
            <div className="AllJobs-contant container">
              <div className="AllJobs-top-header">
                <p className="Jobs-portal">Jobs</p>
                <p>{TimeFromNow(Date.now())}</p>
              </div>

              <JobsHeader
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              <div className="AllJobs-body">
                <FilterIconMobile handelSlider={handelSlider} />
                <JobSidebar
                  showSlider={showSlider}
                  filters={filters}
                  setFilters={setFilters}
                />
                <div className="alljob-wrapper">
                  <div className="alljob-contant">
                    {filteredResults.slice(0, 3).map((doc) => (
                      <JobsContant
                        key={doc.id}
                        id={doc.data().id}
                        img={doc.data().img}
                        filed={doc.data().filed}
                        company={doc.data().company}
                        salaryend={doc.data().salaryend}
                        salarystart={doc.data().salarystart}
                        status={doc.data().status}
                        jobDescription={doc.data().jobDescription}
                        skills={doc.data().skills}
                        time={doc.data().time}
                        currency={doc.data().currency}
                      />
                    ))}
                  </div>
                  {/* <JobsContant/> */}

                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PleaseLogin />
      )}
    </>
  );
};

export default AllJobs;
