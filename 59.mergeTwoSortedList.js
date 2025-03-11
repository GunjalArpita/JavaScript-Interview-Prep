//listNode class
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    
    while(l1 && l2)
    {
        if(l1.val < l2.val)
        {
            current.next = l1;
            l1 = l1.next;
        }
        else
        {
            current.next = l2;
            l2 = l2.next;
        }
        
        current = current.next;
    }
    
    current.next = l1 || l2;
    
    return dummy.next;
}

//function call
console.log(mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4))))); // [1,1,2,3,4,4]
console.log(mergeTwoLists(new ListNode(1, new ListNode(3, new ListNode(5))), new ListNode(2, new ListNode(4, new ListNode(6))))); // [1,2,3,4,5,6]
console.log(mergeTwoLists(new ListNode(0), new ListNode(0))); // [0]





// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the 
// nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:Input: list1 = [1,2,4], list2 = [1,3,4] ,Output: [1,1,2,3,4,4]
// Example 2:Input: list1 = [], list2 = [] ,Output: []
// Example 3:Input: list1 = [], list2 = [0] ,Output: [0]