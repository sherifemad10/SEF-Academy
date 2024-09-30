import { useContext, useState } from 'react'
import ProfileAboutYou from './ProfileAboutYou/ProfileAboutYou'
import ProfileSidebar from './ProfileSidebar/ProfileSidebar'
import './Viewprofile.css'
import ViewprofileMain from './ViewprofileMain/ViewprofileMain'
import { Bounce, toast } from 'react-toastify';
import DataContext from '../../Context/Context'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../services/Firebase/Config'
import Loading from '../../Loading/Loading'


const Viewprofile = () => {
  const { userdata } = useContext(DataContext);
  console.log(userdata)
  // const studentName = userdata.fristName + " " + userdata.SecondName;
  const [name, setName] = useState(userdata.fristName + " " + userdata.SecondName || '');
  // const [name, setName] = useState('Sherif Emad');

  const [education, setEducation] = useState('Computer science, International Islamic University');
  const [age, setAge] = useState('19');
  const [nationality, setNationality] = useState('Egyptian');
  const [country, setCountry] = useState('Egypt');
  const [city, setCity] = useState('Quwesna');
  const [university, setUniversity] = useState('International Islamic University');
  const [major, setMajor] = useState('Computer science');
  const [graduation, setGraduation] = useState('2026');
  const [email, setEmail] = useState('4Hqg6@example.com');
  const [phone, setPhone] = useState('011566477666');
  const [about, setAbout] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quis alias, voluptate quaerat nihil ab iure aperiam cupiditate nobis vitae corporis officia eligendi sequi error, eius praesentium amet rem obcaecati!'
  );

  const [edit, setEdit] = useState(false)





  const handelEdit = () => setEdit(true);

  // const [value, loading, error] = useCollection(collection(db, 'Users'));

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <h5>Error: {error.message}</h5>;

  // }


  // const updateData = async () => {
  //   const dataEditRef = doc(db, 'Users', userdata.id);
  //   await updateDoc(dataEditRef, {
  //     firstName: userdata.firstName,
  //     secondName: userdata.secondName,
  //     name: userdata.firstName + ' ' + userdata.secondName,
  //     education: education,
  //     age: age,
  //     nationality: nationality,
  //     country: country,
  //     city: city,
  //     university: university,
  //     major: major,
  //     graduation: graduation,
  //     email: email,
  //     phone: phone,
  //     about: about,
  //     stated: 'Published',
  //   });
  // };

  const saveEdit = () => {
    // updateData();
    setEdit(false);
    toast.success('Profile Updated', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };
  


  


  return (
    <div className='Viewprofile'>

<div className='StudentPortal-wrapper'>

<div className='StudentPortal-contant container'>

  <div className='studentPortal-top-header'>

    <p className='student-portal'>Profile</p>
    <p>6th June 2024</p>
  </div>
  {/* studentPortal-top-header */}

  <ViewprofileMain name={name} setName={setName} education={education} setEducation={setEducation} handelEdit={handelEdit} saveEdit={saveEdit} edit={edit}/>

  <div className='viewProfile-body'>
    <ProfileSidebar age={age} setAge={setAge} nationality={nationality} setNationality={setNationality} city={city} setCity={setCity} country={country} setCountry={setCountry} university={university} setUniversity={setUniversity} major={major} setMajor={setMajor} graduation={graduation} setGraduation={setGraduation} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} edit={edit} userdata={userdata}/>

    <ProfileAboutYou about={about} setAbout={setAbout} edit={edit}/>

  </div>





</div>   {/* StudentPortal-contant */}

</div>


    </div>
  )
}

export default Viewprofile