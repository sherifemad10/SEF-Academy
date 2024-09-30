import InstructorPortalHeader from "./InstructorPortalHeader/InstructorPortalHeader";
import InstructorPortalmain from "./InstructorPortalmain/InstructorPortalmain";
import InstructorPortalUpcoming from "./InstructorPortalUpcoming/InstructorPortalUpcoming";

const InstructorPortal = () => {
  return (
    <div className="StudentPortal">
      <div className="StudentPortal-wrapper">
        <div className="StudentPortal-contant container">
          <div className="studentPortal-top-header">
            <p className="student-portal">Instructor Portal</p>
            <p>6th June 2024</p>
          </div>

          <InstructorPortalHeader />

          <InstructorPortalmain />

          <InstructorPortalUpcoming />
        </div>
      </div>
    </div>
  );
};

export default InstructorPortal;
