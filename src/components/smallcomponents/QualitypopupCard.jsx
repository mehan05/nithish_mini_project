import {  useNavigate } from "react-router-dom";

const QualityPopupCard = () => {
    const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center pt-9">
      <div className="bg-white rounded-lg flex flex-col justify-between">
        <h2 className="text-center text-gray-600 text-[14px] font-poppins leading-[20px] pb-5">
          Before you continue we’d like to ensure that you’re satisfied with below criteria
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-[14px] font-poppins">Video Quality :</span>
            <span className="text-orange-500 text-[14px] font-poppins">
              75<span className="text-black">/100</span>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-[14px] font-poppins">Example :</span>
            <span className="text-red-500 text-[14px] font-poppins">
              39<span className="text-black">/100</span>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-[14px] font-poppins">Clear explanation :</span>
            <span className="text-green-500 text-[14px] font-poppins">
              100<span className="text-black">/100</span>
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 text-white text-[14px] font-poppins w-[110px] h-[40px] rounded-md flex items-center justify-center hover:bg-green-600">
            UPDATE
          </button>
          <button className="bg-red-500 text-white text-[14px] font-poppins w-[110px] h-[40px] rounded-md flex items-center justify-center hover:bg-red-600">
            NO
          </button>
        </div>
        <div className="flex justify-center mt-4">
                    <button className="bg-blue-500 text-white text-[14px] font-poppins py-2 px-8 rounded-md hover:bg-blue-600" onClick={() => navigate("levels")}>
                        CONTINUE
                    </button>
        </div>
      </div>
    </div>
  );
};

export default QualityPopupCard;
