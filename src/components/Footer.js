'use client';


import React from 'react'


import { useTheme } from '../app/context/ThemeContext';



const Footer = () => {

    const { theme, toggleTheme } = useTheme();


    return (
        <section>
            {/* Top Section */}
            <div className='flex justify-between items-center border-t border-gray-100 bg-gray-700 p-4 sm:px-14 sm:py-7 '>

                {/* Left: Contact Button */}
                <div>
                    <p className='max-sm:text-sm text-white '>&copy; 2025 Shivam Yadav</p>
                </div>

                {/* Right: Theme */}
                <button
                    onClick={toggleTheme}
                    className="w-15 h-8 rounded-full border border-gray-200 bg-gray-200  flex items-center justify-center cursor-pointer transition-colors duration-300"
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
            </div>
        </section>
    )
}

export default Footer