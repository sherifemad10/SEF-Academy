import { SlCloudUpload } from "react-icons/sl";
import Sidebar from "../../AdminPanal/Sidebar/Sidebar";
import "./AddCertificate.css";
import { useState } from "react";
import MobilSidebar from "../../AdminPanal/Users/Mobile/MobilSidebar/MobilSidebar";
import { collection, doc, updateDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../services/Firebase/Config";
import Loading from "../../../Loading/Loading";
import { toast, Bounce } from "react-toastify";

const AddCertificate = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [AddCertificate, setAddCertificate] = useState({
    id: "",
    dateacquired: "",
    uploaddata: "",
    courses: "",
    img: "",
  });

  const [value, loading, error] = useCollection(collection(db, "Users"));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  const handleUploadCertificate = async (e) => {
    e.preventDefault();

    if (!selectedUser) {
      toast("Please select a user", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    const userDocRef = doc(db, "Users", selectedUser);

    try {
      await updateDoc(userDocRef, {
        Certificate: AddCertificate,
      });

      toast("Certificate added successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });

      // Clear form
      setAddCertificate({
        id: "",
        name: "",
        dateacquired: "",
        uploaddata: "",
        courses: "",
        img: "",
      });
      setSelectedUser("");
    } catch (err) {
      toast(`Error adding certificate ${err}`, {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="AddCertificate">
      <div className="AddCertificate-wrapper">
        <div className="AddAritcle-contant container">
          <div className="article-header">
            <div className="admin-panel">
              <p className="AdminPanel">Upload Certificate</p>
              <p>6th June 2024</p>
            </div>
          </div>
          <div className="certificate-body">
            <MobilSidebar />
            <Sidebar />

            <div className="add-certificate-form">
              <div className="add-certificate-header">
                <div className="certificatee">
                  <h5>Add Certificate</h5>
                </div>
              </div>

              <form onSubmit={handleUploadCertificate}>
                <div className="Name-dataenter-endData">
                  <div className="Name">
                    <label htmlFor="StudentName">Student Name</label>
                    <select
                      id="StudentName"
                      value={selectedUser}
                      onChange={(e) => setSelectedUser(e.target.value)}
                    >
                      <option value="" hidden></option>
                      {value?.docs.map((item) => {
                        const firstName = item.data().fristName;
                        const lastName = item.data().SecondName;
                        const name = `${firstName} ${lastName}`;
                        return (
                          <option value={item.id} key={item.id}>
                            {name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="dateAcquired">
                    <label htmlFor="dateAcquired">Date Acquired</label>
                    <input
                      type="date"
                      id="dateAcquired"
                      value={AddCertificate.dateacquired}
                      onChange={(e) =>
                        setAddCertificate({
                          ...AddCertificate,
                          dateacquired: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="uploadData">
                    <label htmlFor="uploadData">Upload Date</label>
                    <input
                      type="date"
                      id="uploadData"
                      value={AddCertificate.uploaddata}
                      onChange={(e) =>
                        setAddCertificate({
                          ...AddCertificate,
                          uploaddata: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="couress">
                  <label htmlFor="courses">Courses</label>
                  <input
                    type="text"
                    id="courses"
                    value={AddCertificate.courses}
                    onChange={(e) =>
                      setAddCertificate({
                        ...AddCertificate,
                        courses: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="upload-Certificate">
                  <label htmlFor="file">Upload Certificate</label>

                  <label htmlFor="file" className="labelFile">
                    <span>
                      <SlCloudUpload className="uploadimg" />
                    </span>
                    <div className="upload-Certificate-details">
                      <p className="drag">
                        Drag & drop files or <span>Browse</span>
                      </p>
                      <p className="type">
                        Supported formats: JPEG, PNG, GIF, PDF
                      </p>
                    </div>
                  </label>
                  <input
                    className="inputt"
                    name="text"
                    id="file"
                    type="file"
                    onChange={(e) => {
                      const imgurl = URL.createObjectURL(e.target.files[0]);
                      setAddCertificate({ ...AddCertificate, img: imgurl });
                    }}
                  />
                </div>

                <div className="upload-cancel">
                  <button
                    type="button"
                    className="cancel"
                    onClick={() => setSelectedUser("")}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="Upload">
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCertificate;
