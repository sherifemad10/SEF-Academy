import { useNavigate } from "react-router-dom";
import TimeFromNow from "../../../CustomHooks/UseTimer";
import "./FeaturedNews.css";
import { BsClockHistory } from "react-icons/bs";

const FeaturedNews = ({ lastNews }) => {
  console.log(lastNews);
  const navigate = useNavigate();

  return (
    <div className="FeaturedNews">
      <div className="FeaturedNews-Wrapper">
        {/* Featured News Title */}
        <div className="Featured-Tittle">
          <h3>Featured News</h3>
        </div>

        {/* Last ARTICAL */}
        <div className="Artical-wrapper">
          <h3 className="mobile-FeaturedNews">Featured News</h3>
          {/* Left - First Article */}
          <div className="last-Artical">
            {lastNews.length > 0 && (
              <div
                className="Aricle-Card"
                onClick={() => navigate(`/artical/${lastNews[0].id}`)}
                key={lastNews[0].id}
              >
                {/* Category */}
                <div className="catagory">
                  <p>{lastNews[0].data().catagory}</p>
                </div>

                {/* Title */}
                <div className="Title">
                  <p className="title-aricle">{lastNews[0].data().title}</p>
                  <p className="Time">
                    <BsClockHistory />
                    <span>{TimeFromNow(lastNews[0].data().time)}</span>
                  </p>
                </div>

                {/* Description */}
                <div className="Description">
                  <p>
                    {lastNews[0]
                      .data()
                      .Contant.split(" ")
                      .slice(0, 10)
                      .join(" ") +
                      " " +
                      "......."}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right - Remaining Articles */}
          <div className="last-Artical-right">
            {lastNews.slice(1).map((item) => (
              <div
                className="Aricle-Card"
                onClick={() => navigate(`/artical/${item.id}`)}
                key={item.id}
              >
                {/* Category */}
                <div className="catagory">
                  <p>{item.data().catagory}</p>
                </div>

                {/* Title */}
                <div className="Title">
                  <p className="title-aricle">{item.data().title}</p>
                  <p className="Time">
                    <BsClockHistory />
                    <span>{TimeFromNow(item.data().time)}</span>
                  </p>
                </div>

                {/* Description */}
                <div className="Description">
                  <p>
                    {item.data().Contant.split(" ").slice(0, 10).join(" ") +
                      " " +
                      "......."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
