function spiralOrder(matrix) {
    let result = [];
    while (matrix.length) {
        result = result.concat(matrix.shift()); // Take the first row
        matrix = matrix[0] ? matrix[0].map((_, i) => matrix.map(row => row[i])).reverse() : []; // Rotate remaining matrix
    }
    return result;
}

// Example usage:
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // Output: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // Output: [1,2,3,4,8,12,11,10,9,5,6,7]



// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]