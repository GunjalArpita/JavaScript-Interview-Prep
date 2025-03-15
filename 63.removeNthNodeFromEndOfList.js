class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var removeNthFromEnd = function(head, n)
{
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    
    for(let i = 1; i <= n + 1; i++)
    {
        first = first.next;
    }
    
    while(first != null)
    {
        first = first.next;
        second = second.next;
    }
    
    second.next = second.next.next;
    
    return dummy.next;
    
};
console.log(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)); // [1,2,3,5]
console.log(removeNthFromEnd(new ListNode(1), 1)); // []

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1: Input: head = [1,2,3,4,5], n = 2 ,Output: [1,2,3,5]
// Example 2:Input: head = [1], n = 1 ,Output: []
// Example 3: Input: head = [1,2], n = 1 ,Output: [1]