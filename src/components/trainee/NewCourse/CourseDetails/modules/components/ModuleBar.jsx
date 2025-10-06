import { useState } from 'react';
import ModuleForm from './ModuleForm';

const ModuleBar = ({ handleModuleChange, modules }) => {
  const [show, setShow] = useState(new Array(modules.length).fill(false));

  const handleToggle = (index) => {
    const updatedShow = [...show];
    updatedShow[index] = !updatedShow[index];
    setShow(updatedShow);
  };

  return (
    <div>
      <div className="border-2 border-gray-600 rounded-md  w-full max-w-4xl mx-auto mb-3">
        {modules.map((module, index) => (
          <div key={index}>
            <div className='flex justify-between p-3   bg-gray-300 '>
              <p className='text-xl   font-semibold'>{module.title || `Module ${index + 1}`}</p>
              <button
                className="bg-gray-300 hover:bg-violet-500 font-bold py-1 px-2 rounded-md text-black text-xl m-1"
                onClick={() => handleToggle(index)}
              >
                {show[index] ? <img src="/up-arrow.png" className='w-5 h-5' alt="" /> : <img src="/down-arrow.png" className='w-5 h-5' alt="" />}
              </button>
            </div>
            <div className={`transition-opacity duration-700 ease-in-out ${show[index] ? 'opacity-100' : 'opacity-0'}`}>
              {show[index] && <ModuleForm handleModuleChange={handleModuleChange} index={index} module={module} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModuleBar;
