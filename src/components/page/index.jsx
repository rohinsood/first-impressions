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
const Page = ( {op} ) => {

    return(
        <div className="py-12 text-center space-y-6 flex-col flex justify-center items-center ">

            {/* displays the site title */}
            <h1 className="text-7xl font-bold group max-w-[720px]">
                First Impressions 💀
            </h1>

            {/* displays the site description & purpose */}
            <h2 className='text-4xl font-s'>
                An interactive guide to chess openings
            </h2>

            {/* creates the board with the desired opening */}
            <Opening boards={op} />
        </div>
    );
}

export default Page;