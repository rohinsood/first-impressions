/* 
    Stores different openings with format: [Opening title, Move([list of moves])]
    Move() returns a 3 dimensional array that stores the current board at different moves
*/

import { A, B, C, D, E, F, G, H, Move } from './boardController'

export const bongcloud = ["Bong Cloud", Move([
    [E, 4, "wp5"], 
    [E, 5, "bp5"], 
    [E, 2, "wk1"], 
    [E, 7, "bk1"]
])]; 

export const spanish = ["Spanish", Move([
    [E, 4, "wp5"],
    [E, 5, "bp5"],
    [F, 3, "wn2"],
    [C, 6, "bn1"],
    [B, 5, "wb2"]
])];

export const italian = ["Italian", Move([
    [E, 4, "wp5"],
    [E, 5, "bp5"],
    [F, 3, "wn2"],
    [C, 6, "bn1"],
    [C, 4, "wb2"]
])];

export const sicilianDefense = ["Sicilian Defense", Move([
    [E, 4, "wp5"],
    [C, 5, "bp3"],
])];