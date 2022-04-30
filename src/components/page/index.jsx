/* 
    Creates the Page component
*/

import Opening from "../opening"
import 'flowbite'
import React from 'react'

/* 
    Creates the page REACT dom component  with the page title,
    description and Opening component

    @params list of moves in board format
*/
const Page = ( {op, move, setMove} ) => {

    return(
        <div className="pt-20 pb-6 text-center space-y-5 flex-col flex justify-center items-center ">

            {/* displays the site title */}
            <h1 className="highlight pb-2 rounded-tr-lg rounded-bl-lg text-7xl font-bold group max-w-[720px] light">
                First Impressions
            </h1>

            {/* displays the site description & purpose */}
            <h2 className='highlight rounded-tr-lg rounded-bl-lg pb-1 text-4xl font-s'>
                An interactive guide to chess openings
            </h2>

            {/* creates the board with the desired opening */}
            <Opening boards={op} move={move} setMove={setMove}/>
        </div>
    );
}

export default Page;