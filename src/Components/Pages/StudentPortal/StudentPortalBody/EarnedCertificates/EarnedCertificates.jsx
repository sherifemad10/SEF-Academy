import { collection } from 'firebase/firestore';
import { db } from '../../../../services/Firebase/Config';
import './EarnedCertificates.css';
import Loading from '../../../../Loading/Loading';
import { useCollection } from 'react-firebase-hooks/firestore';

const EarnedCertificates = ({ firstName, secondName }) => {
  const [value, loading, error] = useCollection(collection(db, 'Users'));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h5>Error: {error.message}</h5>;
  }

  // Find the user document
  const userDoc = value?.docs.find((item) => {
    return (
      item.data().fristName === firstName &&
      item.data().SecondName === secondName // Ensure the case matches here
    );
  });

  // Get certificates from the found user document
  const certificates = userDoc ? [userDoc.data().Certificate] : [];
  const title = certificates.courses
  console.log(title)

  console.log(certificates)

  return (
    <div className='EarnedCertificates'>
      <h6>Earned Certificates</h6>

      {
         certificates.map((item,index)=>(
          <div className='EarnedCertificates-card' key={index}>
          <div className='EarnedCertificates-title'>
            <h6>{item.courses || 'No course title available'}</h6>

            <div className='EarnedCertificates-Instructor'>
              <p><span>Instructor:</span> {item.instructor || 'Sherif Emad'}</p>
              <p><span>Date Acquired:</span> {item.dateacquired || 'Not provided'}</p>
            </div>
          </div>

          <div className='EarnedCertificates-download'>
            <a href={item.img} download>
              <button>Download</button>
            </a>
          </div>
        </div>
        )) 
      }

    
    </div>
  );
}

export default EarnedCertificates;
