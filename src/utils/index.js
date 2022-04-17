/* 
    stores utility methods
*/

/* 
    this clones a 2d array using Array.component.slice() in order to avoid referencing the board variables

    @params 2d array [[]]
    @return 2d array [[]]
*/
export const clone2DArray = (array) => {
    const clonedArray = [];
    for (let y = 0; y < array.length; y++) {
        clonedArray.push(array[y].slice());
    }
    
    return (clonedArray);
}