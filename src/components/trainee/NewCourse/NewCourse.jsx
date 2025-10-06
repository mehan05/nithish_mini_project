import React from 'react'
import { Outlet } from 'react-router-dom'
import TraineeNavbar from '../components/TraineeNavbar/TraineeNavbar'
const NewCourse = () => {
  return (
    <div>
            <div className=" ">
                    <TraineeNavbar/>
            </div >
            <div>
                <Outlet/>
            </div>
    </div>
  )
}

export default NewCourse