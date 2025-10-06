import  { useState,useContext } from 'react';
import ModuleBar from './components/ModuleBar';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ProgressBar from '../../components/Progressbar';
import MyContext from "../../../../../context/context";
const Modules = () => {
  const [modules, setModules] = useState([]);
 

  const [newModuleTitle, setNewModuleTitle] = useState("");
  const[toogleFeedback,setToogleFeedback]=useState(false);
  const location = useLocation();
  console.log(location.pathname);
   const handleAddModule = () => {
    setModules([
      ...modules,
      {
        title: newModuleTitle,
        description: "",
        cost: "",
        video: "",
      },
    ]);
    setNewModuleTitle("");
  };

  const handleModuleChange = (event, index, field) => {
    const newModules = [...modules];
    newModules[index][field] = event.target.value;
    setModules(newModules);
  };

  return (
    <div className={`p-4 md:p-6 lg:p-8 `}>
      <div className="mb-5">
        <ProgressBar precentage={60} />
      </div>
      {
        location.pathname.endsWith("quality")&&
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50/40  h-screen z-50">
          <div className="relative ">
            <Outlet />
          </div>
        </div>
      }
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1">Modules</h1>
          <span className="text-gray-400">Add Your Modules here...</span>
        </div>
        <div className="border-2 border-gray-600 rounded-md p-2 w-full max-w-4xl mx-auto mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter module title..."
              className="flex-1 border-none outline-none p-2"
              value={newModuleTitle}
              onChange={(e) => setNewModuleTitle(e.target.value)}
            />
            <button
              onClick={handleAddModule}
              className="bg-gray-300 hover:bg-violet-500 font-bold py-2 px-4 rounded-md text-black text-sm md:text-base lg:text-lg"
            >
              <img src="/plusicon.png" className="w-5 h-5" alt="Add Module" />
            </button>
          </div>
        </div>
        {modules.length ? (
        <div className="w-full max-w-4xl mx-auto ">
            <ModuleBar modules={modules} handleModuleChange={handleModuleChange} percentage={30} />
          </div>
        ) : (
          <div></div>
        )}
        <div className="fixed bottom-4 right-4  " onClick={()=>setToogleFeedback(true)}>
          <Link
            to="quality"
            className="bg-[#5072F5] px-4 py-2 text-center text-white rounded-lg font-semibold w-[150px] hover:bg-white hover:border-2 hover:border-violet-500 hover:text-violet-500 transition duration-300"
          >
            Next
          </Link>
          
        </div>
      </div>
      
    </div>
  );
};

export default Modules;
