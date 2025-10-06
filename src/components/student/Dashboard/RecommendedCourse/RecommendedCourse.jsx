import { Link } from "react-router-dom";

const CourseCard = ({ title }) => {
    return (
      <div className=" scale-inherit border-2 border-gray-300 rounded-lg p-3  sm:w-[100px] md:w-[150px] lg:w-[200px] bg-white shadow-lg flex flex-col items-start">
        <div className="w-full flex justify-center">
          <img
            src="/courseprogress.png"
            alt="Course"
            className="w-[120px] h-auto mt-2"
          />
        </div>
        <div className="mt-4 flex items-center">
          <h3 className="text-lg font-semibold text-gray-800 font-poppins">{title}</h3>
          <Link  className="ml-2 text-gray-600 text-smfont-bold">More </Link>
        </div>
      </div>
    );
  };
  
  const RecommendedCourse = () => {
    const courses = [
      {
        title: "Laravel For Beginners",
      },
      {
        title: "Laravel For Beginners",
      },
      {
        title: "Laravel For Beginners",
      },
    ];
  
    return (
      <div className="flex flex-wrap justify-start gap-6 p-6">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} />
        ))}
      </div>
    );
  };
  
  export default RecommendedCourse;
  