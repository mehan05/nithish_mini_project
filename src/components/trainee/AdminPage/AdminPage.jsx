import React from 'react';
import DetailsCard from './components/DetailsCard';
import BestSellingCourse from './components/BestSellingCourse';
import ChartComponents from './components/ChartComponents';
import TraineeNavbar from '../components/TraineeNavbar/TraineeNavbar';
import MessageList from './components/MessageList';

const up_arrow = "/salesup-arrow.png";
const rupee_icon = "/rupee-icon.png";
const down_arrow = "/sales-down-arrow.png";
const people_icon = "/people-icon.png";
const review_icon = "/review-icon.png";

const AdminPage = () => {
  return (
    <div className="m-4">
      <div className="border-violet-500">
        <TraineeNavbar />
      </div>
          <div className='flex flex-col m-5'>
                <div >

                  <div className="flex justify-start items-center mt-3">
                    <h1 className="font-bold text-[24px] sm:text-[36px] text-[#161439]">Hello User</h1>
                  </div>

                  <div className="flex flex-wrap gap-5 m-5 w-full ">
                    <div className="flex  gap-5 w-full min-w-full md:w-2/3">
                      <DetailsCard Headerlogo={rupee_icon} arrowLogo={up_arrow} className="flex-1 h-40 " />
                      <DetailsCard Headerlogo={people_icon} arrowLogo={up_arrow} className="flex-1 h-40" />
                      <DetailsCard Headerlogo={review_icon} arrowLogo={down_arrow} className="flex-1 h-40" />
                    </div>
                  </div>
                  

               
                </div>


               <div className='flex justify-between gap-10 w-full'>
                    <div className='mb-5 w-1/2 '>
                      <MessageList />
                    </div>

                    <div className="mb-5 w-1/2">
                      <BestSellingCourse />
                    </div>
            </div>
          </div>
    </div>
  );
};

export default AdminPage;
