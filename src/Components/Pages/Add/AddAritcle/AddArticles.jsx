import { useState } from "react";
import Sidebar from "../../AdminPanal/Sidebar/Sidebar";
import Uploadimg from "../UploadImg/Uploadimg";
import "./AddAritcle.css";
import HeaderOfAdd from "../HeaderofAdd/HeaderOfAdd";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../services/Firebase/Config";
import MobilSidebar from "../../AdminPanal/Users/Mobile/MobilSidebar/MobilSidebar";
import { Bounce, toast } from "react-toastify";

const AddArticles = () => {
  const titleHeader = "Create New Artical";

  const [title, setTitle] = useState("");
  const [catagory, setCatagory] = useState("");
  const [Contant, setContant] = useState("");
  const [img, setImg] = useState("");

  // publish
  async function Publish() {
    const taskid = Date.now();
    console.log(taskid);
    await setDoc(doc(db, "Artical", taskid.toString()), {
      id: taskid,
      title: title,
      catagory: catagory,
      Contant: Contant,
      time: Date.now(),
      img: img,
      state: "Published",
    });
    setTitle("");
    setCatagory("");
    setContant("");
    setImg("");

    toast("Artical Publish successfully", {
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
    console.log(taskid);
    await setDoc(doc(db, "Artical", taskid.toString()), {
      id: taskid,
      title: title,
      catagory: catagory,
      Contant: Contant,
      time: Date.now(),
      img: img,
      state: "Draft",
    });
    setTitle("");
    setCatagory("");
    setContant("");
    setImg("");
    toast("User Saved successfully", {
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

  return (
    <div className="AddArticles">
      <div className="AddArticles-wrapper">
        <div className="AddAritcle-contant container">
          <HeaderOfAdd titleHeader={titleHeader} />

          {/* article-body */}
          <div className="article-body">
            <MobilSidebar />
            <Sidebar />
            {/* Add Artical */}
            <div className="add-artical-form">
              <div className="add-artical-header">
                <div className="Articlesss">
                  <h5>Add Article Details</h5>
                </div>

                <div className="publish">
                  <button
                    className="publish-btn"
                    onClick={() => {
                      Publish();
                    }}
                  >
                    Publish
                  </button>
                </div>
              </div>{" "}
              {/* end posted-artical-header */}
              {/* form */}
              <form>
                <div className="tittle-categroy">
                  <div className="Article-Title">
                    <label htmlFor="article-title">Article Title</label>
                    <input
                      id="article-title"
                      type="text"
                      value={title}
                      onChange={(eo) => {
                        setTitle(eo.target.value);
                      }}
                    />
                  </div>
                  <div className="Category">
                    <label htmlFor="category">Category</label>
                    <input
                      type="text"
                      id="category"
                      list="category-list"
                      value={catagory}
                      onChange={(eo) => {
                        setCatagory(eo.target.value);
                      }}
                    />
                    <datalist id="category-list">
                      <option value="Tech" />
                      <option value="Education" />
                      <option value="Business" />
                    </datalist>
                  </div>{" "}
                  {/* Category */}
                </div>{" "}
                {/* tittle-categroy */}
                <div className="Article-Contant">
                  <label htmlFor="Article-Contant">Article Contant</label>
                  <textarea
                    id="Article-Contant"
                    cols="30"
                    rows="10"
                    value={Contant}
                    onChange={(eo) => {
                      setContant(eo.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="Publishing-Date">
                  <label htmlFor="Publishing-Date">Publishing Date</label>
                  <input type="date" id="Publishing-Date" />
                </div>
                {/* uplode img */}
                <Uploadimg setImg={setImg} img={img} />
                {/* save or cancel */}
                <div className="save-cancel">
                  <button className="cancel">Cancel</button>
                  <button
                    className="save"
                    onClick={(e) => {
                      e.preventDefault();
                      Draft();
                    }}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>{" "}
            {/* end Add Artical form */}
          </div>
          {/* end article-body */}
        </div>{" "}
        {/* AddArticles-contant  */}
      </div>{" "}
      {/* AddArticles-wrapper  */}
    </div>
  );
};

export default AddArticles;
