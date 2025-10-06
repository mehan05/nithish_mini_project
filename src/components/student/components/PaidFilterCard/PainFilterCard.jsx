import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../../../context/context';

const PainFilterCard = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { setPaidContext } = useContext(MyContext);

  const options = ["All", "Paid", "Free"];

  useEffect(() => {
    setPaidContext(selectedOptions);
  }, [selectedOptions, setPaidContext]);

  const handleOptionChange = (e) => {
    const option = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-64">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Paid</h2>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center text-gray-700">
            <input
              type="checkbox"
              className="mr-2 rounded text-indigo-600 focus:ring-indigo-500"
              value={option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PainFilterCard;
