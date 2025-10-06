import  { useContext, useEffect, useState } from 'react'
import HelperFunc from '../helperFunction/HelperFunc';
import MyContext from '../../../../context/context';

const FiltersCard = () => {
  const [showMore, setShowMore] = useState(false);
  const[selectedCategory, setSelectedCategory] = useState([]);
  const categories = [
    "Data science",
    "Artificial Intelligence",
    "Machine learning",
    "Mobile App develop",
    "UI&UX",
    "Linux",
  ];
  const {setSelectedCategoryContext} = useContext(MyContext);
  useEffect(() => {
    
    setSelectedCategoryContext(selectedCategory);
  },[selectedCategory,setSelectedCategoryContext])
  const displayedCategories = showMore ? categories : categories.slice(0, 5);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-64 ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Category</h2>
      <div className="flex flex-col gap-2">
        {displayedCategories.map((category, index) => (
          <label key={index} className="flex items-center  text-lg">
            <input type="checkbox" className="mr-2 rounded text-indigo-600 focus:ring-indigo-500"   value={category}  onChange={(e)=>{  HelperFunc(e,setSelectedCategory)}}  />
            {category}
          </label>
        ))}
      </div>
      <div className='flex justify-center'>

        <button 
          className="text-blue-500 mt-4  focus:outline-none text-lg" 
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less -" : "Show More +"}
        </button>
      </div>
    </div>
  );
};



export default FiltersCard