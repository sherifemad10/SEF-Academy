import PreviousExamsCard from "./Card/PreviousExamsCard";

const PreviousExams = () => {
  const dataCard1 = [
    {
      title: "System analysis and design",
      instructor: "Sara Ahmed",
      level: "LEV.1",
      NA: "80/100",
      date: "Monday, June 5th",
      time: "12:30 PM",
    },
    {
      title: "Introduction to Web Development",
      instructor: "Mohamed Emad",
      level: "LEV.1",
      NA: "99/100",
      date: "Saturday, June 3rd",
      time: "12:30 PM",
    },
    {
      title: "Introduction to Programming",
      instructor: "John Doe",
      level: "LEV.2",
      NA: "85/100",
      date: "Wednesday, June 7th",
      time: "12:30 PM",
    },
  ];

  return (
    <div className="UpcomingExams">
      <h6>Previous Exams</h6>
      {dataCard1.map((item, index) => {
        return (
          <PreviousExamsCard
            key={index}
            title={item.title}
            instructor={item.instructor}
            level={item.level}
            NA={item.NA}
            date={item.date}
            time={item.time}
          />
        );
      })}
    </div>
  );
};

export default PreviousExams;
