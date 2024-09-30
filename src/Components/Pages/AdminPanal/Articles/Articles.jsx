import "./Articles.css";
import "../adminglobal.css";
import Sidebar from "../Sidebar/Sidebar";
import Pagination from "./Pagination/Pagination";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../../services/Firebase/Config";
import Loading from "../../../Loading/Loading";
import TimeFromNow from "../../../CustomHooks/UseTimer";
import { useNavigate } from "react-router-dom";
import UsehandleDelete from "../../../CustomHooks/Usedelete";
import { useState } from "react";
import MobilSidebar from "../Users/Mobile/MobilSidebar/MobilSidebar";
import ArticalcardMobile from "./Mobile/ArticalMobileCard";

const Articles = () => {
  const createArticle = "/createArticle";
  const Title = "CREATE NEW ARTICLE";
  const articleQuery = query(collection(db, "Artical"), orderBy("id", "desc"));

  const [value, loading, error] = useCollection(articleQuery);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("")

  const handleEdit = (article, id) => {
    navigate(`/updataArticle/${id}`, { state: { article } });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  // Filter articles
  const filteredArticles = value.docs.filter(
    (item) =>
      item.data().title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.data().catagory.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Articles">
      <div className="articles-wrapper">
        <div className="articles-contant container">
          <HeaderAdmin linkto={createArticle} Title={Title} />
          {/* end article-header */}
          {/* article-body */}
          <div className="article-body">
            <Sidebar />
            <MobilSidebar />
            <div className="posted-artical">
              <div className="posted-artical-header">
                <div className="Articlesss">
                  <h5>Articles</h5>
                </div>

                <div className="search-artical">
                  <div className="input-wrapper">
                    <button className="icon">
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 22L20 20"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      name="text"
                      className="input"
                      placeholder="search in articles.."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>{" "}
              {/* end posted artical header */}
              <div className="posted-artical-body">
                {filteredArticles.slice(0, 7).map((article) => (
                  <ArticalcardMobile
                    key={article.id}
                    userid={article.data().id}
                    title={article.data().title}
                    category={article.data().category}
                    state={article.data().state}
                    time={article.data().time}
                    data={article.data()}
                    handleEdit={handleEdit}
                  />
                ))}
                <table className="artical-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Date & Time</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredArticles.slice(0, 6).map((item) => (
                      <tr key={item.id}>
                        <td>{item.data().title}</td>
                        <td>{item.data().catagory}</td>
                        <td>
                          {item.data().state === "Published" ? (
                            <button className="published">
                              {item.data().state}
                            </button>
                          ) : (
                            <button className="draft">
                              {item.data().state}
                            </button>
                          )}
                        </td>
                        <td>{TimeFromNow(item.data().time)}</td>
                        <td className="action">
                          {/* edit btn */}

                          <button
                            onClick={() =>
                              handleEdit(item.data(), item.data().id)
                            }
                            className="editBtn"
                          >
                            <svg height="1em" viewBox="0 0 512 512">
                              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                            </svg>
                          </button>

                          {/* delete edit btn */}
                          <button
                            onClick={() => UsehandleDelete(item.id)}
                            className="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 69 14"
                              className="svgIcon bin-top"
                            >
                              <g clipPath="url(#clip0_35_24)">
                                <path
                                  fill="black"
                                  d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_35_24">
                                  <rect fill="white" height={14} width={69} />
                                </clipPath>
                              </defs>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 69 57"
                              className="svgIcon bin-bottom"
                            >
                              <g clipPath="url(#clip0_35_22)">
                                <path
                                  fill="black"
                                  d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_35_22">
                                  <rect fill="white" height={57} width={69} />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>{" "}
              {/* end posted artical body */}
            </div>{" "}
            {/* end posted-artical */}
          </div>{" "}
          {/* end articles-contant */}
        </div>{" "}
        {/* end article-body */}
        <Pagination />
      </div>{" "}
      {/* articles-wrapper */}
    </div>
  );
};

export default Articles;
