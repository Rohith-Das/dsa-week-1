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

    // Insert at a specific index
    insertAt(value, index) {
        // Check if the index is valid
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }

        const newNode = new Node(value);

        // Insert at the beginning
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // Insert at any other index
            let current = this.head;
            let previous = null;
            let currentIndex = 0;

            // Traverse to the node before the insertion point
            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            // Insert the new node at the desired index
            newNode.next = current;
            previous.next = newNode;
        }

        this.size++;
    }

    // Print the linked list values
    print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let result = "";
        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }
        console.log(result + "null");
    }
}

// Usage example
const list = new LinkedList();
list.insertAt(1, 0); // Insert at the beginning
list.insertAt(3, 1); // Insert at the end (index 1)
list.insertAt(2, 1); // Insert 2 at index 1
list.print(); // Output: 1 -> 2 -> 3 -> null
