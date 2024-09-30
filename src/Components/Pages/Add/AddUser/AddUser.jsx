import { useState } from "react";
import Sidebar from "../../AdminPanal/Sidebar/Sidebar";
import "./AddUser.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../services/Firebase/Config";
import { Bounce, toast } from "react-toastify";
import MobilSidebar from "../../AdminPanal/Users/Mobile/MobilSidebar/MobilSidebar";

const AddUser = () => {
  const [fristName, setFristName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [mobile, setMobile] = useState("");
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Certificate, setCertificate] = useState();

  // check
  const checkForm = () => {
    if (
      !fristName ||
      !SecondName ||
      !state ||
      !email ||
      !role ||
      !mobile ||
      !userID ||
      !password ||
      !confirmPassword
    ) {
      toast("Please Fill All Fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return false;
    }
    return true;
  };

  const ckeckPassword = () => {
    if (password !== confirmPassword) {
      toast("Password Not Match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  // Helper function to filter out undefined values
  const cleanData = (data) => {
    return Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined)
    );
  };

  async function Publish() {
    const taskid = Date.now();

    // Create the user data object
    const userData = {
      id: taskid,
      fristName: fristName,
      SecondName: SecondName,
      state: state,
      email: email,
      role: role,
      mobile: mobile,
      userID: userID,
      password: password,
      confirmPassword: confirmPassword,
      Certificate: Certificate,
      stated: "Published",
    };

    // Remove undefined values from userData
    const cleanUserData = cleanData(userData);

    await setDoc(doc(db, "Users", taskid.toString()), cleanUserData);
    clearForm();
    checkForm();
    ckeckPassword();

    toast("User added successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  async function Draft() {
    const taskid = Date.now();

    // Create the user data object
    const userData = {
      id: taskid,
      fristName: fristName,
      SecondName: SecondName,
      state: state,
      email: email,
      role: role,
      mobile: mobile,
      userID: userID,
      password: password,
      confirmPassword: confirmPassword,
      Certificate: Certificate,
      stated: "Draft",
    };

    // Remove undefined values from userData
    const cleanUserData = cleanData(userData);

    await setDoc(doc(db, "Users", taskid.toString()), cleanUserData);
    clearForm();
    checkForm();
    ckeckPassword();
  }

  // clear
  const clearForm = () => {
    setFristName("");
    setSecondName("");
    setState("");
    setEmail("");
    setRole("");
    setMobile("");
    setUserID("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="AddUser">
      <div className="AddUser-wrapper">
        <div className="AddUser-contant container">
          <div className="article-header">
            <div className="admin-panel">
              <p className="AdminPanel">Create New User</p>
              <p>6th June 2024</p>
            </div>
          </div>{" "}
          {/*article-header */}
          <div className="AddUser-body">
            <MobilSidebar />
            <Sidebar />
            <div className="add-user-form">
              <div className="add-artical-header">
                <div className="Articlesss">
                  <h5>Add User Details</h5>
                </div>

                <div className="publish">
                  <button onClick={Publish} className="publish-btn">
                    Publish
                  </button>
                </div>
              </div>{" "}
              {/* end posted-artical-header */}
              <form>
                <div className="frName-seName-state">
                  <div className="fristName">
                    <label htmlFor="fristName">Frist Name</label>
                    <input
                      type="text"
                      name="fristName"
                      id="fristName"
                      value={fristName}
                      onChange={(eo) => setFristName(eo.target.value)}
                    />
                  </div>

                  <div className="secondName">
                    <label htmlFor="secondName">Second Name</label>
                    <input
                      type="text"
                      name="secondName"
                      id="secondName"
                      value={SecondName}
                      onChange={(eo) => setSecondName(eo.target.value)}
                    />
                  </div>

                  <div className="state">
                    <label htmlFor="state">State</label>
                    <select
                      name="state"
                      id="state"
                      value={state}
                      onChange={(eo) => setState(eo.target.value)}
                    >
                      <option value="" hidden></option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                {/* frName-seName-state */}
                <div className="email-role">
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(eo) => setEmail(eo.target.value)}
                    />
                  </div>

                  <div className="role">
                    <label htmlFor="role">Role</label>
                    <select
                      name="role"
                      id="role"
                      value={role}
                      onChange={(eo) => setRole(eo.target.value)}
                    >
                      <option value="" hidden></option>
                      <option value="Student">Student</option>
                      <option value="Admin">Admin</option>
                      <option value="Instructors">Instructors</option>
                    </select>
                  </div>
                </div>{" "}
                {/* email-role */}
                <div className="mobile-id">
                  <div className="mobile">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      id="mobile"
                      value={mobile}
                      onChange={(eo) => setMobile(eo.target.value)}
                    />
                  </div>

                  <div className="user-id">
                    <label htmlFor="user-id">User ID</label>
                    <input
                      type="text"
                      name="user-id"
                      id="user-id"
                      value={userID}
                      onChange={(eo) => setUserID(eo.target.value)}
                    />
                  </div>
                </div>
                {/* mobile-id */}
                <div className="password">
                  <div className="pass">
                    <label htmlFor="pass">Password</label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      value={password}
                      onChange={(eo) => setPassword(eo.target.value)}
                    />
                  </div>

                  <div className="confirm-pass">
                    <label htmlFor="confirm-pass">Confirm Password</label>
                    <input
                      type="password"
                      name="confirm-pass"
                      id="confirm-pass"
                      value={confirmPassword}
                      onChange={(eo) => setConfirmPassword(eo.target.value)}
                    />
                  </div>
                </div>{" "}
                {/* password */}
                <div className="save-cancel">
                  <button onClick={clearForm} className="cancel">
                    Cancel
                  </button>
                  <button onClick={Draft} className="save">
                    Save
                  </button>
                </div>
              </form>
            </div>{" "}
            {/* add-user-form */}
          </div>{" "}
          {/* AddUser-body */}
        </div>{" "}
        {/* AddUser-contant */}
      </div>{" "}
      {/* AddUser-wrapper */}
    </div>
  );
};

export default AddUser;
