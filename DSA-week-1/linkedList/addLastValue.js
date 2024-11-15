class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Method to add a new node at the beginning of the list
    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    // Method to add a new node at the end of the list
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode; // If the list is empty, new node becomes the head
        } else {
            let curr = this.head;
            while (curr.next !== null) {
                curr = curr.next; // Traverse to the last node
            }
            curr.next = newNode; // Set the last node's next to the new node
        }
        this.size++;
    }

    // Method to print all values in the list
    print() {
        if (this.head === null) {
            console.log("The list is empty");
        } else {
            let curr = this.head;
            let listValues = "";
            while (curr) {
                listValues += `${curr.value} -> `;
                curr = curr.next;
            }
            console.log(listValues + "null");
        }
    }
}

// Using the LinkedList class
const list = new LinkedList();
list.append(10);  // Adds 10 at the end
list.append(20);  // Adds 20 at the end
list.prepend(5);  // Adds 5 at the beginning
list.append(30);  // Adds 30 at the end
list.print();     // Outputs: 5 -> 10 -> 20 -> 30 -> null
