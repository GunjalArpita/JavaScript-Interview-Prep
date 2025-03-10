class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var addTwoNumbers = function(l1, l2)
{
    let carry = 0;
    let sum = 0;
    let head = new ListNode(0);
    let current = head;
    
    while(l1 || l2)
    {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    
    if(carry > 0)
    {
        current.next = new ListNode(carry);
    }
    
    return head.next; 
};

console.log(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))))); // [7,0,8]
console.log(addTwoNumbers(new ListNode(0), new ListNode(0))); // [0]
console.log(addTwoNumbers(new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, 
new ListNode(9, new ListNode(9))))))),new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))); // [8,9,9,9,0,0,0,1]

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
// and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1: Input: l1 = [2,4,3], l2 = [5,6,4] ,Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2: Input: l1 = [0], l2 = [0] ,Output: [0]

// Example 3: Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] ,Output: [8,9,9,9,0,0,0,1]