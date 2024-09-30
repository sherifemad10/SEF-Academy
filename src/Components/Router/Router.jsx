import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home/Home";
import Business from "../Pages/Business/Business";
import Articles from "../Pages/AdminPanal/Articles/Articles";
import AddArticles from "../Pages/Add/AddAritcle/AddArticles";
import Jobs from "../Pages/AdminPanal/Jobs/Jobs";
import AddJob from "../Pages/Add/AddJob/AddJob";
import ArticalDetails from "../Pages/Details/ArticalDetails";
import User from "../Pages/AdminPanal/Users/User";
import AddCertificate from "../Pages/Add/AddCertificate/AddCertificate";
import AddUser from "../Pages/Add/AddUser/AddUser";
import UpdataArticles from "../Pages/Updata/UpdataArtical";
import AddCourses from "../Pages/Add/AddCourses/AddCourses";
import Coursess from "../Pages/Coursess/Coursess";
import Courses from "../Pages/AdminPanal/Courses/Courses";
import UpdataCourses from "../Pages/Updata/UpdataCouses";
import Coursesdetails from "../Pages/Details/Coursesdetails/Coursesdetails";
import StudentPortal from "../Pages/StudentPortal/StudentPortal";
import InstructorPortal from "../Pages/InstructorPortal/InstructorPortal";
import Viewprofile from "../Pages/Viewprofile/Viewprofile";
import Exam from "../Pages/Exam/Exam";
import AddExam from "../Pages/Add/AddExam/AddExam";
import OnlineExam from "../Pages/Exam/OnlineExam/OnlineExam";
import ExamResult from "../Pages/Exam/ExamResult/ExamResult";
import UpdataJob from "../Pages/Updata/UpdataJobs";
import AllJobs from "../Pages/Jobs/AllJobs";
import JobsDetails from "../Pages/Details/JobsDetails/JobsDetails";
import Applications from "../Pages/AdminPanal/Applications/Applications";
import CreateCV from "../Pages/CreateCV/CreateCV";
import MainInformation from "../Pages/CreateCV/MainInformation/MainInformation";
import YourLinks from "../Pages/CreateCV/YourLinks/YourLinks";
import Summary from "../Pages/CreateCV/Summary/Summary";
import UpdataUser from "../Pages/Updata/UpdataUser";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";

export const ROUTER = [
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/courses",
        element: <Coursess/>,
      },
      {
        path: "/coursesDetails/:id",
        element: <Coursesdetails/>,
      },
      {
        path: "/coursesAdded",
        element: <Courses/>,
      },
      {
        path: "/createCourses",
        element: <AddCourses/>,
      },
      {
        path: "/updataCourses/:id",
        element: <UpdataCourses/>,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/createJob",
        element: <AddJob />,
      },
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/updataJob/:id",
        element: <UpdataJob />,
      },
      {
        path: "/allJobs",
        element: <AllJobs />,
      },
      {
        path: "/jobDetails/:id",
        element: <JobsDetails />,
      },
      {
        path: "/students",
        element: <User />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      
      {
        path: "/admin",
        element: <Articles />,
      },
      {
        path: "/createArticle",
        element: <AddArticles />,
      },
      {
        path: "/updataArticle/:id",
        element: <UpdataArticles />,
      },
      {
        path: "/artical/:id",
        element: <ArticalDetails />,
      },
      {
        path: "/addCertificate",
        element: <AddCertificate />,
      },
      {
        path: "/addUser",
        element: <AddUser />,
      },
      {
        path: "/updatauser/:id",
        element: <UpdataUser />,
      },
      {
        path: "/profile",
        element: <StudentPortal />,
      },
      {
        path: "/profilee",
        element: <InstructorPortal />,
      },
      {
        path: "/viewprofile",
        element: <Viewprofile />,
      },
      {
        path: "/exam",
        element: <Exam />,
      },
      {
        path: "/createexam",
        element: <AddExam />,
      },
      {
        path: "/onlineexam/:id",
        element: <OnlineExam />,
      },
      {
        path: "/examresult/:id",
        element: <ExamResult />,
      },
      {
        path: "/createcv",
        element: <CreateCV />
      },
      {
        path: "/mainInformation",
        element: <MainInformation />
      },
      {
        path: "/yourlinks",
        element: <YourLinks />
      },
      {
        path: "/summary",
        element: <Summary />
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  
];

export const router = createBrowserRouter(ROUTER);
