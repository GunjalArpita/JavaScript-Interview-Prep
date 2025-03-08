
function calculate(s) {
    let stack = [];
    let num = 0;
    let sign = 1; // 1 for positive, -1 for negative
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (!isNaN(char) && char !== ' ') { // If it's a digit
            num = num * 10 + parseInt(char);
        }
        
        if (char === '+' || char === '-' || char === '(' || char === ')' || i === s.length - 1) {
            result += sign * num; // Add the last number to the result
            num = 0;
            
            if (char === '+') {
                sign = 1;
            } else if (char === '-') {
                sign = -1;
            } else if (char === '(') {
                stack.push(result); // Store the result so far
                stack.push(sign);   // Store the sign before '('
                result = 0;
                sign = 1;
            } else if (char === ')') {
                result = stack.pop() * result + stack.pop();
            }
        }
    }
    
    return result;
}

// Example test cases:
console.log(calculate("1 + 1"));         // Output: 2
console.log(calculate(" 2-1 + 2 "));     // Output: 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // Output: 23

// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:Input: s = "1 + 1" ,Output: 2

// Example 2: Input: s = " 2-1 + 2 " ,Output: 3

// Example 3: Input: s = "(1+(4+5+2)-3)+(6+8)" ,Output: 23