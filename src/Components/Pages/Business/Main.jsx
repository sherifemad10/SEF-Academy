import { useEffect, useState } from "react";
import FeaturedNews from "../Main/Featured News/FeaturedNews";
import "../Main/Main.css";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../services/Firebase/Config";
import Loading from "../../Loading/Loading";

const Main = ({ title }) => {
  const [lastNews, setLastNews] = useState([]);
  const [value, loading, error] = useCollection(collection(db, "Artical"));

  useEffect(() => {
    if (value) {
      const filteredNews = value.docs
        .filter(
          (item) =>
            item.data().catagory === "Business" &&
            item.data().state === "Published"
        )
        .slice(0, 3);
      setLastNews(filteredNews);
    }
  }, [value]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  return (
    <main className="Main">
      <div className="Main-Wrapper">
        {/* MainTittle */}
        <div className="MainTittle">
          <h2>{title}</h2>
        </div>

        {/* Featured News  */}
        <FeaturedNews lastNews={lastNews} />
      </div>
    </main>
  );
};

export default Main;
