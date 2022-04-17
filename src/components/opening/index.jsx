/* 
    Creates the Opening component
*/

import { useState } from "react";
import Board from "../board"
import '../../index.css';
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti"

/* 
    Creates the Opening React Dom Component with the Board component, opening title, move number, and buttons to interact with the board

    @params the list of moves in board format
    @return the Opening React DOM Component
*/
const Opening = ( {boards} ) => {
    
    const [moveNum, setMoveNum] = useState(0);
    let formatting = ""

    // determines when to disable the arrow buttons and the formatting when enabled
    function dis( limit ) {
        if (moveNum === limit) {
            formatting = " move-button opacity-30"
            return true;
        } else {
            formatting = " move-button"
            return false 
        }
    }

    return (
        <>
            {/* creates the board component with the board at the index of the move number */}
            <Board board = {boards[1][moveNum]}/>

            {/* displays the title of the current opening */}
            <p className="font-bold text-3xl">
                {boards[0]}
            </p>
            <div className="flex flex-row w-48 h-16 items-center justify-center space-x-6">
                
                {/* sets the bottom limit to 0 and decreases move num by 1 when clicked */}
                <button disabled={dis(0)} onClick={() => setMoveNum(moveNum-1)} className={String("bg-gradient-to-bl from-zinc-900 to-gray-700" + formatting)} data-tooltip-target="tooltip-default">
                    <TiArrowLeftThick size="36px"/>
                </button>

                {/* displays the current move number */}
                <p>
                    {moveNum + 1}
                </p>

                {/* sets the bottom limit to the max number of moves (aka length of boards) and increases move num by 1 when clicked */}
                <button disabled={dis(((boards[1].length - 1)))} className={"bg-gradient-to-bl from-slate-600 to-slate-100" + formatting} onClick={() => setMoveNum(moveNum+1)}>
                    <TiArrowRightThick size="36px" color="white"/>
                </button>
            </div>

        </>
    );


}

export default Opening