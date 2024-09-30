import './Artical.css';
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from '../../../services/Firebase/Config';
import timeFromNow from '../../../CustomHooks/UseTimer'
import Loading from '../../../Loading/Loading';

const Artical = () => {
  const navigate = useNavigate();

  const articleQuery = query(
    collection(db, 'Artical'), 
    orderBy("id", "desc"), 
  );

  const [value, loading, error] = useCollection(articleQuery);


  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  const alldata = value.docs.filter((item) => item.data().state === "Published")




  return (
    <div className='Articals'>
      <div className='Articals-Wrapper'>
        {/* Artical-Card */}
        {value && alldata.slice(0,5).map((item) => {
          const data = item.data();
          return (
            <div
              onClick={() => navigate(`/artical/${data.id}`)}
              className='Artical-Card'
              key={data.id}
            >
              {/* img */}
              <div className='card-artical-img'>
                <img src={data.img} alt='Article' />
                </div>

              {/* Artical-Card Content */}
              <div className='Artical-Card-Contant'>
                {/* Category */}
                <div className='catagory'>
                  <p>{data.catagory}</p>
                </div>

                {/* Title */}
                <div className='card-tittle'>
                  <div className='Title'>
                    <h3>{data.title}</h3>
                  </div>

                  {/* Time */}
                  <div className='Time'>
                    <BsClockHistory />
                    <span>{timeFromNow(data.time)}</span>
                  </div>
                </div>

                {/* Description */}
                <div className='Description'>
                  <p>{data.Contant.split(' ').slice(0,20).join(' ') +' '+ '.......'}</p>
                  <MdOutlineDoubleArrow className='read' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Artical;
