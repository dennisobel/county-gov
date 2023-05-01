import React from 'react';

export function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Coming Soon</h1>
        <p className="text-gray-600 mb-6">
          We're working hard to bring you this feature. Stay tuned!
        </p>
        <div className="flex justify-center">
          <button
            className="py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
            onClick={() => window.history.back()}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
