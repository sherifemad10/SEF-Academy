import { useNavigate } from "react-router-dom";
import "./PleaseLogin.css";

const PleaseLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="PleaseLogin">
      <div className="PleaseLogin-wrapper">
        <p>Please login to view this page</p>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
};

export default PleaseLogin;
