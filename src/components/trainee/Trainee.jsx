import { Route, Routes } from 'react-router-dom';
import MyCourses from './MyCourses/MyCourses';
import NewCourse from './NewCourse/NewCourse';
import CoursDetails from './NewCourse/CourseDetails/course_1/CoursDetails';
import Modules from './NewCourse/CourseDetails/modules/Modules';
import Level from './NewCourse/CourseDetails/Level/Level';
import AdminPage from './AdminPage/AdminPage';
import Landing from '../common/landing/landing';
import Quality from './AdminPage/components/Quality';

const Trainee = () => {
  return (
    <Routes>
      <Route path='home' element={<Landing />} /> 
      <Route path='mycourses' element={<MyCourses />} />
      <Route path='newcourse' element={<NewCourse />}>
        <Route path='course_1' element={<CoursDetails />} />
        <Route path='course_1/modules' element={<Modules />} >
             <Route path='quality' element={<Quality />} />
        </Route>
        <Route path='course_1/modules/quality/levels' element={<Level />} />
      </Route>
      <Route path='dashboard' element={<AdminPage />} />
    </Routes>
  );
};

export default Trainee;
