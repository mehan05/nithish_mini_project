import React, { useContext } from "react";
import StudentNavBar from "../components/SrudentNavbar/StudentNavBar";
import CourseCards from "../../trainee/components/CourseCards/CourseCards";
import MyContext from "../../../context/context";

const TestPage = () => {
  const { courses } = useContext(MyContext);

  return (
    <div className="m-2">
      <div className="mb-8">
        <StudentNavBar />
      </div>

      <div className="px-5">
        <h1 className="text-[#161439] text-2xl font-bold">Access Yourself</h1>
        <p className="text-gray-700 mb-5">Complete the test now</p>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {courses.map((course, id) => (
              <CourseCards key={id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
