import React, { useContext } from 'react';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import { CiBookmarkPlus } from 'react-icons/ci';
import { useTheme } from '../hooks/ThemeContext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();
    return (
        <div className='absolute top-0 w-full z-10'>
            <nav className="flex justify-between items-center py-3 px-2 dark:bg-black dark:text-white shadow-custom-light dark:shadow-custom-dark mb-10">
                <h1 className="text-2xl tracking-widest">Welcome, Arsath</h1>

                <div className="flex justify-center items-center gap-4">
                    <button
                        className="border border-gray-600  dark:border-white shadow-md rounded-full p-1 active:bg-slate-500 transition-all active:opacity-5"
                        onClick={toggleTheme}
                    >
                        {isDarkMode ? (
                            <CiDark size={30} />
                        ) : (
                            <CiLight size={30} />
                        )}
                    </button>
                    <button className="border border-gray-600 dark:border-white shadow-md rounded-full p-1 active:bg-slate-500 transition-all active:opacity-5" onClick={()=> navigate("/habit")}>
                        <CiBookmarkPlus size={30} />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
