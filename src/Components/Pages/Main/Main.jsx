import { useEffect, useState } from "react";
import FeaturedNews from "./Featured News/FeaturedNews";
import "./Main.css"; // Removed the extra space
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../../services/Firebase/Config";
import Loading from "../../Loading/Loading";

const Main = ({ title }) => {
  const [lastNews, setLastNews] = useState([]);

  const articleQuery = query(
    collection(db, 'Artical'), 
    orderBy("id", "desc"), 
  );
  const [value, loading, error] = useCollection(articleQuery);

  useEffect(() => {
    if (value) {
      // Ensure value is defined before accessing docs
      const filteredNews = value.docs
        .slice(0, 3)
        .filter((item) => item.data().state === "Published");
      setLastNews(filteredNews);
    }
  }, [value]); 

  if (loading) {
    return <Loading/>;
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

        {/* Featured News */}
        <FeaturedNews lastNews={lastNews} />
      </div>
    </main>
  );
};

export default Main;
