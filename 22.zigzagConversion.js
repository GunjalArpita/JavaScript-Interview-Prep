var convert = function(s, numRows) 
{
    if(numRows === 1) return s;
    let rows = Array.from({length: Math.min(numRows, s.length)}, () => '');
    let goingDown = false;
    let currentRow = 0;
    for(const char of s)
    {
        rows[currentRow] += char;
        if(currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
        currentRow += goingDown ? 1 : -1;
    }
    return rows.join('');

}

console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
console.log(convert("PAYPALISHIRING", 4)); // PINALSIGYAHRPI
console.log(convert("A", 1)); // A

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
 
// Example 1:Input: s = "PAYPALISHIRING", numRows = 3 ,Output: "PAHNAPLSIIGYIR"

// Example 2:Input: s = "PAYPALISHIRING", numRows = 4,Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3: Input: s = "A", numRows = 1 ,Output: "A"