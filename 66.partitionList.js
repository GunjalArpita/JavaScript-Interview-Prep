class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var partition = function(head, x) {
    let beforeHead = new ListNode(0);
    let before = beforeHead;
    let afterHead = new ListNode(0);
    let after = afterHead;
    
    while (head !== null) {
        console.log(`Processing node with value: ${head.val}`);
        if (head.val < x) {
            console.log(`Adding ${head.val} to the 'before' list`);
            before.next = head;
            before = before.next;
        } else {
            console.log(`Adding ${head.val} to the 'after' list`);
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }
    
    after.next = null;
    before.next = afterHead.next;
    
    return beforeHead.next;
};

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
};

// Helper function to convert linked list to an array for easy output verification
const linkedListToArray = (head) => {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
};

// Test cases
let head1 = createLinkedList([1, 4, 3, 2, 5, 2]);
let x1 = 3;
console.log("Output 1:", linkedListToArray(partition(head1, x1))); // Expected: [1,2,2,4,3,5]

let head2 = createLinkedList([2, 1]);
let x2 = 2;
console.log("Output 2:", linkedListToArray(partition(head2, x2))); // Expected: [1,2]


// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
// You should preserve the original relative order of the nodes in each of the two partitions.

// Example 1:Input: head = [1,4,3,2,5,2], x = 3 ,Output: [1,2,2,4,3,5]
// Example 2: Input: head = [2,1], x = 2 ,Output: [1,2]