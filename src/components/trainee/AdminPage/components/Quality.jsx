import { useContext, useEffect, useState } from 'react'
import Animation from '../../../smallcomponents/Animation';
import QualityPopupCard from '../../../smallcomponents/QualitypopupCard';
import MyContext from '../../../../context/context';

const Quality = () => {
    const[show,setShow] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setShow(true);     
        },3000)
    })

  return (
    <div className=''>
            {
                !show ? (

                <div className="fixed inset-0  flex items-center  justify-center">
                        <div className="relative  bg-white  rounded-xl p-0.5 shadow-lg w-[411px] h-[412px] ">
                        
                            <div className="  p-4 border-2 border-dashed border-gray-400 m-4 rounded-xl h-[380px] ">
                            <h2 className="text-lg font-semibold mb-4">
                                <Animation/>
                            </h2>
                            </div>
                        </div>
                </div>
                ):(
                    <div className="fixed inset-0  flex items-center  justify-center ">
                        <div className="relative  bg-white  rounded-xl p-0.5 shadow-lg w-[411px] h-[412px] ">
                        
                        <div className="  p-4 border-2 border-dashed border-gray-400 m-4 rounded-xl h-[380px] ">
                            <h2 className="text-lg font-semibold mb-4">
                                    <QualityPopupCard/>
                            </h2>
                        </div>
                        </div>
                  </div>
                )
            }
    </div>
  )
}

export default Quality