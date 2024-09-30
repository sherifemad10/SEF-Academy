const ApplicationCardMobile = ({ company, experience, email, mobile, cv }) => {
  return (
    <div className="application-cardMobile">
      
      <div className="UsercardMobile-state">
        
        <a href={cv} download>
          <button>
            Download <span> CV</span>
          </button>
        </a>
      </div>

      <div className="UsercardMobile-name">
        <p>Applicant : {company}</p>
      </div>

      <div className="UsercardMobile-role">
        <p>Experience : {experience}</p>
      </div>

      <div className="UsercardMobile-role">
        <p>Email : {email}</p>
      </div>

      <div className="UsercardMobile-role">
        <p>Mobile Numbe : {mobile}</p>
      </div>

    </div>
  );
};

export default ApplicationCardMobile;
