import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="w-full md:w-3/4 mx-auto relative bg-black shadow ">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="text-white text-md md:text-3xl font-semibold font-serif nav-text">
                        E-sale
                        </Link>
                    </div>
                    <div className=" hidden md:flex absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <Link to="/components/teachersstore" className="px-3 py-2 mx-3 mt-2 text-gray-300 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Find Tutor</Link>
                            
                            <Link to="/auth/tutor/register" className="px-3 py-2 mx-3 mt-2 text-gray-300 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Become a Tutor</Link>
                            <Link to="#" className="px-3 py-2 mx-3 mt-2 text-gray-300 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">About Us</Link>
                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">
                            <Link to="/auth/student/login">
                                <h3 className="px-3 py-2 mx-3 mt-2 text-gray-300 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Signin</h3></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;