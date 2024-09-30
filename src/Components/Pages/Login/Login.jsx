import "./Login.css";
import Logo from "../../../../public/assets/seff_logo_black.jpg";
import { FaIdCard } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../services/Firebase/Config";
import { Bounce, toast } from "react-toastify";
import Loading from "../../Loading/Loading";
import DataContext from "../../Context/Context";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setUserData, user } = useContext(DataContext);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [value, loading, error] = useCollection(collection(db, "Users"));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!userId || !password) {
      toast("Please fill in all fields", {
        autoClose: 5000,
        transition: Bounce,
      });
      return;
    }

    const userDoc = value.docs.find((doc) => {
      const userData = doc.data();
      return userId === userData.userID && password === userData.password;
    });

    if (userDoc) {
      const userData = userDoc.data();
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("userState", JSON.stringify(user));
      setUserId("");
      setPassword("");
      setUser(true);
      setUserData(userData);
      navigate("/");
      toast("Login Successfully", { autoClose: 5000, transition: Bounce });
    } else {
      toast("Login Failed", { autoClose: 5000, transition: Bounce });
    }
  };

  return (
    <div className="Login-page">
      <div className="login-page-wrapper">
        <div className="login-img">
          <img src={Logo} alt="Logo" />
        </div>

        <form className="login-page-form">
          <div className="login-page-userid">
            <span>
              {" "}
              <FaIdCard />
            </span>
            <input
              type="text"
              placeholder="User Id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div className="login-page-password">
            <span>
              {" "}
              <RiLockPasswordLine />
            </span>
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-page-forget">
            <a href="#">Forget Password?</a>
          </div>
          <div className="login-page-login">
            <button onClick={handleLogin}>Login</button>
          </div>

          <div className="login-page-have-account">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
