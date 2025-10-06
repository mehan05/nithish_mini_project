import React, { useState } from "react";

const FeedBackCard = ({ handleExpand }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [suggestion, setSuggestion] = useState("");
  const [show, setShow] = useState(false);

  const tags = ["Payment Issue", "Refund Policy", "Surprise me"];

  const toggleFullscreen = () => {
    setShow(!show);
    handleExpand(!show); 
  };

  return (
    <div
      className={`fixed top-0 left-0 ${
        show ? "w-screen h-screen p-6 bg-gray-800" : "w-80 h-auto p-4"
      } bg-white shadow-md rounded-lg border-2 border-dashed border-blue-200 font-poppins transition-all duration-500 z-50`}
    >
      <div className="flex justify-end">
        <button onClick={toggleFullscreen} className=" font-bold">
          {show ? <img src="/condense-white.png" className="w-8 h-8"/> : <img src="/expand.png" className="w-8 h-8"/>}
        </button>
      </div>
      <h2 className={`"text-center text-lg font-semibold mb-4" ${show && "text-white text-center text-lg font-semibold mb-4 "} `}>
        Chat With FuelOn Chatbot
      </h2>

      <div className={`flex flex-col ${show ? "h-full" : ""}`}>

          <div className={`${
            show ? "flex-grow flex flex-col justify-end" : "flex flex-col"
          }`}>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setSelectedTag(index)}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${
                selectedTag === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

            <textarea
              className="w-full pt-2 pl-2 border-2 border-gray-600 rounded-lg mb-4 text-sm text-gray-700   resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="May I Help You"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
            />

            <button className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Send
            </button>
          </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
