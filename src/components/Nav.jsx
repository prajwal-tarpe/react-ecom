import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgMenu, CgClose } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { useCartContext } from '../context/CartContextProvider';
import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import {useFavContext} from "../context/FavContextProvider"


function Nav() {
    const Links = [
        {name: "HOME", link: "/"},
        {name: "PRODUCTS", link: "/products"},
        {name: "CONTACT", link:"/contact"},
    ];
    const {total_count} = useCartContext();
    const [open, setOpen] = useState(true);
    const {data} = useFavContext();

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className="md:flex items-center justify-between bg-white py-3 font-semibold md:px-10 px-7">
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <span className='text-3xl text-indigo-900 mr-1 pt-2'>
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    Styletron
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <CgClose /> : <CgMenu />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <NavLink 
                                    to={link.link} onClick={() => setOpen(!open)}
                                    className={({ isActive }) => isActive ? 'text-gray-800 hover:text-gray-400 duration-500 active' : 'text-gray-800 hover:text-gray-400 duration-500'}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))
                    }
                    <li className='md:ml-8 text-xl md:my-0 my-7 flex items-center'>
                        <NavLink to="/favourities" onClick={() => setOpen(false)} className='flex items-center relative'>
                            {data.length <= 0 ? <IoMdHeartEmpty className='text-2xl' /> : <FaHeart className='text-2xl text-gray-700' />}
                            <span className="absolute top-[-10px] right-[-10px] text-xs bg-red-500 text-white font-semibold rounded-full h-5 w-5 flex items-center justify-center">{data.length}</span>
                        </NavLink>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7 flex items-center'>
                        <NavLink to="/cart" onClick={() => setOpen(false)} className='flex items-center relative'>
                            <GiShoppingCart className='text-3xl font-bold' />
                            <span className="absolute top-[-10px] right-[-10px] text-xs bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">{total_count}</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;