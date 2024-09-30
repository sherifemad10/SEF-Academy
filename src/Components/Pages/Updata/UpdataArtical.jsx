import { useEffect, useState } from "react";
import "../Add/AddAritcle/AddAritcle.css";
import { doc, updateDoc } from "firebase/firestore";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../AdminPanal/Sidebar/Sidebar";
import Uploadimg from "../Add/UploadImg/Uploadimg";
import HeaderOfAdd from "../Add/HeaderofAdd/HeaderOfAdd";
import { db } from "../../services/Firebase/Config";
import { Bounce, toast } from "react-toastify";

const UpdataArticles = () => {
  const location = useLocation();
  const articleToEdit = location.state?.article || "null";
  const { id } = useParams();


  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [catagory, setCatagory] = useState("");
  const [Contant, setContant] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    if (articleToEdit) {
      setTitle(articleToEdit.title);
      setCatagory(articleToEdit.catagory);
      setContant(articleToEdit.Contant);
      setImg(articleToEdit.img);
    }
  }, [articleToEdit]);

  const editt = () => {
    if (articleToEdit) {
      const dataedit = doc(db, "Artical", id);
      updateDoc(dataedit, {
        title: title,
        catagory: catagory,
        Contant: Contant,
        img: img,
      });

      navigate("/admin");
      toast("Artical Updata successfully", {
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

  return (
    <div className="AddArticles">
      <div className="AddArticles-wrapper">
        <div className="AddAritcle-contant container">
          <HeaderOfAdd />

          {/* article-body */}
          <div className="article-body">
            <Sidebar />
            {/* Add Artical */}
            <div className="add-artical-form">
              <div className="add-artical-header">
                <div className="Articlesss">
                  <h5>updata Article Details</h5>
                </div>

                <div className="publish">
                  <button className="publish-btn" onClick={editt}>
                    updata
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

export default UpdataArticles;
