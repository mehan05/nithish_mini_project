import { useContext, useEffect } from "react";
import CourseCards from "../components/CourseCards/CourseCards";
import MyContext from "../../../context/context";
import axios from "axios";
import TraineeNavbar from "../components/TraineeNavbar/TraineeNavbar";
import { BASE_API } from "../../../apis/apis";

const MyCourses = () => {
  const { courses, setCourses } = useContext(MyContext);

  const api = axios.create({
    baseURL: BASE_API,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const getCourses = async () => {
    try {
      console.log("gert course");
      
      const response = await api.get("/get-course");
      setCourses(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("course",courses);
  
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="m-3">
      <div>
        <TraineeNavbar />
      </div>
      <div className="flex justify-start ml-3 mb-5">
        <h1 className="font-semibold text-2xl lg:text-3xl text-[#161439]">
          My Courses
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course, id) => (
          <CourseCards key={course?._id || id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
