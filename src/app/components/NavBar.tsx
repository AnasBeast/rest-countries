'use client';

import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`w-full relative shadow-md py-3 ${theme === 'dark' ? 'text-white bg-element' : 'text-gray-800 bg-white'}`}>
      <nav className='sm:w-10/12 mx-auto flex justify-between items-center p-4'>
        <h1 className='font-bold sm:text-4xl text-sm'>Where in the world?</h1>
        <h1
          className='font-semibold sm:text-3xl text-sm flex items-center gap-2 hover:cursor-pointer'
          onClick={toggleTheme}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
          Dark Mode
        </h1>
      </nav>
    </div>
  );
};

export default NavBar;