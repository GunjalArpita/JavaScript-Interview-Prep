class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var reverseKGroup = function(head, k)
{
    let count = 0;
    let current = head;
    
    while(current && count != k)
    {
        current = current.next;
        count++;
    }
    
    if(count == k)
    {
        current = reverseKGroup(current, k);
        
        while(count > 0)
        {
            let temp = head.next;
            head.next = current;
            current = head;
            head = temp;
            count--;
        }
        
        head = current;
    }
    
    return head;
};
//error- reverse is not defined- so define it
console.log(reverseKGroup(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)); // [2,1,4,3,5]
console.log(reverseKGroup(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 3)); // [3,2,1,4,5]




// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
// You may not alter the values in the list's nodes, only nodes themselves may be changed.
// Example 1:Input: head = [1,2,3,4,5], k = 2 ,Output: [2,1,4,3,5]

// Example 2:Input: head = [1,2,3,4,5], k = 3 ,Output: [3,2,1,4,5]
 