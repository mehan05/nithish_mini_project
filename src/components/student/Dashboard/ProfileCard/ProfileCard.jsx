import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 w-full max-w-full  min-h-full mx-auto">
      <div className="flex-shrink-0">
        <img
          src="/avatar.png"
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col items-center md:text-left md:ml-6 mt-4 md:mt-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          Shakshi Sham S
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">shakshisham05129@gmail.com</p>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">10 classes enrolled</p>
        <button className="mt-4 px-4 sm:px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Edit profile
        </button>
      </div>
      <div className="hidden md:block">
        <img
          src="/illustration.jpg"
          alt="Illustration"
          className="w-full sm:w-36 md:w-50 h-full"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
