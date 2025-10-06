import React from 'react';

const FeedbackModal = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <p className="text-center text-gray-700 font-medium mb-4">
          Before you continue, we’d like to ensure that you’re satisfied with the below criteria:
        </p>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Video Quality:</span>
            <span className="text-orange-500 font-semibold">75/100</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Example:</span>
            <span className="text-red-500 font-semibold">39/100</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Clear explanation:</span>
            <span className="text-green-500 font-semibold">100/100</span>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            UPDATE
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            NO
          </button>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
