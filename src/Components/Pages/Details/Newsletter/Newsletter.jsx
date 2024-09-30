import { useRef } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const newsLetter = useRef();

  const handleSubmit = () => {
    newsLetter.current.value = "";
  };

  return (
    <div className="Newsletter container">
      <h5>Subscribe to Our Newsletter</h5>
      <p>Be the first to get the latest news</p>
      <div className="Subscribe">
        <input type="email" placeholder="Your Email Address" ref={newsLetter} />
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
