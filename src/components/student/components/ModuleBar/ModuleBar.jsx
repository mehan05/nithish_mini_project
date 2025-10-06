import { useState } from "react";

const ModuleDescription = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);
  const[isOpenRating,setisOpenRating] = useState(false);
  const toggleModule = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="  mt-2">
      <div
        onClick={toggleModule}
        className="flex justify-between items-center cursor-pointer bg-gray-100 p-4 rounded-t-lg"
      >
        <div className="flex items-center  gap-20  space-x-4">
          <p className="font-semibold text-lg">Module:{module.moduleNumber}</p>
          <p className="font-semibold">{module.title}</p>
        </div>
        <p className="text-[#5751E1] text-lg font-bold">${module.price}</p>
        <div className="">
            <p>{isOpen?(<img className="w-5 h-5 transition-transform  duration-900 ease-in-out"  src="/up-arrow.png" />):(<img  className="w-5 h-5 transition-transform  duration-900 ease-in-out"   src="/down-arrow.png" />)}</p>
        </div>
      </div>

        <div   className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}>

        
            <div className="bg-white p-6 border rounded-b-lg shadow-md">
            <div className="mb-6">
                <h2 className="text-xl font-semibold">Course Description</h2>
                <p className="text-gray-700 mt-2">{module.description}</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold">What you'll learn in this course?</h3>
                <p className="text-gray-700 mt-2 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="space-y-3">
                {module.learnings.map((item, index) => (
                    <li key={index} className="flex items-center">
                    <span className="text-yellow-500 mr-2">➡️</span>
                    <p className="font-semibold text-gray-900">{item}</p>
                    </li>
                ))}
                </ul>
                <div className="mt-4 mb-4 cursor-pointer bg-gray-100 p-4 rounded-t-lg" >
                                <div className="flex  justify-between">
                                    <h3 className="text-xl font-semibold mb-3">See About Ratings</h3>
                                    <div className="flex items-center w-5 h-5">

                                      <p onClick={()=>setisOpenRating(!isOpenRating)}>{isOpenRating?(<img className="w-5 h-5 transition-transform  duration-900 ease-in-out"  src="/up-arrow.png" />):(<img  className="w-5 h-5 transition-transform  duration-900 ease-in-out"   src="/down-arrow.png" />)}</p>
                                    </div>
                                </div>
                  {
                    isOpenRating&&(
                      <div >
                                  <div className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-center gap-5 justify-center ${
                                        isOpenRating ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                                      }`}>
                                      <div className="flex justify-between items-center gap-10">
                                          <span className="text-gray-600 text-lg font-poppins">Video Quality :</span>
                                          <span className="text-orange-700 text-lg font-poppins">
                                            75<span className="text-black">/100</span>
                                          </span>
                                      </div>
                                        <div className="flex justify-between items-center  gap-10">
                                            <span className="text-gray-600 text-lg font-poppins">Clear Explanation :</span>
                                            <span className="text-green-500 text-lg font-poppins">
                                              75<span className="text-black">/100</span>
                                            </span>
                                        </div>
                                    
                                 </div>
                            </div>
                    )
                  }
                  </div>
                
            </div>
            </div>
        </div>
      
    </div>
  );
};

export default ModuleDescription;
