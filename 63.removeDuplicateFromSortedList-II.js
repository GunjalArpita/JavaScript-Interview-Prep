class ListNode
{
    constructor(val = 0, next = null)
    {
        this.val = val;
        this.next = next;
    }
}

var deleteDuplicates = function(head)
{
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;
    
    while(current != null)
    {
        while(current.next != null && current.val == current.next.val)
        {
            current = current.next;
        }
        
        if(prev.next == current)
        {
            prev = prev.next;
        }
        else
        {
            prev.next = current.next;
        }
        
        current = current.next;
    }
    
    return dummy.next; 
};
console.log(deleteDuplicates(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))))).val); // [1,2,5]
console.log(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3)))))).val); // [2,3]


// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1: Input: head = [1,2,3,3,4,4,5] ,Output: [1,2,5]
// Example 2:Input: head = [1,1,1,2,3] ,Output: [2,3]