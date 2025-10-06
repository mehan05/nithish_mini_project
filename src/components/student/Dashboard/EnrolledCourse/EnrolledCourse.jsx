import React, { useContext } from 'react';
import MyContext from '../../../../context/context';
import { Link } from 'react-router-dom';

const EnrolledCourse = () => {
  const { courses } = useContext(MyContext);

  return (
    <div className="max-h-[500px] overflow-y-auto">
      {courses.map((course, id) => (
        <div
          key={id}
          className="relative max-h-40 flex border-2 p-5 border-gray-400 rounded-xl mb-2"
        >
          <div className="flex w-full gap-5 shadow-xl">
            <div className="flex-shrink-0  p-2">
              <img
                src="/courseImage.png"  
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between w-2/3">
                    <div className='flex flex-col gap-4 '>

                        <h1 className="text-3xl font-semibold">{course.courseName}</h1>
                        <p>
                            <span className="text-gray-500 text-xl ">By</span>{' '}
                            {course.courseAuthor}
                        </p>
                    </div>
            </div>

            <div className="flex pr-10 items-center self-center">
              <Link to={`/course/${id}`} className="text-blue-500 hover:underline">
                More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnrolledCourse;
