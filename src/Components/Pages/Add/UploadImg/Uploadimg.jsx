import "./Uploadimg.css";
import { SlCloudUpload } from "react-icons/sl";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Uploadimg = ({ setImg }) => {
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
  const [uploading, setUploading] = useState(false); // Track if upload is in progress

  const handleFileUpload = (file) => {
    if (!file) return;

    // Initialize Firebase Storage
    const storage = getStorage();
    const storageRef = ref(storage, `articles/${file.name}`); // You can adjust the folder structure

    // Start the upload
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress); // Update progress
        console.log("Upload is " + progress + "% done");
        setUploading(true);
      },
      (error) => {
        console.error("Upload failed", error);
        setUploading(false);
      },
      () => {
        // Get the download URL when upload is complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImg(downloadURL); // Pass the URL to the parent component
          setUploading(false);
        });
      }
    );
  };

  return (
    <div className="upload">
      <label htmlFor="file">Upload Cover Photo</label>

      <label htmlFor="file" className="labelFile">
        <span>
          <SlCloudUpload className="uploadimg" />
        </span>
        <div className="upload-details">
          <p className="drag">
            Drag & drop files or <span>Browse</span>
          </p>
          <p className="type">
            Supported formats: JPEG, PNG, GIF, PDF, PSD, AI, Word, PPT
          </p>
        </div>
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
      {uploading && (
        <div className="progress-bar">Uploading: {uploadProgress}%</div>
      )}
    </div>
  );
};

export default Uploadimg;
