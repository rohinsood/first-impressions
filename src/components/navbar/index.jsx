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
const Navbar = ({ setOp, setMove }) => {

    function set ( opening ) {
        setOp(opening)
        setMove(0)
    }

    return (
        <div className="nav-bar"> 
            <div className="container flex justify-between items-center mx-auto align-middle h-12 ">
                <button className="highlight rounded-t-sm rounded-b-md border-t-2 border-black text-3xl font-bold pl-4 h-9" onClick={() => {setOp(opening.setup)}}>First Impressions</button>

                <ul className='w-3/4 flex flex-row items-center justify-between'>
                    {/* The user is able to click these buttons and change the openings */}
                    {/* <button className='nav-button' onClick={() => {setOp(opening.setup)}}>Setup </button> */}
                    <button className='nav-button' onClick={() => {set(opening.scotch)}}>Scotch </button>
                    <button className='nav-button' onClick={() => {set(opening.italian)}}>Italian</button>
                    <button className='nav-button' onClick={() => {set(opening.ruyLopez)}}>Ruy Lopez</button>
                    <button className='nav-button' onClick={() => {set(opening.sicilianDefense)}}>Silican</button>
                    <button className='nav-button' onClick={() => {set(opening.scandanavianDefense)}}>Scandanavian</button>
                    <button className='nav-button' onClick={() => {set(opening.kingsIndian)}}>King's Indian</button>
                </ul>
            </div>
        </div>
    );
};

  

export default Navbar;
