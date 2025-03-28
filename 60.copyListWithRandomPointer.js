class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

var copyRandomList = function(head)
{
    if(!head) return null;
    let map = new Map();
    let current = head;
    while(current)
    {
        map.set(current, new Node(current.val));
        current = current.next;
    }
    current = head;
    while(current)
    {
        map.get(current).next = current.next ? map.get(current.next) : null;
        map.get(current).random = current.random ? map.get(current.random) : null;
        current = current.next;
    }
    return map.get(head);
};
console.log(copyRandomList(new Node(7, new Node(13, new Node(11, new Node(10, new Node(1))))))); // [7,13,11,10,1]
console.log(copyRandomList(new Node(1, new Node(2)))); // [1,2]
console.log(copyRandomList(new Node(3, new Node(3, new Node(3))))); // [3,3,3]
 

// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
// Return the head of the copied linked list.
// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

// Example 1:Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]] ,Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

// Example 2: Input: head = [[1,1],[2,1]] ,Output: [[1,1],[2,1]]

// Example 3: Input: head = [[3,null],[3,0],[3,null]] ,Output: [[3,null],[3,0],[3,null]]



//another solution
// class Node {
//     constructor(val, next = null, random = null) {
//         this.val = val;
//         this.next = next;
//         this.random = random;
//     }
// }

// var copyRandomList = function(head) {
//     if (!head) return null;
//     let map = new Map();
//     let current = head;

//     // First pass: Create a copy of each node and store it in a map
//     while (current) {
//         map.set(current, new Node(current.val));
//         current = current.next;
//     }

//     // Second pass: Assign next and random pointers
//     current = head;
//     while (current) {
//         map.get(current).next = current.next ? map.get(current.next) : null;
//         map.get(current).random = current.random ? map.get(current.random) : null;
//         current = current.next;
//     }

//     return map.get(head);
// };

// // Helper function to print the list
// function printList(head) {
//     let arr = [];
//     let map = new Map();
//     let current = head;
//     while (current) {
//         map.set(current, arr.length);
//         arr.push([current.val, null]); // Initialize random as null
//         current = current.next;
//     }
    
//     // Set the random pointer index in the array
//     current = head;
//     let i = 0;
//     while (current) {
//         if (current.random) {
//             arr[i][1] = map.get(current.random);
//         }
//         i++;
//         current = current.next;
//     }
    
//     console.log(arr);
// }

// // Creating a test case
// let node1 = new Node(7);
// let node2 = new Node(13);
// let node3 = new Node(11);
// let node4 = new Node(10);
// let node5 = new Node(1);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// node2.random = node1; // 13 -> 7
// node3.random = node5; // 11 -> 1
// node4.random = node3; // 10 -> 11
// node5.random = node1; // 1 -> 7

// let copiedList = copyRandomList(node1);
// printList(copiedList); // Prints copied list structure