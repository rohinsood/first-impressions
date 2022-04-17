/* 
    Creates the Navbar component
*/

import '../../index.css';
import 'flowbite'
import React from 'react';
import * as opening from '../board/openings'

/* 
    creates the Navbar component with the title and buttons to switch between the different openigns

    @params the global state to modify
    @return the React DOM Component
*/
const Navbar = ({ setOp }) => {
    return (
        <div className="fixed top-0 w-full bg-slate-900 backdrop-blur-sm shadow-md border-b border-gray-700"> 
            <div className="container flex justify-between items-center mx-auto my-auto align-middle p-3 h-16 ">
                <a href="./index.html" className="flex items-center">
                    <span className=" text-4xl font-bold pl-4 h-12">First Impressions 💀 </span>
                </a>

                <ul className='w-3/5 flex flex-row items-center justify-between'>
                    {/* The user is able to click these buttons and change the openings */}
                    <button className='nav-button' onClick={() => {setOp(opening.bongcloud)}}>Bongcloud </button>
                    <button className='nav-button' onClick={() => {setOp(opening.italian)}}>Italian</button>
                    <button className='nav-button' onClick={() => {setOp(opening.sicilianDefense)}}>Silican Defense</button>
                    <button className='nav-button' onClick={() => {setOp(opening.spanish)}}>Spanish</button>
                </ul>
            </div>
        </div>
    );
};

  

export default Navbar;
