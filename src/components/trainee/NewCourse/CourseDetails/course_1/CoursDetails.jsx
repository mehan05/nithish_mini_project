import React, { useContext } from "react";
import ProgressBar from "../../components/Progressbar";
import { Link } from "react-router-dom";
import MyContext from "../../../../../context/context";

const CoursDetails = () => {
  const {courses} = useContext(MyContext);
  console.log(courses);
  return (
    <div className="px-4 md:px-8 lg:px-16 scale-95">
      <div className="mb-5">
        <ProgressBar precentage={30} />
      </div>
      <div className="flex flex-col items-start mb-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Course</h1>
        <span className="text-gray-400">Add your course here...</span>
      </div>
      <form className="w-full max-w-4xl mx-auto">
        <div className="mb-6 flex flex-col gap-2 items-start">
          <label
            htmlFor="small-input"
            className="text-sm font-medium text-gray-900"
          >
            Title of the Course
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-sm focus:ring-violet-500 focus:border-violet-500"
          />
        </div>
        <div className="mb-6 flex flex-col items-start">
          <label
            htmlFor="course-type"
            className="text-sm font-medium text-gray-900"
          >
             Type of the Course
          </label>
          <select
            name="role"
            id="course-type"
            className="shadow-sm border border-gray-300 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            required  
          >
            {
              courses.map((course, index) => (
                  <option  key={index}  value="trainee">{course.courseType}</option>
              ))
            }
          </select>
        </div>
        <div className="mb-6 flex flex-col gap-2 items-start">
          <label
            htmlFor="base-input"
            className="text-sm font-medium text-gray-900"
          >
            Trainee Name
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-6 flex flex-col gap-2 items-start">
          <label
            htmlFor="large-input"
            className="text-sm font-medium text-gray-900"
          >
            Description of the course
          </label>
          <textarea
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white text-sm focus:ring-violet-500 focus:border-violet-500"
            rows="4"
          />
        </div>
        <div className="mb-8 flex flex-col gap-4 items-start hover:transition hover:duration-200 hover:scale-[1.01]">
          <p className="text-sm font-medium text-gray-900">Thumbnail Picture</p>
          <label htmlFor="image-upload" className="w-full cursor-pointer">
            <div className="w-full border-4  flex-col border-dashed rounded-lg border-violet-400 p-8 md:p-16 flex justify-center items-center">
              <img
                src="/galleryimg.png"
                alt="Upload"
                className="max-h-24 md:max-h-32 lg:max-h-48"
              />
              <p className="font-poppins text-semibold">Upload Your Image Here </p>
            </div>
          </label>
          <input type="file" id="image-upload" className="hidden" />
        </div>
        <Link
          to="modules"
          className="fixed bottom-4 right-4 bg-[#5072F5] px-4 py-2 text-center text-white rounded-lg font-semibold w-[150px] hover:bg-white hover:border-2 hover:border-violet-500 hover:text-violet-500 transition duration-300"
        >
          Next
        </Link>
      </form>
    </div>
  );
};

export default CoursDetails;
