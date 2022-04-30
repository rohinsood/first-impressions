/*
    stores constant values and manages the chess board
*/

import { FaChessBishop, FaChessKing, FaChessQueen, FaChessKnight, FaChessPawn, FaChessRook } from 'react-icons/fa';
import { clone2DArray } from '../../utils';

// used to follow proper chess formatting when calling the Move() function
export var A=1;
export var B=2;
export var C=3;
export var D=4;
export var E=5;
export var F=6;
export var G=7;
export var H=8;

/* 
    This dictionary stores the name of a piece as a key and the icon of the conccurent piece
    This helps in declaring the icon React Component when passing the piece as a string in the Move()
*/
export const pieces = {
    "wp1": <FaChessPawn color="white" size="32"/>,
    "wp2": <FaChessPawn color="white" size="32"/>,
    "wp3": <FaChessPawn color="white" size="32" />,
    "wp4": <FaChessPawn color="white" size="32" />,
    "wp5": <FaChessPawn color="white" size="32"/>,
    "wp6": <FaChessPawn color="white" size="32"/>,
    "wp7": <FaChessPawn color="white" size="32"/>,
    "wp8": <FaChessPawn color="white" size="32"/>,
    "wr1": <FaChessRook color="white" size="32"/>,
    "wr2": <FaChessRook color="white" size="32"/>,
    "wn1": <FaChessKnight color="white" size="32"/>,
    "wn2": <FaChessKnight color="white" size="32"/>,
    "wb1": <FaChessBishop color="white" size="32"/>,
    "wb2": <FaChessBishop color="white" size="32"/>,
    "wk1": <FaChessKing color="white" size="32"/>,
    "wq1": <FaChessQueen color="white" size="32"/>,

    "bp1": <FaChessPawn color="black" size="32"/>,
    "bp2": <FaChessPawn color="black" size="32"/>,
    "bp3": <FaChessPawn color="black" size="32"/>,
    "bp4": <FaChessPawn color="black" size="32"/>,
    "bp5": <FaChessPawn color="black" size="32"/>,
    "bp6": <FaChessPawn color="black" size="32"/>,
    "bp7": <FaChessPawn color="black" size="32"/>,
    "bp8": <FaChessPawn color="black" size="32"/>,
    "br1": <FaChessRook color="black" size="32"/>,
    "br2": <FaChessRook color="black" size="32"/>,
    "bn1": <FaChessKnight color="black" size="32"/>,
    "bn2": <FaChessKnight color="black" size="32"/>,
    "bb1": <FaChessBishop color="black" size="32"/>,
    "bb2": <FaChessBishop color="black" size="32"/>,
    "bk1": <FaChessKing color="black" size="32"/>,
    "bq1": <FaChessQueen color="black" size="32"/>
}

/* 
    This changes the state of the board using a list of moves

    @return 3 Dimensional array w/ setup style format
    @param [[row, col, piece]... ]
    @param 'setup'
*/
export function Move (moves) {

    // initial state up of the board
    var setup = [
        ["wr1","wn1","wb1","wq1","wk1","wb2","wn2","wr2"],
        ["wp1","wp2","wp3","wp4","wp5","wp6","wp7","wp8"],
        ["   ","   ","   ","   ","   ","   ","   ","   "],
        ["   ","   ","   ","   ","   ","   ","   ","   "],
        ["   ","   ","   ","   ","   ","   ","   ","   "],
        ["   ","   ","   ","   ","   ","   ","   ","   "],
        ["bp1","bp2","bp3","bp4","bp5","bp6","bp7","bp8"],
        ["br1","bn1","bb1","bq1","bk1","bb2","bn2","br2"]
    ];

    
    // creates the value to return and pushed the clone of setup in order to avoid referencing values
    var allBoards = [];
    allBoards.push(clone2DArray(setup));


    switch (moves[0]) {
        case 'setup': 
            break;
        default:
            // iterates through the number of moves provided
            for (var index = 0; index < moves.length; ++index){
                
                // declares local vars for the different indexes of the current index
                var move = moves[index];
                var col = move[0]; 
                var row = move[1];
                var piece = move[2];

                // initializes local vars for the current position of the desired piece [row, col]
                var pos = []; 

                // declares the currentBoard as the board in its last state
                var currentBoard = clone2DArray(allBoards[allBoards.length-1])
                
                // iterates through the rows and collumns in the board
                rows:
                    for (var y = 0; y < 8; ++y){
                        for (var x = 0; x < 8; ++x){

                            // finds the current piece and declares pos to its index, then breaks out of the for loop
                            if (currentBoard[y][x] === piece){

                                // sets the previous position of the piece to a blank space
                                currentBoard[y][x] = "   ";

                                // breaks out of the board for loops when found
                                break rows;
                            }
                        }
                    }

                // sets the desired position to the piece
                currentBoard[row - 1][col - 1] = piece;
                
                // appends the current baord to the return var
                allBoards.push(currentBoard);
            }
            break; 
    }

    return allBoards;
}

