import { useLocation } from "react-router-dom";

const Animation = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="flex items-center justify-center h-full pt-5 ">
        {
          !location.pathname.endsWith('levels')?(

                <div>

                <div className=" p-5 pr-10">
                    <img
                      src="/animation.gif"
                          alt="Processing Animation" 
                  className="w-[200px] h-[200px] "
                    />
                </div>
                  <div className="text-center text-gray-600 font-poppins font-bold text-[14px] leading-[22px]">
                          <p>Thank you for proceeding.</p>
                          <p>We're currently processing course</p>
                          <p>details for verification.</p>
                          <p className="mt-1 text-xs font-normal">(This process typically takes 24-48 hrs)</p>
                  </div>
              </div>
          ):(
            <div>

              <div className=" p-10 pr-10">
                  <img
                    src="/successAnimation.gif"
                        alt="Processing Animation" 
                className="w-full h-full "
                  />
              </div>
                  <span className="text-[25.34px] text-gray-600  font-poppins">Successfully created</span>
            </div>
          )
        }
    </div>
  );
};

export default Animation;