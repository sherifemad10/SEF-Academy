import { useEffect, useState } from 'react';
import './ExamTimer.css';

const ExamTimer = ({timer}) => {
  const hour = 60 * 60
  const [time, setTime] = useState(timer * hour); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0)); // prevent negative time
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time in MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="ExamTimer">
      <p>{formatTime(time)}</p>

      <div className="User-levels-bar">
        <div className="User-levels-bar-fill">
          <div className="User-levels-bar-fill-inner" style={{ width: `${(time / 3600) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default ExamTimer;
