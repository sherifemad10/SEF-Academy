import { useContext } from "react";
// import CVPage from '../CV/CV';
import "./MainInformation.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DataContext from "../../../Context/Context";

const MainInformation = () => {
  const {
    setFristName,
    fristName,
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
  } = useContext(DataContext);

  return (
    <div className="MainInformation">
      <form className="MainInformation-form">
        <div className="MainInformation-frist-last-name">
          <div className="frist-last-name-fristname">
            <label htmlFor="frist-name">First Name</label>
            <input
              type="text"
              id="frist-name"
              value={fristName}
              onChange={(eo) => setFristName(eo.target.value)}
              required
            />
          </div>
          <div className="frist-last-name-lastname">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(eo) => setLastName(eo.target.value)}
              required
            />
          </div>
        </div>
        {/* end frist-last-name */}

        <div className="MainInformation-your-Profession">
          <label htmlFor="Profession">Profession</label>
          <input
            type="text"
            id="Profession"
            value={Profession}
            onChange={(eo) => setProfession(eo.target.value)}
            required
          />
        </div>
        {/* end your-Profession */}

        <div className="MainInformation-location">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={loction}
            onChange={(eo) => setLocation(eo.target.value)}
            required
          />
        </div>

        <div className="MainInformation-email">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(eo) => setEmail(eo.target.value)}
            required
          />
        </div>

        <div className="MainInformation-PhoneNumber">
          <label htmlFor="PhoneNumber">Phone Number</label>
          <PhoneInput
            country={"eg"}
            value={phoneNumber}
            onChange={setPhoneNumber}
            required
          />
        </div>
        {/* end phone number input */}
        {/* <div className='MainInformation-continue'>
          <button>CONTINUE</button>
        </div> */}
      </form>
    </div>
  );
};

export default MainInformation;
