import React from "react";

const Reminders = ({handleClosePopup}) => {
  return (
    <div
      className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 font-poppins"
      style={{
        border: "2px dashed #D1D5DB",
        borderRadius: "12px",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 leading-tight">Reminders</h2>
        <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl font-bold mr-2"
            >
              X
            </button>
      
      </div>

      {[
        {
          title: "UI UX",
          description: "Complete your test",
          time: "11:30–12:30",
          bgColor: "bg-blue-50",
          textColor: "text-blue-800",
          borderColor: "border-blue-200",
          imgSrc: "/uiuxclock.png",
          altText: "UI UX Clock Icon",
        },
        {
          title: "C++",
          description: "Complete your test",
          time: "9:00–10:00",
          bgColor: "bg-red-50",
          textColor: "text-red-800",
          borderColor: "border-red-200",
          imgSrc: "/c++image.png",
          altText: "C++ Icon",
        },
        {
          title: "UI UX for Pro",
          description: "Complete your full module",
          time: "11:00–12:00",
          bgColor: "bg-blue-50",
          textColor: "text-blue-800",
          borderColor: "border-blue-200",
          imgSrc: "/uiuxclock.png",
          altText: "UI UX Clock Icon",
        },
        {
          title: "C-Level",
          description: "Register Latest Course",
          time: "Register",
          bgColor: "bg-yellow-50",
          textColor: "text-yellow-800",
          borderColor: "border-yellow-200",
          imgSrc: "/cimage.png",
          altText: "C-Level Icon",
        },
      ].map((item, index) => (
        <div
          key={index}
          className={`flex items-center ${item.bgColor} p-4 rounded-lg border ${item.borderColor} mb-4 last:mb-0`}
        >
          <div className="mr-4 ml-6">
            <img
              src={item.imgSrc}
              alt={item.altText}
              className="w-8 h-8 sm:w-6 sm:h-6"
            />
          </div>
          <div className="flex-grow">
            <h3
              className={`font-semibold text-base leading-tight ${item.textColor}`}
            >
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-snug">
              {item.description}
            </p>
          </div>
          {item.time === "Register" ? (
            <button
              className={`font-bold text-sm ${item.textColor} hover:underline focus:outline-none`}
            >
              {item.time}
            </button>
          ) : (
            <span className={`font-bold text-sm ${item.textColor}`}>
              {item.time}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Reminders;
