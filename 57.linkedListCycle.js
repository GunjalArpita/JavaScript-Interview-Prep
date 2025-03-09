class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const hasCycle = (head) => {
    if (!head || !head.next) return false; // Handle empty list or single node case

    let slow = head;
    let fast = head;

    while (fast && fast.next) { // Ensure fast and fast.next are not null
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle
};
let head = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle at pos = 1

console.log(hasCycle(head)); // ✅ Expected output: true

let head2 = new ListNode(1);
let nodeB = new ListNode(2);

head2.next = nodeB;
nodeB.next = head2; // Creates a cycle at pos = 0

console.log(hasCycle(head2)); // ✅ Expected output: true

let head3 = new ListNode(1);
console.log(hasCycle(head3)); // ✅ Expected output: false



// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:Input: head = [3,2,0,-4], pos = 1 ,Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2: Input: head = [1,2], pos = 0 ,Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3: Input: head = [1], pos = -1 ,Output: false
// Explanation: There is no cycle in the linked list.