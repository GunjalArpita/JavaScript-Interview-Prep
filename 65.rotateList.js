class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
var rotateRight = function(head, k)
{
    if(!head) return null;
    let length = 1;
    let tail = head;
    
    while(tail.next)
    {
        length++;
        tail = tail.next;
    }
    
    k = k % length;
    tail.next = head;
    
    for(let i = 0; i < length - k; i++)
    {
        tail = tail.next;
    }
    
    head = tail.next;
    tail.next = null;
    
    return head;
};
console.log(rotateRight(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)); // [4,5,1,2,3]
console.log(rotateRight(new ListNode(0, new ListNode(1, new ListNode(2))), 4)); // [2,0,1]
// Compare this snippet from 61.rotateList.js:

// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:Input: head = [1,2,3,4,5], k = 2 ,Output: [4,5,1,2,3]
// Example 2:Input: head = [0,1,2], k = 4 ,Output: [2,0,1]