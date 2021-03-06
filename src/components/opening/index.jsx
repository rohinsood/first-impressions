/* 
    Creates the Opening component
*/

import { useState } from "react";
import Board from "../board"
import '../../index.css';
import { BsArrowRightShort, BsArrowLeftShort, BsArrowClockwise } from "react-icons/bs"

/* 
    Creates the Opening React Dom Component with the Board component, opening title, move number, and buttons to interact with the board

    @params the list of moves in board format
    @return the Opening React DOM Component
*/
const Opening = ( {boards, move, setMove} ) => {
    
    // const [moveNum, setMoveNum] = useState(0);
    let formatting = ""

    // determines when to disable the arrow buttons and the formatting when enabled
    function dis( limit ) {
        if (move === limit) {
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
            <Board board={boards[1][move]} />

            {/* displays the title of the current opening */}
            <p className="highlight pb-1 rounded-tr-lg rounded-bl-lg font-bold text-3xl text-justify">
                {boards[0]}
                <span className="font-extralight italic"> - Move {move}</span>
            </p>

            <div className="highlight flex flex-row w-96 h-20 items-center justify-center space-x-6 rounded-tr-lg rounded-bl-lg">
                
                {/* sets the bottom limit to 0 and decreases move num by 1 when clicked */}
                <button disabled={dis(0)} onClick={() => setMove(move-1)} className={formatting} data-tooltip-target="tooltip-default">
                    <BsArrowLeftShort size="36px" color="black"/>
                </button>

                {/* displays the current move number */}
                <button disabled={dis(0)} onClick={() => setMove(0)} className={"bg-transparent scale-90 hover:scale-100" + formatting} >
                    <BsArrowClockwise size="36px" color="black" />
                </button>

                {/* sets the top limit to the max number of moves (aka length of boards) and increases move num by 1 when clicked */}
                <button disabled={dis(((boards[1].length - 1)))} onClick={() => setMove(move+1)} className={formatting} >
                    <BsArrowRightShort size="36px" color="black"/>
                </button>
            </div>

        </>
    );


}

export default Opening