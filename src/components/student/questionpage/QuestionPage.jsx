import React, { useState, useEffect } from "react";
import Navbar from '../../common/navbar/Navbar';
import StudentNavBar from "../components/SrudentNavbar/StudentNavBar";
import { Link } from "react-router-dom";

const QuestionPage = () => {
  const [questions] = useState([
    { id: 1, question: "What is the default database driver used in Laravel?", options: ["MySQL", "SQLite", "PostgreSQL", "MongoDB"] },
    { id: 2, question: "Which of the following is a PHP framework?", options: ["React", "Angular", "Laravel", "Vue"] },
    { id: 3, question: "What does MVC stand for?", options: ["Model View Controller", "Model View Component", "Model Version Control", "None"] },
    { id: 4, question: "Which is used for database migrations in Laravel?", options: ["Seeds", "Migrations", "Eloquent", "Blueprint"] },
    { id: 5, question: "Which command is used to start a Laravel server?", options: ["php artisan serve", "laravel serve", "npm start", "composer start"] },
    { id: 6, question: "What is used for routing in Laravel?", options: ["Controllers", "Middleware", "Routes", "Models"] },
    { id: 7, question: "What is the templating engine in Laravel?", options: ["Blade", "Twig", "Smarty", "Handlebars"] },
    { id: 8, question: "Which method is used to retrieve all records in Eloquent?", options: ["find()", "getAll()", "all()", "fetchAll()"] },
    { id: 9, question: "What is the primary key of a model in Laravel by default?", options: ["id", "uuid", "key", "none"] },
    { id: 10, question: "How can you access environment variables in Laravel?", options: ["env()", "get_env()", "getEnv()", "App::env()"] },
    { id: 11, question: "Which of these is used for testing in Laravel?", options: ["Jest", "PHPUnit", "Mocha", "Chai"] },
    { id: 12, question: "What command creates a new controller in Laravel?", options: ["php artisan make:controller", "php make controller", "create:controller", "make:controller"] },
    { id: 13, question: "Which directory holds views in Laravel?", options: ["/resources/views", "/app/views", "/config/views", "/src/views"] },
    { id: 14, question: "What command is used to clear cache in Laravel?", options: ["php artisan cache:clear", "php artisan clear", "php clear cache", "cache:clear"] },
    { id: 15, question: "Which of the following is a Laravel ORM?", options: ["Blueprint", "Eloquent", "Seeder", "Migration"] },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const initialTime = localStorage.getItem("timeLeft") || 15 * 60; 
  const [timeLeft, setTimeLeft] = useState(Number(initialTime));
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          localStorage.setItem("timeLeft", prev - 1); 
          return prev - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    return () => {
      localStorage.removeItem("timeLeft");
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleNavigation = (direction) => {
    const newIndex = currentQuestion + direction;
    if (newIndex >= 0 && newIndex < questions.length) {
      setCurrentQuestion(newIndex);
      setSelectedOption(null);
    }
  };

  return (
    <div>
        <StudentNavBar />
      <div className="bg-white  flex flex-col items-center justify-center font-sans  mr-5 ml-5 " style={{ fontFamily: 'Poppins, sans-serif' }}>

        <header className="w-full  px-6 py-4 flex flex-col items-start text-gray-800">
          <div className="flex items-center space-x-2">
            <Link to="/student/quiz" >
              
              <span className="text-2xl   font-bold">←</span>
            </Link>
            <h1 className="text-xl  font-bold">Assess Yourself</h1>
          </div>
          <p className="text-gray-500 mt-2">Complete the test now</p>
        </header>

        <div className="flex  w-full mt-8">
          <div className="w-1/4 space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="text-sm font-bold text-gray-500 uppercase">Title Of The Course</h3>
              <p className="text-lg font-semibold text-gray-800 mt-1">Laravel</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="text-sm font-bold text-gray-500 uppercase">Time Left</h3>
              <p className="text-lg font-semibold text-gray-800 mt-1">{formatTime(timeLeft)}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-800">Questions :</h3>
              <div className="grid grid-cols-5 gap-2 mt-4">
                {Array.from({ length: 15 }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-8 h-8 rounded-md font-semibold ${index === currentQuestion ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>  

          <div className="flex-1 p-4 border border-gray-300 rounded-lg ml-8 relative flex flex-col justify-center ">
            <h2 className="text-lg font-semibold text-gray-800 mb-2 ">Question No {currentQuestion + 1}:</h2>
            <p className="text-lg font-medium text-gray-900 mb-4">{questions[currentQuestion].question}</p>
            <div className="space-y-3 mb-4  ">
              {questions[currentQuestion].options.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    className="w-5 h-5"
                    checked={selectedOption === index}
                    onChange={() => setSelectedOption(index)}
                  />
                  <span className="text-lg text-gray-800">{option}</span>
                </label>
              ))}
            </div>

            <div className="absolute top-2 right-2 flex space-x-6">
              <img
                src="/roundedleftarrow.png"
                alt="Previous Question"
                className="cursor-pointer w-8 h-8"
                onClick={() => handleNavigation(-1)}
                style={{ visibility: currentQuestion === 0 ? "hidden" : "visible" }}
              />
              <img
                src="/roundedrightarrow.png"
                alt="Next Question"
                className="cursor-pointer w-8 h-8"
                onClick={() => handleNavigation(1)}
                style={{ visibility: currentQuestion === questions.length - 1 ? "hidden" : "visible" }}
              />
            </div>

            <div className="absolute bottom-10 right-4">
              <button
                onClick={() => {
                  localStorage.removeItem("timeLeft"); // Clear the timer on submit
                  alert("Quiz submitted!");
                }}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default QuestionPage;
