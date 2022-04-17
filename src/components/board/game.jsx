import { pieces } from "./boardController"


// Board - [[COL]...ROW]
// Move - [piece, row, col]
// returns null if move is invalid
// returns the new board if move is valid
// Under development
export function checkMove (move, board) {
    var piece = move[0];
    var pieceColor = piece.split("")[0];
    var pieceType = piece.split("")[1];

    var row = move[1];
    var col = move[2];
    var currentRow = 0;
    var currentCol = 0;
    for (var y = 0; y < 8; ++y){
        for (var x = 0; x < 8; ++x){
            if (board[y][x] === piece){
                currentRow = y;
                currentCol = x;
            }
        }
    }
    switch (pieceType){
        case 'p':
            switch (pieceColor){
                case 'b':
                    if (currentRow - 1 !== row){
                        return null;
                    }
                    if (col === currentCol){
                        if (board[row][col]!=="   "){
                            return null;
                        }
                    }
                    else if (board[row][col].split("")[0]!=="w"){
                        return null;
                    }
                    break;
                case 'w':
                    if (currentRow + 1 !== row){
                        return null;
                    }
                    if (col === currentCol){
                        if (board[row][col]!=="   "){
                            return null;
                        }
                    }
                    else if (board[row][col].split("")[0]!=="b"){
                        return null;
                    }
                    break;
                default:
                    return null;
            }
            break;
        case 'r':
            switch (pieceColor){
                case 'b':
                    if (row === currentRow && col !== currentCol){
                        for (var checkCol = currentCol; checkCol < col; checkCol+=(currentCol > col)?(-1):(1)){
                            if (checkCol !== currentCol && board[row][checkCol] !== "   " && checkCol !== col){
                                return null;
                            }
                        }
                        if (board[row][col].split("")[0] === "b"){
                            return null;
                        }
                    }
                    else if (col === currentCol && row !== currentRow){
                        for (var checkRow = currentRow; checkRow < row; checkRow+=(currentRow > row)?(-1):(1)){
                            if (checkRow !== currentRow && board[row][checkRow] !== "   " && checkRow !== col){
                                return null;
                            }
                        }
                        if (board[row][col].split("")[0] === "b"){
                            return null;
                        }
                    }
                    else{
                        return null;
                    }
                    break;
                case 'w':
                    if (row === currentRow && col !== currentCol){
                        for (var checkCol = currentCol; checkCol < col; checkCol+=(currentCol > col)?(-1):(1)){
                            if (checkCol !== currentCol && board[row][checkCol] !== "   " && checkCol !== col){
                                return null;
                            }
                        }
                        if (board[row][col].split("")[0] === "w"){
                            return null;
                        }
                    }
                    else if (col === currentCol && row !== currentRow){
                        for (var checkRow = currentRow; checkRow < row; checkRow+=(currentRow > row)?(-1):(1)){
                            if (checkRow !== currentRow && board[row][checkRow] !== "   " && checkRow !== col){
                                return null;
                            }
                        }
                        if (board[row][col].split("")[0] === "w"){
                            return null;
                        }
                    }
                    else{
                        return null;
                    }
                    break;
                default:
                    return null;
            }
            break;
        case 'n':
            switch (pieceColor){
                case 'b':
                    if (Math.abs(currentRow - row) === 1 && Math.abs(currentCol - col) === 2){
                        if (board[row][col].split("")[0] === "b"){
                            return null;
                        }
                    }
                    else if (Math.abs(currentRow - row) === 2 && Math.abs(currentCol - col) === 1){
                        if (board[row][col].split("")[0] === "b"){
                            return null;
                        }
                    }
                    else{
                        return null;
                    }

                    break;
                case 'w':
                    if (Math.abs(currentRow - row) === 1 && Math.abs(currentCol - col) === 2){
                        if (board[row][col].split("")[0] === "w"){
                            return null;
                        }
                    }
                    else if (Math.abs(currentRow - row) === 2 && Math.abs(currentCol - col) === 1){
                        if (board[row][col].split("")[0] === "w"){
                            return null;
                        }
                    }
                    else{
                        return null;
                    }
                    break;
                default:
                    return null;
            }
            break;
        case 'b':
            if (Math.abs(currentRow - row) !== Math.abs(currentCol - col)){
                return null;
            }
            switch (pieceColor){
                case 'b':
                    var points = []
                    for (var index = 1; index < Math.abs(currentRow - row) - 1; ++index){
                        points.push([index * (currentRow > row)?(-1):(1),index * (currentCol > col)?(-1):(1)])
                    }
                    for (var point = 0; point < points.length; ++point){
                        if (board[points[point][0]][points[point][1]]!=="   "){
                            return null;
                        }
                    }
                    if (board[row][col]==='w'){
                        return null;
                    }
                    break;
                case 'w':
                    var points = []
                    for (var index = 1; index < Math.abs(currentRow - row) - 1; ++index){
                        points.push([index * (currentRow > row)?(-1):(1),index * (currentCol > col)?(-1):(1)])
                    }
                    for (var point = 0; point < points.length; ++point){
                        if (board[points[point][0]][points[point][1]]!=="   "){
                            return null;
                        }
                    }
                    if (board[row][col]==='b'){
                        return null;
                    }
                    break;
                default:
                    return null;
            }
            break;
        case 'q':
            var bishopLike = true;
            var rookLike = true;
            if (Math.abs(currentRow - row) !== Math.abs(currentCol - col)){
                bishopLike = false;
            }
            if (!(row === currentRow && col !== currentCol)){
                rookLike = false;
            }
            if (!(col === currentCol && row !== currentRow)){
                rookLike = false;
            }
            if (bishopLike === rookLike){
                return null;
            }
            switch (pieceColor){
                case 'b':
                    if (bishopLike){
                        var points = []
                        for (var index = 1; index < Math.abs(currentRow - row) - 1; ++index){
                            points.push([index * (currentRow > row)?(-1):(1),index * (currentCol > col)?(-1):(1)])
                        }
                        for (var point = 0; point < points.length; ++point){
                            if (board[points[point][0]][points[point][1]]!=="   "){
                                return null;
                            }
                        }
                        if (board[row][col]==='b'){
                            return null;
                        }
                    }
                    else if (rookLike){
                        if (row === currentRow && col !== currentCol){
                            for (var checkCol = currentCol; checkCol < col; checkCol+=(currentCol > col)?(-1):(1)){
                                if (checkCol !== currentCol && board[row][checkCol] !== "   " && checkCol !== col){
                                    return null;
                                }
                            }
                            if (board[row][col].split("")[0] === "b"){
                                return null;
                            }
                        }
                        else if (col === currentCol && row !== currentRow){
                            for (var checkRow = currentRow; checkRow < row; checkRow+=(currentRow > row)?(-1):(1)){
                                if (checkRow !== currentRow && board[row][checkRow] !== "   " && checkRow !== col){
                                    return null;
                                }
                            }
                            if (board[row][col].split("")[0] === "b"){
                                return null;
                            }
                        }
                        else{
                            return null;
                        }
                    }
                    
                    break;
                case 'w':
                    if (bishopLike){
                        var points = []
                        for (var index = 1; index < Math.abs(currentRow - row) - 1; ++index){
                            points.push([index * (currentRow > row)?(-1):(1),index * (currentCol > col)?(-1):(1)])
                        }
                        for (var point = 0; point < points.length; ++point){
                            if (board[points[point][0]][points[point][1]]!=="   "){
                                return null;
                            }
                        }
                        if (board[row][col]==='w'){
                            return null;
                        }
                    }
                    else if (rookLike){
                        if (row === currentRow && col !== currentCol){
                            for (var checkCol = currentCol; checkCol < col; checkCol+=(currentCol > col)?(-1):(1)){
                                if (checkCol !== currentCol && board[row][checkCol] !== "   " && checkCol !== col){
                                    return null;
                                }
                            }
                            if (board[row][col].split("")[0] === "w"){
                                return null;
                            }
                        }
                        else if (col === currentCol && row !== currentRow){
                            for (var checkRow = currentRow; checkRow < row; checkRow+=(currentRow > row)?(-1):(1)){
                                if (checkRow !== currentRow && board[row][checkRow] !== "   " && checkRow !== row){
                                    return null;
                                }
                            }
                            if (board[row][col].split("")[0] === "w"){
                                return null;
                            }
                        }
                        else{
                            return null;
                        }
                    }
                    break;
                default:
                    return null;
            }
            break;
        case 'k':
            if (Math.abs(col - currentCol) > 1 || Math.abs(row - currentRow) > 1){
                return null;
            }
            switch (pieceColor){
                case 'b':
                    if (board[col][row].split("")[0]==='b'){
                        return null;
                    }
                    break;
                case 'w':
                    if (board[col][row].split("")[0]==='w'){
                        return null;
                    }
                    break;
                default:
                    return null;
            }
            break;
        default:
            return null;
    }
    switch (pieceColor){
        case 'b':
            for (var y = 0; y < 8; ++y){
                for (var x = 0; x < 8; ++x){
                    if (board[y][x] === 'bk1'){
                        currentCol = x;
                        currentRow = y
                        kingPos = [y,x]
                    }
                }
            }
            // Check for rook-like pieces
            for (var xIndex = -8; xIndex <= 8; xIndex += 8){
                for (var yIndex = -8; yIndex <= 8; yIndex += 8){
                    var hit = false;
                    if (yIndex === currentRow && xIndex !== currentCol){
                        for (var checkCol = currentCol; checkCol < xIndex; checkCol+=(currentCol > xIndex)?(-1):(1)){
                            if (checkCol !== currentCol){
                                if (board[yIndex][checkCol][0] !== "b"){
                                    hit = true;
                                }
                                if (hit === false && board[yIndex][checkCol][0] !== "w" && (board[yInex][checkCol][1]==="q" || board[yInex][checkCol][1]==="r")){
                                    return null;
                                }
                                
                            }
                        }
                    }
                    else if (xIndex === currentCol && yIndex !== currentRow){
                        for (var checkRow = currentRow; checkRow < row; checkRow+=(currentRow > row)?(-1):(1)){
                            if (checkCol !== currentCol){
                                if (board[yIndex][checkCol][0] !== "b"){
                                    hit = true;
                                }
                                if (hit === false && board[yIndex][checkCol][0] !== "w" && (board[yInex][checkCol][1]==="q" || board[yInex][checkCol][1]==="r")){
                                    return null;
                                }
                                
                            }
                        }
                    }
                }
            }
            
            // Check for bishop-like pieces
            for (var xIndex = -8; xIndex <= 8; xIndex += 8){
                for (var yIndex = -8; yIndex <= 8; yIndex += 8){
                    var points = []
                    for (var index = 1; index < Math.abs(currentRow - yIndex) - 1; ++index){
                        points.push([index * (currentRow > yIndex)?(-1):(1),index * (currentCol > xIndex)?(-1):(1)])
                    }
                    for (var point = 0; point < points.length; ++point){
                        if (board[points[point][0]][points[point][1]][0]==="w"){
                            if (board[points[point][0]][points[point][1]][1] === "q" || board[points[point][0]][points[point][1]][0] === "b"){
                                return null;
                            }
                        }
                    }
                }
            }
            // Check for knights
            points = [[-2, -1],[-2,1],[2,-1],[2,1],[-1,-2],[1,-2],[-1,2],[1,2]]
            for (var index = 0; index < points.length; ++index){
                if ()
            }
            // Check for other king
            // Check for pawns
            break;
        case 'w': // SHEHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESH
        // BRO THIS IS HUGE
            break;
    }
}