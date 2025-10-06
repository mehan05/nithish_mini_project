import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../../../context/context';

const LanguageFilterCard = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const { setLanguageContext } = useContext(MyContext);

  const languages = ["Tamil", "English", "Hindi"];

  useEffect(() => {
    setLanguageContext(selectedLanguages);
  }, [selectedLanguages, setLanguageContext]);

  const displayedLanguages = showMore ? languages : languages.slice(0, 3);

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    setSelectedLanguages(prev => 
      prev.includes(language) ? prev.filter(lang => lang !== language) : [...prev, language]
    );
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-64 mb-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Language</h2>
      <div className="flex flex-col gap-2">
        {displayedLanguages.map((language, index) => (
          <label key={index} className="flex items-center text-gray-700">
            <input
              type="checkbox"
              className="mr-2 rounded text-indigo-600 focus:ring-indigo-500"
              value={language}
              onChange={handleLanguageChange}
            />
            {language}
          </label>
        ))}
      </div>
     
    </div>
  );
};

export default LanguageFilterCard;
