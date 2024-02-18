import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CiShoppingCart ,CiHeart } from "react-icons/ci";
const Navbar = () => {
    return (
        <nav className="w-full md:w-3/4 mx-auto relative bg-black shadow ">
            <div className="container px-6 py-4 mx-auto border">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="text-white text-md md:text-3xl font-semibold font-serif nav-text">
                        E-sale
                        </Link>
                        
                    </div>
                    <div className="flex items-center justify-between gap-8">
                         <Link className="text-white text-xl"><CiShoppingCart className="text-white text-2xl"/></Link>
                         <Link className="text-white"><CiHeart className="text-white text-2xl"/></Link>
                        <Link className="text-white text-md">Signin </Link>
                    </div>
                   
                </div>
            </div>

        </nav>
    );
};

export default Navbar;