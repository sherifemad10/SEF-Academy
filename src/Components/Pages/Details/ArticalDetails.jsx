import "./ArticalDetails.css";
import { useParams } from "react-router-dom";
import { BsClockHistory } from "react-icons/bs";
// import AllArtical from '../../services/AllArticals/AllArtical';
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../services/Firebase/Config";
import Loading from "../../Loading/Loading";
import Newsletter from "./Newsletter/Newsletter";
import timeFromNow from "../../CustomHooks/UseTimer";

const ArticleDetails = () => {
  const { id } = useParams();
  const [value, loading, error] = useDocument(doc(db, "Artical", id));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  // Find the selected article based on the ID from the URL
  const article = value.data();

  if (!value || !value.exists()) {
    return <h2>Article not found!</h2>;
  }

  return (
    <div className="ArticleDetails">
      <div className="ArticleDetails-Wrapper">
        <div className="ArticleDetails-contant container">
          <div className="ArticleDetails-header">
            <div className="ArticleDetails-category">
              <p className="category">{article.catagory}</p>
            </div>

            <div className="ArticleDetails-title-time">
              <div className="ArticleDetails-title">
                <h4>{article.title}</h4>
              </div>

              <div className="ArticleDetails-time">
                <BsClockHistory className="clock" />
                <span>{timeFromNow(article.time)}</span>
              </div>
            </div>
          </div>{" "}
          {/* ArticleDetails-header */}
          <div className="ArticleDetails-img">
            <img src={article.img} alt={article.title} />
          </div>
          <div className="ArticleDetails-details">
            <p>{article.Contant}</p>
          </div>
        </div>{" "}
        {/* ArticleDetails-contant */}
        <Newsletter />
      </div>
    </div>
  );
};

export default ArticleDetails;
