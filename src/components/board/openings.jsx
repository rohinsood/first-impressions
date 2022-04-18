/* 
    Stores different openings with format: [Opening title, Move([list of moves])]
    Move() returns a 3 dimensional array that stores the current board at different moves
*/

import { A, B, C, D, E, F, G, H, Move } from './boardController'

export const scotch = ["Scotch", Move([
    [E, 4, "wp5"], 
    [E, 5, "bp5"], 
    [F, 3, "wn2"], 
    [C, 6, "bn1"],
    [D, 4, "wp4"],
])]; 

export const ruyLopez = ["Ruy Lopez", Move([
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

export const sicilianDefense = ["Silican Defense", Move([
    [E, 4, "wp5"],
    [C, 5, "bp3"],
    [C, 3, "wn1"],
    [D, 5, "bp4"],
    [D, 4, "wp4"]
])];

export const scandanavianDefense = ["Scandanavian Defense", Move([
    [E, 4, "wp5"],
    [D, 5, "bp4"],
    [D, 5, "wp5"],
    [D, 5, "bq1"],
    [E, 2, "wn2"]
])];

export const kingsIndian = ["Kings Indian Defense", Move([
    [D, 4, "wp4"],
    [G, 6, "bp7"],
    [C, 4, "wp3"],
    [G, 7, "bb2"],
    [C, 2, "wn1"]
])];