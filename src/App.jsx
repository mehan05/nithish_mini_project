import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/common/login/Login';
import Trainee from './components/trainee/Trainee';
import Student from './components/student/Student';
import QuestionPage from './components/student/questionpage/QuestionPage';
import Remainders from './components/smallcomponents/Remainders'
import FeedBackCard from './components/smallcomponents/FeedBackCard';
import CourseCards from './components/trainee/components/CourseCards/CourseCards';
import Landing from './components/common/landing/landing';
import { useContext, useEffect } from 'react';
import MyContext from './context/context';
import axios from 'axios';
import EnrolledCourse from './components/student/Dashboard/EnrolledCourse/EnrolledCourse';
import { BASE_API } from './apis/apis';

function App() {
  const { courses, setCourses } = useContext(MyContext);

  const api = axios.create({
    baseURL:BASE_API,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const getCourses = async () => {
    try {
      const response = await api.get("/courses");
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="m-2">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/trainee/*' element={<Trainee />} />  
        <Route path='/student/*' element={<Student />} />
        <Route path='/quiz' element={<QuestionPage/>} /> 
        <Route path='remainders' element={<Remainders/>} />
        {/* <Route path='FeedBackCard' element={<FeedBackCard/>} /> */}
        <Route path='coursecards' element={<CourseCards/>} />
        <Route path='landing' element={<Landing/>} />
        {/* <Route path='trainee/feecback' element={<FeedBackCard/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
