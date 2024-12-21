import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 mb-8">
      <div className="max-w-2xl mx-auto flex gap-4">
        <Link to="/" className="hover:text-gray-300">Todos</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
      </div>
    </nav>
  );
};