import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../services/Firebase/Config";

const DataContext = createContext();

export function DataProvider({ children }) {
  // CV data
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Profession, setProfession] = useState("");
  const [loction, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [github, setGitHub] = useState("");
  const [summary, setSummary] = useState("");
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [startyear, setStartyear] = useState("");
  const [graduate, setGraduate] = useState("");
  const [GPA, setGPA] = useState("");
  const [workExperiences, setWorkExperiences] = useState([
    {
      position: "",
      company: "",
      role: "",
      start: "",
      end: "",
      description: "",
    },
  ]);
  const [project, setProject] = useState([
    { name: "", url: "", date: "", description: "" },
  ]);
  const [skills, setSkills] = useState([{ skill: "" }]);
  const [languages, setLanguages] = useState([{ Languages: "", level: "" }]);

  // Login
  const [user, setUser] = useState(false);
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setUser(true);
    }
  }, []);
  

  // exam
  const examQuery = query(collection(db, "Exams"), orderBy("id", "desc"));

  const [value, loading, error] = useCollection(examQuery);

  // jobs
  const JobsQuery = query(collection(db, "Jobs"), orderBy("id", "desc"));

  const [valueJobs, loadingjobs, errorjobs] = useCollection(JobsQuery);

  // Filter job
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs =
    valueJobs?.docs.filter((item) => {
      const data = item.data();
      const filed = data.filed ? data.filed.toLowerCase() : "";
      const company = data.company ? data.company.toLowerCase() : "";

      return (
        filed.includes(searchQuery.toLowerCase()) ||
        company.includes(searchQuery.toLowerCase())
      );
    }) || [];

  // login

  return (
    <DataContext.Provider
      value={{
        value,
        loading,
        error,
        valueJobs,
        loadingjobs,
        errorjobs,
        setSearchQuery,
        searchQuery,
        filteredJobs,
        fristName,
        setFristName,
        lastName,
        setLastName,
        Profession,
        setProfession,
        loction,
        setLocation,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        linkedin,
        setLinkedin,
        portfolio,
        setPortfolio,
        github,
        setGitHub,
        summary,
        setSummary,
        degree,
        setDegree,
        university,
        setUniversity,
        startyear,
        setStartyear,
        graduate,
        setGraduate,
        GPA,
        setGPA,
        workExperiences,
        setWorkExperiences,
        project,
        setProject,
        skills,
        setSkills,
        setLanguages,
        languages,
        user,
        setUser,
        userdata,
        setUserData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContext;
