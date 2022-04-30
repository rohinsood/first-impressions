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
        <div className="nav-bar"> 
            <div className="container flex justify-between items-center mx-auto align-middle h-12 ">
                <a href="./index.html" className="flex items-center">
                    <span className="highlight rounded-t-sm rounded-b-md border-t-2 border-black text-3xl font-bold pl-4 h-9">First Impressions</span>
                </a>

                <ul className='w-3/4 flex flex-row items-center justify-between'>
                    {/* The user is able to click these buttons and change the openings */}
                    {/* <button className='nav-button' onClick={() => {setOp(opening.setup)}}>Setup </button> */}
                    <button className='nav-button' onClick={() => {setOp(opening.scotch)}}>Scotch </button>
                    <button className='nav-button' onClick={() => {setOp(opening.italian)}}>Italian</button>
                    <button className='nav-button' onClick={() => {setOp(opening.ruyLopez)}}>Ruy Lopez</button>
                    <button className='nav-button' onClick={() => {setOp(opening.sicilianDefense)}}>Silican</button>
                    <button className='nav-button' onClick={() => {setOp(opening.scandanavianDefense)}}>Scandanavian</button>
                    <button className='nav-button' onClick={() => {setOp(opening.kingsIndian)}}>King's Indian</button>
                </ul>
            </div>
        </div>
    );
};

  

export default Navbar;
