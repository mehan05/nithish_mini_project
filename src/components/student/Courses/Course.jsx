import React, { useContext, useEffect } from "react";
import axios from "axios";
import MyContext from "../../../context/context";
import StudentNavBar from "../components/SrudentNavbar/StudentNavBar";
import CourseCards from "../../trainee/components/CourseCards/CourseCards";
import FiltersCard from "../components/FiltersCard/FiltersCard";
import LanguageFilterCard from "../components/languageFilterCard/LanguageFilterCard";
import PainFilterCard from "../components/PaidFilterCard/PainFilterCard";
import { BASE_API } from "../../../apis/apis";

const Course = () => {
  const {
    courses,
    setCourses,
    searchQuery,
    SelectedCategoryContext,
    languageContext,
    PaidContext,
  } = useContext(MyContext);

  useEffect(() => {
    const api = axios.create({
      baseURL: BASE_API,
      headers: { "Content-Type": "application/json" },
    });
    const getCourses = async () => {
      try {
        const response = await api.get("/get-course");
        setCourses(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourses();
  }, [setCourses]);

  const filteredCourses = courses.filter((course) => {
    const name = (course.title || "").toLowerCase();
    const query = (searchQuery || "").toLowerCase();
    const courseNameMatches = name.includes(query);
    return courseNameMatches;
  });

  return (
    <div className="m-2">
      <div className=" mb-8">
        <StudentNavBar />
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-4 items-center sticky top-4 h-fit">
          {/* <div className="pl-5">
            <FiltersCard />
          </div>
          <div className="pl-5">
            <LanguageFilterCard />
          </div>
          <div className="pl-5">
            <PainFilterCard />
          </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow mr-7 ml-7 max-h-24">
          {filteredCourses.map((course, id) => (
            <CourseCards key={id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
