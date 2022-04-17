/* 
    creates the React DOM Components for the board
*/

import React from 'react';
import { pieces } from './boardController'

/* 
    Used to create the square element with a piece icon inside of it, if applicable

    @params boolean to decide color of square, string to access the value pair of the concurrent key in pieces[]
    @return square component
*/
const Square = ( {black_white, piece} ) => {

    // changes the color of the square based on the param
    var color;
    if (black_white) {
        color = "bg-gradient-to-br from-gray-500 to-gray-600";
    } else {
        color = "bg-gradient-to-tl from-zinc-700 to-zinc-800";
    }
    let formatting = `flex flex-col justify-center items-center p-4 rounded-sm shadow-lg opacity-80 w-16 h-16 ${color}`;

    // declares the piece for the desired square
    var move = <div />;
    if (piece !== "   ") {
        move = pieces[piece];
    } 

    // returns the formatted square with the desired piece
    return (
        <div className={formatting}>
            {move}
        </div>
    );
};

/* 
    Used to create a row of squares, the official term for row is a rank

    @params int for file number, [] of pieces in row of length 8
    @return Ranks component
*/
const Ranks = ( { file, setRank } )  => {

    // this determines the starting color of the row
    let bw = (file % 2) === 0; // if the file number is even, then the starting square is white

    // initializes the return var
    var row = [];

    // iterates through the file
    for(var x = 0; x < 8; x++) {

        // adds the Square component to the return var with the piece at the current index
        row.push(
            <Square black_white={bw} piece={setRank[x]}></Square>
        );
        
        // alternates the square color
        bw = !bw
    }
    
    // returns 8 Square components in a flex-row div
    return (
        <div className="flex flex-row">{row}</div>
    );
};

/* 
    Used to create the entire board with the desired pieces

    @params [[ ],] of pieces in entier board of length[] 8
    @return Board component
*/
const Board = ( {board} ) => {
    
    // initializes the return var
    var files = []

    // iterates through the number of rows (8), starts at 7 to match the board index and descends since index 7 is the top-most rank
    for (var x = 7; x >= 0; x--){

        // appends the Ranks component to the return var, with the current row
        files.push(
            <Ranks file={x} setRank={board[x]}></Ranks>
        );
    }

    // returns an array of length 8 inside a div element
    return (
        <div className="chess-board">{files}</div>
    );
}

export default Board;