import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({percent}) => {
  const percentage = percent;

  return (
    <div style={{ width: 150, height: 150 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: '#b59022',  
          trailColor: '#333333', 
          textSize: '24px',
          strokeLinecap: 'round', 
        })}
      />
    </div>
  );
};

export default CircularProgress;
