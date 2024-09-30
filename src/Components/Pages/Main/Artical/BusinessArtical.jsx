import './Artical.css';
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from '../../../services/Firebase/Config';
import TimeFromNow from '../../../CustomHooks/UseTimer';
import Loading from '../../../Loading/Loading';

const BusinessArtical = () => {
  const navigate = useNavigate();
  const [lastNews, setLastNews] = useState([]);
  const articleQuery = query(
    collection(db, 'Artical'), 
    orderBy("id", "desc"), 
  );

  const [value, loading, error] = useCollection(articleQuery);

  useEffect(() => {
    if (value) {
      // Filter for "Business" category and limit to 5
      const businessArticles = value.docs
        .filter(item => item.data().catagory === 'Business' && item.data().state === "Published")
        .slice(0, 5); 

      setLastNews(businessArticles);
    }
  }, [value]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  return (
    <div className='Articals'>
      <div className='Articals-Wrapper'>
        {/* Artical-Card */}
        {lastNews.map((item) => (
          <div 
            onClick={() => navigate(`/artical/${item.id}`)} 
            className='Artical-Card' 
            key={item.id}
          >
            {/* Image */}
            <div className='card-artical-img'>
              <img src={item.data().img} alt='Article' />
            </div>

            {/* Artical-Card Content */}
            <div className='Artical-Card-Contant'>
              {/* Category */}
              <div className='catagory'>
                <p>{item.data().catagory}</p>
              </div>

              {/* Title */}
              <div className='card-tittle'>
                <div className='Title'>
                  <h3>{item.data().title}</h3>
                </div>

                {/* Time */}
                <div className='Time'>
                  <BsClockHistory />
                  <span>{TimeFromNow(item.data().time)}</span>
                </div>
              </div>

              {/* Description */}
              <div className='Description'>
                <p>
                  {item.data().Contant?.split(' ').slice(0, 20).join(' ') + ' ......'}
                </p>
                <MdOutlineDoubleArrow className='read' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessArtical;
