
var MinStack = function() {
    this.stack = [];
    this.min = [];

};


MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.min.length === 0 || val <= this.min[this.min.length - 1]){
        this.min.push(val);
    }

};

MinStack.prototype.pop = function() {
    if(this.stack[this.stack.length - 1] === this.min[this.min.length - 1]){
        this.min.pop();
    }
    this.stack.pop();
};


MinStack.prototype.top = function() {
       return this.stack[this.stack.length - 1];  
};


MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};
 console.log(MinStack);
var obj = new MinStack();   // MinStack { stack: [], min: [] }
obj.push(-2);               // MinStack { stack: [ -2 ], min: [ -2 ] }
obj.push(0);                // MinStack { stack: [ -2, 0 ], min: [ -2, 0 ] }
obj.push(-3);               // MinStack { stack: [ -2, 0, -3 ], min: [ -2, 0, -3 ] }
console.log(obj.getMin());  // -3
obj.pop();                  // MinStack { stack: [ -2, 0 ], min: [ -2, 0 ] }
console.log(obj.top());     // 0
console.log(obj.getMin());  // -2

 



/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

 

// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
// Output
// [null,null,null,null,-3,null,0,-2]
// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2