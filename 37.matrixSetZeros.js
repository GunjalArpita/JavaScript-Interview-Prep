var setZeroes = function(matrix)
{
    let row = matrix.length;
    let col = matrix[0].length;
    let rowSet = new Set();
    let colSet = new Set();
    for(let i=0;i<row;i++)
    {
        for(let j=0;j<col;j++)
        {
            if(matrix[i][j]===0)
            {
                rowSet.add(i);
                colSet.add(j);
            }
        }
    }
    for(let i=0;i<row;i++)
    {
        for(let j=0;j<col;j++)
        {
            if(rowSet.has(i) || colSet.has(j))
            {
                matrix[i][j]=0;
            }
        }
    }
    return matrix;
}
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
//Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
