'use client';


import React from 'react'


import { useTheme } from '../app/context/ThemeContext';



const Footer = () => {

    const { theme, toggleTheme } = useTheme();


    return (
        <section>
            {/* Top Section bg-[#0f0f23] */}
            <div className='flex justify-between items-center p-4 sm:px-14 sm:py-7 bg-transparent'
            >

                {/* Left: Contact Button */}
                <div>
                    <p className='max-sm:text-sm text-white '>&copy; 2025 Shivam Yadav</p>
                </div>

                {/* Right: Theme */}
                <button
                    onClick={toggleTheme}
                    className="w-15 h-8 rounded-full bg-gradient-to-r from-blue-700 to-purple-600  flex items-center justify-center cursor-pointer transition-colors duration-300"
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
            </div>
        </section>
    )
}

export default Footer