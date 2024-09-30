import { SlCloudUpload } from "react-icons/sl";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const UploadCv = ({ setCV }) => {
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
  const [uploading, setUploading] = useState(false); // Track if upload is in progress

  const handleFileUpload = (file) => {
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      return;
    }

    // Initialize Firebase Storage
    const storage = getStorage();
    const storageRef = ref(storage, `cvs/${file.name}`); // Save in 'cvs' folder

    // Start the upload
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress); // Update progress
        setUploading(true);
      },
      (error) => {
        console.error("Upload failed", error);
        setUploading(false);
      },
      () => {
        // Get the download URL when the upload is complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setCV(downloadURL); // Pass the URL to the parent component
          setUploading(false);
        });
      }
    );
  };

  return (
    <div className="upload">
      <label htmlFor="file" aria-label="Upload CV">
        Upload CV
      </label>

      <label htmlFor="file" className="labelFile">
        <span>
          <SlCloudUpload className="uploadimg" />
        </span>
        <div className="upload-details">
          <p className="drag">
            Drag & drop files or <span>Browse</span>
          </p>
          <p className="type">Supported formats: PDF</p>
        </div>
      </label>

      <input
        className="inputt"
        name="file"
        id="file"
        type="file"
        accept=".pdf"
        onChange={(e) => handleFileUpload(e.target.files[0])}
        disabled={uploading} // Disable input while uploading
        aria-label="Select PDF file to upload"
      />

      {/* Show upload progress */}
      {uploading && (
        <div className="progress-bar">
          Uploading: {uploadProgress.toFixed(2)}%
        </div>
      )}
    </div>
  );
};

export default UploadCv;
