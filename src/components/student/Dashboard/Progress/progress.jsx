import React from "react";

const progressData = [
  { icon: "/progressimage1.png", title: "10", subtitle: "Course finished" },
  { icon: "/progressimage2.png", title: "56%", subtitle: "Average score" },
  { icon: "/progressimage3.png", title: "Gold", subtitle: "Achievements" },
  { icon: "/progressimage4.png", title: "80 Hours", subtitle: "Time spent" },
];

const Progress = () => {
  return (
    <div className="flex flex-wrap justify-around gap-6 p-6 bg-gray-50 font-poppins">
      {progressData.map((item, index) => (
        <ProgressCard key={index} data={item} />
      ))}
    </div>
  );
};

const ProgressCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 w-72 hover:scale-105 transition-transform duration-200">
      <img src={data.icon} alt={data.subtitle} className="w-24 h-24 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800">{data.title}</h2>
      <p className="text-sm text-gray-500 mt-2">{data.subtitle}</p>
    </div>
  );
};

export default Progress;
