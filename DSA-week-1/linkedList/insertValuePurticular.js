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

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }

        const newNode = new Node(value);

        if (index === 0) {
            // Insert at the beginning
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous = null;
            let i = 0;

            // Traverse to the position before where we want to insert
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }

            // Insert the node
            newNode.next = current;
            previous.next = newNode;
        }

        this.size++;
    }

    print() {
        if (this.head === null) {
            console.log("The list is empty");
        } else {
            let current = this.head;
            let listValues = "";
            while (current) {
                listValues += `${current.value} -> `;
                current = current.next;
            }
            console.log(listValues + "null");
        }
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(4);
list.append(5);
console.log("Original List:");
list.print();

list.insertAt(3, 2); // Insert 3 at index 2
console.log("After inserting 3 at index 2:");
list.print();
