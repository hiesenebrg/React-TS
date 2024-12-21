import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-600">
        This is a simple todo list application built with React, Redux Toolkit, and React Router.
        It demonstrates the use of modern React practices and state management.
      </p>
    </div>
  );
};