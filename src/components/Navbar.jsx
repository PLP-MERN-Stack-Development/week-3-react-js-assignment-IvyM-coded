// src/components/Navbar.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext'; 
import Button from './Button';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        
        <Button onClick={toggleTheme} variant="secondary" size="sm">
          {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        </Button>
      </div>
    </header>
  );
};

export default Navbar;