import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Course from './Courses/Course'
import Landing from '../common/landing/landing'
import ModulePage from './ModulePage/ModulePage'
import TestPage from './TestPage/TestPage'
import MyContext from '../../context/context'
import axios from 'axios'
import QuestionPage from './questionpage/QuestionPage'
import EnrolledCourse from './Dashboard/EnrolledCourse/EnrolledCourse'
import Dashboard from './Dashboard/DashBoard'
import { BASE_API } from '../../apis/apis'

const Student = () => {
  const {setCourses} = useContext(MyContext);

  const api = axios.create({
    baseURL:BASE_API,
    headers:{
        "Content-Type":"application/json",
    }
})
const getCourses = async () => {
try{
    const response = await api.get("/courses");
    setCourses(response.data);
}catch(error){
    console.log(error);
}
}
  useEffect(()=>{
  getCourses();
  },[])
  return (
    <div>
        <Routes>
          <Route path='home' element={<Landing/>} />
          <Route  path='quiz' element={<TestPage/>} />
          <Route path='quizpage' element={<QuestionPage/>} />
          <Route path='mycourses' element={<Course/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='mycourses/:id/modules' element={<ModulePage/>} />
          <Route path='/home/modules' element={<ModulePage/>} />
        </Routes>
    </div>
  )
}

export default Student