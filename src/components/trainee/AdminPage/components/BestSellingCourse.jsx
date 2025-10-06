import React from 'react';

const BestSellingCourse = () => {
  const courses = [
    {
      id: 1,
      image: '/courseImage.png', 
      title: 'Learn UX fundamentals',
      publishDate: 'publishes 3 months ago',
      price: '$1200',
      enrolled: '22K',
    },
    {
      id: 2,
      image: '/courseImage.png', 
      title: 'Learn UX fundamentals',
      publishDate: 'publishes 3 months ago',
      price: '$1200',
      enrolled: '22K',
    },
    {
      id: 3,
      image: '/courseImage.png', 
      title: 'Learn UX fundamentals',
      publishDate: 'publishes 3 months ago',
      price: '$1200',
      enrolled: '22K',
    },
  ];

  return (
    <div className="max-w-lg sm:max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Best Selling Course</h2>
        <button className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm">All</button>
      </div>
      <div className="flex justify-end gap-12 sm:gap-20 text-gray-500 text-sm mb-2 px-6">
        <span>Total Sales</span>
        <span>Enrolled</span>
      </div>
      {courses.map((course) => (
        <div key={course.id} className="flex flex-col sm:flex-row items-center py-4 border-b border-gray-200">
          <img
            src={course.image}
            alt={course.title}
            className="w-20 h-20 rounded-lg object-contain mr-4 sm:mr-6"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
            <p className="text-gray-500 text-sm flex items-center">
              {course.publishDate}
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-lg font-bold text-gray-900">{course.price}</p>
            <p className="text-gray-500 text-sm flex items-center justify-center sm:justify-end">
              <span className="material-icons text-base mr-1">person</span>
              {course.enrolled}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellingCourse;
