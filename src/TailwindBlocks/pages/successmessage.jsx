import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg text-center max-w-md w-full">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Product Added Successfully!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          If you have any queries, please contact us at: 
        </p>
        <p className="text-xl font-semibold text-blue-600 mb-8">
          +91 9110317849
        </p>
        <button
          onClick={handleGoBack}
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
