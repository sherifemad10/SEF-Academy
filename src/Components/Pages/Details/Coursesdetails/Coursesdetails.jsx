import { useDocument } from "react-firebase-hooks/firestore";
import Loading from "../../../Loading/Loading";
import "./coursesDetails.css";
import CoursesHeader from "./coursesHeader/coursesHeader";
import CoursesMain from "./coursesmain/CoursesMain";
import CoursesSidebar from "./CoursesSidebar/CoursesSidebar";
import IntroductionLessons from "./IntroductionLessons/IntroductionLessons";
import { doc } from "firebase/firestore";
import { db } from "../../../services/Firebase/Config";
import { useParams } from "react-router-dom";
const Coursesdetails = () => {
  const { id } = useParams();
  const [value, loading, error] = useDocument(doc(db, "Courses", id));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  const courses = value.data();
  console.log(courses);

  return (
    <div className="Coursesdetails">
      <div className="coursesDetails-wrapper">
        <div className="coursesDetails-contant container">
          <CoursesHeader courses={courses} />

          <CoursesMain courses={courses} />

          <div className="coursesDetail-body">
            <IntroductionLessons courses={courses} />

            <CoursesSidebar courses={courses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursesdetails;
