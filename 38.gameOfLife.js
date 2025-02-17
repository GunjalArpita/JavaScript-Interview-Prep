function gameOfLife(board) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    
    // Create a copy of the original board
    const copyBoard = board.map(row => [...row]);
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let liveNeighbors = 0;
            
            // Count live neighbors
            for (let [dr, dc] of directions) {
                const newRow = r + dr;
                const newCol = c + dc;
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                    liveNeighbors += copyBoard[newRow][newCol];
                }
            }
            
            // Apply the Game of Life rules
            if (copyBoard[r][c] === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    board[r][c] = 0; // Dies
                }
            } else {
                if (liveNeighbors === 3) {
                    board[r][c] = 1; // Becomes alive
                }
            }
        }
    }
}

// Example Usage
let board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];

gameOfLife(board);
console.log(board);

// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the m x n grid board. In this process, births and deaths occur simultaneously.
// Given the current state of the board, update the board to reflect its next state.
// Note that you do not need to return anything.

// Example 1: Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]] ,Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
// Example 2:Input: board = [[1,1],[1,0]] ,Output: [[1,1],[1,1]]