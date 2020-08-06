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

/*
let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you?");
console.log(first);
 */


/*
when you maintain the tail pointer, the operation is only O(1)
 */
class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //get to the second to last item and set it as new tail
    pop() {
        if(!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        //sets new tail
        this.tail = newTail;
        //severe old tail by setting next as null
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        //returns old tail
        return current;
    }

}

let list = new SinglyLinkedList();
list.push("Hello");
console.log(list);
list.push("Goodbye");
console.log(list);
list.push("Hello Again");
console.log(list);
console.log(list.pop());
console.log(list);
list.push("Hello Again");
console.log(list);
list.pop();
list.pop();
list.pop();
console.log(list);