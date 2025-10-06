import React from 'react'

const DetailsCard = ({Headerlogo, arrowLogo }) => {
  return (
    <div className={`border-2 shadow-md rounded-md p-2 w-full sm:w-1/3 flex flex-col items-center gap-5`}>
        <div className='flex items-center justify-center gap-5'>
            <img src={Headerlogo} alt="" className='w-[32px] h-[32px]' />
            <h2 className='text-[20px] sm:text-[24px] text-[#161439]'>Total Cost</h2>
        </div>
        <div className='flex gap-5 sm:gap-20'>
            <h4 className='text-lg sm:text-xl'>$15000</h4>
            <img src={arrowLogo} alt="" className='w-[20px] sm:w-[32px]' />
        </div>
        <div className='flex justify-center'>
            <h5 className='text-gray-500'>{`This Month: ${12321}`}</h5>
        </div>
    </div>
  )
}

export default DetailsCard
