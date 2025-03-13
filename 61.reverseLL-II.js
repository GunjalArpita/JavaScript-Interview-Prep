class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var reverseBetween = function(head, left, right)
{
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    
    for(let i = 0; i < left - 1; i++)
    {
        prev = prev.next;
    }
    
    let current = prev.next;
    
    for(let i = 0; i < right - left; i++)
    {
        let next = current.next;
        current.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }
    
    return dummy.next;
    
};
console.log(reverseBetween(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2, 4)); // [1,4,3,2,5]
console.log(reverseBetween(new ListNode(5), 1, 1)); // [5]


// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1: Input: head = [1,2,3,4,5], left = 2, right = 4 ,Output: [1,4,3,2,5]

// Example 2:Input: head = [5], left = 1, right = 1 ,Output: [5]