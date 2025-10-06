import React from 'react';

const CourseCard = ({ title }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-3 sm:w-[120px] md:w-[150px] lg:w-[200px] bg-white shadow-lg flex flex-col items-start">
      <div className="w-full flex justify-center">
        <img
          src="/courseprogress.png"
          alt="Course"
          className="w-[80px] h-auto mt-2"
        />
      </div>
      <div className="mt-4 flex items-center">
        <h3 className="text-lg font-semibold text-gray-800 font-poppins">{title}</h3>
      </div>
    </div>
  );
};

const ResumeCourse = () => {
  const courses = [
    { title: 'Laravel For Beginners' },
    { title: 'React Advanced Concepts' },
    { title: 'Node.js Essentials' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 w-full border-2 border-gray-200 bg-gray-50 rounded-lg">
      {courses.map((course, index) => (
        <CourseCard key={index} title={course.title} />
      ))}
    </div>
  );
};

export default ResumeCourse;
