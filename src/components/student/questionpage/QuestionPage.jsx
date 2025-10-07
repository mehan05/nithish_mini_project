import React, { useState, useEffect } from "react";
import Navbar from '../../common/navbar/Navbar';
import StudentNavBar from "../components/SrudentNavbar/StudentNavBar";
import { Link, useNavigate } from "react-router-dom";
import CourseCards from "../../trainee/components/CourseCards/CourseCards";

const QuestionPage = () => {

  console.log("quiz page running");
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedQuiz = localStorage.getItem('selectedQuiz');
    const savedQuestions = localStorage.getItem('quizQuestions');
    
    if (savedQuiz && savedQuestions) {
      setSelectedQuiz(savedQuiz);
      setQuestions(JSON.parse(savedQuestions));
    } else {
      // fallback questions
      setQuestions([
        { id: 1, question: "What is the default database driver used in Laravel?", options: ["MySQL", "SQLite", "PostgreSQL", "MongoDB"], correct: 1 },
        { id: 2, question: "Which of the following is a PHP framework?", options: ["React", "Angular", "Laravel", "Vue"], correct: 2 },
        { id: 3, question: "What does MVC stand for?", options: ["Model View Controller", "Model View Component", "Model Version Control", "None"], correct: 0 },
        { id: 4, question: "Which is used for database migrations in Laravel?", options: ["Seeds", "Migrations", "Eloquent", "Blueprint"], correct: 1 },
        { id: 5, question: "Which command is used to start a Laravel server?", options: ["php artisan serve", "laravel serve", "npm start", "composer start"], correct: 0 }
      ]);
    }
  }, []);

  useEffect(() => {
    if (questions.length > 0 && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 0) return prev - 1;
          else {
            handleSubmit();
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [questions, quizCompleted]);

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) correct++;
    });
    return Math.round((correct / questions.length) * 100);
  };

  const getCourseRecommendations = (topic, score) => {
    const recommendations = [];
    
    if (score >= 80) {
      recommendations.push(
        { id: 1, title: `${topic} Advanced Course`, description: "Take your skills to the next level", imageUrl: "/laravel.png" },
        { id: 2, title: `${topic} Expert Certification`, description: "Become a certified expert", imageUrl: "/graphic.png" }
      );
    } else if (score >= 60) {
      recommendations.push(
        { id: 1, title: `${topic} Intermediate Course`, description: "Build on your foundation", imageUrl: "/laravel.png" },
        { id: 2, title: `${topic} Practice Exercises`, description: "Practice makes perfect", imageUrl: "/graphic.png" }
      );
    } else {
      recommendations.push(
        { id: 1, title: `${topic} Beginner Course`, description: "Start from the basics", imageUrl: "/laravel.png" },
        { id: 2, title: `${topic} Fundamentals`, description: "Master the fundamentals", imageUrl: "/graphic.png" }
      );
    }
    
    return recommendations;
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setQuizCompleted(true);
    
    const recommendations = getCourseRecommendations(selectedQuiz || 'Programming', finalScore);
    setRecommendedCourses(recommendations);
    
    localStorage.removeItem('selectedQuiz');
    localStorage.removeItem('quizQuestions');
    localStorage.removeItem('quizTopic');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleNavigation = (direction) => {
    if (selectedOption !== null) {
      setAnswers(prev => ({ ...prev, [currentQuestion]: selectedOption }));
    }
    
    const newIndex = currentQuestion + direction;
    if (newIndex >= 0 && newIndex < questions.length) {
      setCurrentQuestion(newIndex);
      setSelectedOption(answers[newIndex] || null);
    }
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    setAnswers(prev => ({ ...prev, [currentQuestion]: optionIndex }));
  };

  // ✅ Prevent rendering before questions are loaded
  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-600">
        <StudentNavBar />
        <p className="text-lg mt-10">Loading your quiz...</p>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div>
        <StudentNavBar />
        <div className="bg-white flex flex-col items-center justify-center font-sans mr-5 ml-5 min-h-screen">
          <div className="max-w-4xl w-full p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Quiz Completed!</h1>
              <div className="text-6xl font-bold text-blue-600 mb-2">{score}%</div>
              <p className="text-xl text-gray-600">Your Score</p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Performance Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{Math.round((score/100) * questions.length)}</div>
                  <div className="text-gray-600">Correct Answers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">{questions.length - Math.round((score/100) * questions.length)}</div>
                  <div className="text-gray-600">Incorrect Answers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{questions.length}</div>
                  <div className="text-gray-600">Total Questions</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Recommended Courses for You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map((course) => (
                  <div key={course.id} className="bg-white border rounded-lg p-4 shadow-md">
                    <img src={course.imageUrl} alt={course.title} className="w-full h-32 object-cover rounded mb-3" />
                    <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm">{course.description}</p>
                    <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                      Enroll Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => navigate('/student')}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mr-4"
              >
                Back to Dashboard
              </button>
              <button
                onClick={() => {
                  setQuizCompleted(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                  setScore(0);
                  setSelectedOption(null);
                  setTimeLeft(15 * 60);
                }}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
              >
                Take Another Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <StudentNavBar />
      <div className="bg-white flex flex-col items-center justify-center font-sans mr-5 ml-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <header className="w-full px-6 py-4 flex flex-col items-start text-gray-800">
          <div className="flex items-center space-x-2">
            <Link to="/student/home">
              <span className="text-2xl font-bold">←</span>
            </Link>
            <h1 className="text-xl font-bold">Assess Yourself</h1>
          </div>
          <p className="text-gray-500 mt-2">Complete the test now</p>
        </header>

        <div className="flex w-full mt-8">
          <div className="w-1/4 space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="text-sm font-bold text-gray-500 uppercase">Title Of The Course</h3>
              <p className="text-lg font-semibold text-gray-800 mt-1">{selectedQuiz || 'General Quiz'}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="text-sm font-bold text-gray-500 uppercase">Time Left</h3>
              <p className="text-lg font-semibold text-gray-800 mt-1">{formatTime(timeLeft)}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-800">Questions :</h3>
              <div className="grid grid-cols-5 gap-2 mt-4">
                {Array.from({ length: questions.length }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (selectedOption !== null) {
                        setAnswers(prev => ({ ...prev, [currentQuestion]: selectedOption }));
                      }
                      setCurrentQuestion(index);
                      setSelectedOption(answers[index] || null);
                    }}
                    className={`w-8 h-8 rounded-md font-semibold ${
                      index === currentQuestion 
                        ? "bg-green-500 text-white" 
                        : answers[index] !== undefined 
                          ? "bg-blue-500 text-white" 
                          : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>  

          <div className="flex-1 p-4 border border-gray-300 rounded-lg ml-8 relative flex flex-col justify-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Question No {currentQuestion + 1}:</h2>
            <p className="text-lg font-medium text-gray-900 mb-4">
              {questions[currentQuestion]?.question || "Loading question..."}
            </p>
            <div className="space-y-3 mb-4">
              {questions[currentQuestion]?.options?.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    className="w-5 h-5"
                    checked={selectedOption === index}
                    onChange={() => handleOptionSelect(index)}
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
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
