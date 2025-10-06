import { useState, useEffect } from 'react';

function ProgressBar({ precentage }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(precentage);
  }, [precentage]);

  return (
    <div className="bg-gray-300 rounded-full h-2 overflow-hidden">
      <div
        className="bg-violet-500 h-full rounded-full transition-[width] duration-1000 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
