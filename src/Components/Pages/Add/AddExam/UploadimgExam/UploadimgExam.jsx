import './UploadimgExam.css';
import { SlCloudUpload } from "react-icons/sl";
import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const UploadimgExam = ({ setQuestions, index,handleInputChange}) => {
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
  const [uploading, setUploading] = useState(false);       // Track if upload is in progress

  const handleFileUpload = (file) => {
    if (!file) return;

    // Initialize Firebase Storage
    const storage = getStorage();
    const storageRef = ref(storage, `articles/${file.name}`); // You can adjust the folder structure
    
    // Start the upload
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress); // Update progress
        console.log('Upload is ' + progress + '% done');
        setUploading(true);
      },
      (error) => {
        console.error('Upload failed', error);
        setUploading(false);
      },
      () => {
        // Get the download URL when upload is complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          handleInputChange(index,"img",downloadURL); // Pass the URL to the parent component
          setUploading(false);
        });
      }
    );
  };

  return (
    <div className='UploadimgExam'>
      <label htmlFor="file" className="uploadimgExam">
        <span>
          <SlCloudUpload className='uploadimg-icon' />
        </span>
      </label>
      <input
        className="inputt"
        name="text"
        id="file"
        type="file"
        accept="image/*"
        onChange={(e) => handleFileUpload(e.target.files[0])}
      />


      {/* Show upload progress */}
      {uploading && <div className="progress-bar">Uploading: {uploadProgress}%</div>}
    </div>
  );
};

export default UploadimgExam;
