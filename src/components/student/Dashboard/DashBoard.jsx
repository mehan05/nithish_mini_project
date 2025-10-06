import React from 'react';
import StudentNavBar from '../components/SrudentNavbar/StudentNavBar';
import RecommendedCourse from './RecommendedCourse/RecommendedCourse';
import ProfileCard from './ProfileCard/ProfileCard';
import Progress from './Progress/progress';
import EnrolledCourse from './EnrolledCourse/EnrolledCourse';
import ResumeCourse from './ResumeCourse/ResumeCourse';

const Dashboard = () => {
  return (
    <div className="px-4 ">
      <div className=" flex-none mb-5">
        <StudentNavBar />
      </div>
      <div className='h-screen  '>

            <div className="  flex-1  flex flex-wrap lg:flex-nowrap justify-between gap-5">
              <div className="w-full lg:w-2/4  shadow-lg">
                <h1 className="text-3xl font-semibold m-2">Recommended Course</h1>
                <div>
                  <RecommendedCourse />
                </div>
              </div>

              <div className="w-full lg:w-2/4 h-[300px]">
                <ProfileCard />
              </div>
            </div>

            <div className="m-5">
              <Progress />
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-5">
              <div className="w-full lg:w-2/4">
                <div>
                  <h1 className="text-3xl font-semibold mb-4">Enrolled Courses</h1>
                </div>
                <EnrolledCourse />
              </div>

              <div className="w-full lg:w-2/4">
                <div>
                  <h1 className="text-3xl font-semibold mb-4">Resume Courses</h1>
                </div>
                <ResumeCourse />
              </div>
            </div>
          </div>
      </div>
  );
};

export default Dashboard;
