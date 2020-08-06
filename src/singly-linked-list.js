/*
Similar to arrays, a data structure consisting of nodes and each node has a value
and a pointer to another node or null.

A data structure that contains a head, tail, and length property. But there is no index.
Each element is a node that stores a data and reference to the next node.
The first element is the head and the last is the tail, last one points to null.

Do not have indices, connected via nodes with a next pointer. Random access is not allowed.
Good for insertion and deletion.
 */

// node is a piece of data - val
//reference to the next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you?");

console.log(first);
