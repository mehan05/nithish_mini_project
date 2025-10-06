import React, { useEffect, useState } from "react";
import TraineeNavbar from "../../trainee/components/TraineeNavbar/TraineeNavbar";
import { Link, useLocation } from "react-router-dom";
import StudentNavBar from "../../student/components/SrudentNavbar/StudentNavBar";
import Reminders from "../../smallcomponents/Remainders";
import FeedBackCard from "../../smallcomponents/FeedBackCard";

function Landing() {
  const [toggle, setToggle] = useState(false);
  const [feedbackToogle, setFeedbackToogle] = useState(false);
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const[expand,setExpand]=useState(false);
  const handleExpand = (status) => {
    setExpand(status);
  };  console.log("from home",expand);
  useEffect(() => {
    const isPopupShown = localStorage.getItem("popup");
    if (!isPopupShown) {
      setToggle(true);
      localStorage.setItem("popup", "true");
    }
    const handleUnload = () => {
      localStorage.removeItem("popup");
    };
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClosePopup = () => {
    setToggle(false);
  };

  return (
    <div>

      <div>
        {location.pathname.startsWith("/trainee") ? (
          <TraineeNavbar />
        ) : (
          <StudentNavBar />
        )}

        <div className="w-full relative bg-violet-50 px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-20 xl:py-32 flex flex-col md:flex-row items-center justify-between font-poppins overflow-hidden">
          <div className="md:w-1/2 text-left z-[1]">
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-800">
              Learn Without{" "}
              <span className="bg-amber-500  text-black px-5 rounded-2xl">
                Limits
              </span>
            </h1>
            <div className="text-container mt-4">
              <h1 className="text-2xl md:text-5xl font-semibold text-gray-800 mt-4">
                
              </h1>
              <p className="text-sm md:text-xl font-mmm text-gray-500 mt-4">
                Every teaching and learning journey is unique.
              </p>
              <p className="text-sm md:text-xl font-mmm text-gray-500 mt-2">
                We'll help guide your way.
              </p>
            </div>
            <Link to="/trainee/mycourses" className="bg-violet-500 hover:bg-violet-700  text-white font-semibold py-3 px-6 rounded-full mt-6 flex items-center justify-center shadow-lg w-full sm:w-[250px]">
              Start Learning
              <img src="/arrow.png" alt="Arrow" className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <img
              src="/landingimage.png"
              alt="Learn Without Limits"
              className="mt-10 md:mt-0 w-64 sm:w-80 md:w-96 h-auto rounded-full md:absolute md:right-10 lg:right-20 md:top-20 object-cover"
            />
        </div>

        {toggle && location.pathname.startsWith("/student") && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative">
            
              <div>
                <Reminders handleClosePopup={handleClosePopup} />
              </div>
            </div>
          </div>
        )}
        
        <div className="fixed right-4 bottom-6 lg:right-5 lg:top-[650px] lg:bottom-auto z-10">
          <button onClick={() => setFeedbackToogle(!feedbackToogle)}>
            <img src="/feedback-icon.png" alt="feedback" className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20" />
          </button>
        </div>
        <div className="w-full text-center py-10">
          <p className="text-2xl md:text-4xl font-semibold text-gray-700">
            Top Category
          </p>
        </div>

        {/* Image Grid Section */}
        <div className="w-full flex justify-center py-8 sm:py-10 px-4">
          <div className="rounded-3xl sm:rounded-full bg-gray-100 p-4 sm:p-6 md:p-10 flex justify-center items-center w-full max-w-6xl">
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10">
              {[
                {
                  title: "Graphic Design",
                  count: 22,
                  image: "/graphicdesign.png",
                },
                {
                  title: "Artificial Intelligence",
                  count: 41,
                  image: "/artificialintelligence.png",
                },
                { title: "Development", count: 29, image: "/development.png" },
                { title: "Marketing", count: 31, image: "/marketing.png" },
                { title: "UI & UX", count: 23, image: "/uiux.png" },
                { title: "Datascience", count: 19, image: "/datascience.png" },
              ].map((category, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                    />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-poppins text-gray-700 text-center">
                    {category.title}
                  </p>
                  <p className="text-xs sm:text-sm font-poppins text-gray-500">
                    ({category.count})
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full bg-white px-4 sm:px-6 md:px-8 py-8 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between font-poppins">
          <div className="md:w-1/2">
            <img
              src="/landingimage2.png"
              alt="Courses Available"
              className="object-cover w-full md:w-3/4 h-auto mx-auto"
            />
          </div>
          <div className="md:w-1/2 text-left pl-0 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
              Thousands Of Top{" "}
              <span className="bg-amber-500 text-white rounded-full px-5">Courses</span> <br />{" "}
              Now In One Place
            </h1>
            <ul className="text-sm md:text-lg font-semibold text-gray-500 mt-6 space-y-2 md:space-y-3">
              <li>🔹 Flexible Course Plan</li>
              <li>🔹 Access Your Class Anywhere</li>
              <li>🔹 Expert Instructors</li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full bg-indigo-900 text-white py-12 sm:py-16 md:py-20 flex justify-center rounded-[20px] px-4">
          <div className="flex flex-col md:flex-row justify-between md:justify-around items-stretch md:items-center w-full max-w-6xl px-0 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-6 rounded-lg shadow-md bg-indigo-900 gap-8 md:gap-0">
            {[
              { number: "45K+", label: "Active Students" },
              { number: "24K+", label: "Faculty Courses" },
              { number: "14K+", label: "Best Professors" },
              { number: "42K+", label: "Award Achieved" },
            ].map((stat, index) => (
              <div key={index} className="flex md:flex-row flex-col items-center md:items-center md:gap-x-16">
                <div className="text-center px-2 sm:px-4 md:px-6">
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold">{stat.number}</p>
                  <p className="text-sm sm:text-base md:text-lg mt-1">{stat.label}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block h-16 w-px bg-white"></div>
                )}
                {index < 3 && (
                  <div className="md:hidden w-24 h-px bg-white my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Explore Our Best Courses Section */}
        <div className="w-full text-center py-12 sm:py-16 md:py-20 font-poppins px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
            Explore Our Best Courses
          </h2>
          <div className="flex justify-center mt-6">
            <ul className="flex overflow-x-auto whitespace-nowrap no-scrollbar gap-6 sm:gap-8 text-gray-500 text-base sm:text-lg font-semibold px-2">
              {["All Courses", "Design", "Business", "Development"].map(
                (category) => (
                  <li
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`cursor-pointer ${
                      selectedCategory === category
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "hover:text-blue-600"
                    }`}
                  >
                    {category}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex flex-wrap justify-center mt-10 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                title: "Laravel",
                category: "Development",
                level: "Expert",
                price: "$15.00",
                reviews: "4.8 Reviews",
                image: "/laravel.png",
              },
              {
                title: "The Complete Graphic Design for Beginners",
                category: "Design",
                level: "Beginner",
                price: "$19.00",
                reviews: "4.5 Reviews",
                image: "/graphic.png",
              },
              {
                title: "Learning Digital Marketing on Facebook",
                category: "Marketing",
                level: "Pro Expert",
                price: "$24.00",
                reviews: "4.3 Reviews",
                image: "/marketingl.png",
              },
              {
                title: "Financial Analyst Training & Investing Course",
                category: "Business",
                level: "Crush Course",
                price: "$12.00",
                reviews: "4.8 Reviews",
                image: "/finance.png",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="w-72 sm:w-80 bg-white shadow-lg rounded-lg overflow-hidden relative flex flex-col"
              >
                <div className=" w-full p-2">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full rounded-xl overflow-hidden h-48 object-cover"
                />
                  </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gray-200 px-4 py-2 rounded-full w-max">
                        <span className="text-sm font-semibold text-gray-800">
                          {course.category}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-yellow-500">
                        <span className="text-xl">⭐</span>
                        <span className="ml-2 text-black">{course.reviews}</span>
                      </div>
                    </div>
                    <div className=" w-full  text-left">
                      <div className="text-lg font-bold text-gray-800">
                        {course.title}
                      </div>
                      <p className="text-sm text-gray-500 mt-1 mb-4">
                        By David Millar
                      </p>
                    </div>
                    <div className="flex w-full justify-between items-center  ">
                        <span className="  bg-violet-500 px-4 text-white p-2 rounded-xl ">Enroll now</span>
                        <span className=" font-boo text-amber-500">{course.price}</span>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        </div >
        <div className="z-50">
          {expand ? (
            <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50`}>
              {feedbackToogle && <FeedBackCard handleExpand={handleExpand} />}
            </div>
          ) : (
            <div className="fixed right-4 bottom-24 lg:left-[1130px] lg:top-60 lg:right-auto lg:bottom-auto z-10 transition-all transform ease-in-out duration-1000">
              {feedbackToogle && <FeedBackCard handleExpand={handleExpand} />}
            </div>
          )}
        </div>
      </div>
  );
}

export default Landing;
