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

    // Append method to add a node at the end of the list
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

    // Method to remove a node at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            console.log("Index out of bounds");
            return;
        }

        let current = this.head;

        // If the node to remove is the head
        if (index === 0) {
            this.head = current.next;
        } else {
            // Find the node just before the one we want to remove
            let previous = null;
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            // Bypass the node at the index
            previous.next = current.next;
        }
        this.size--;
    }

    // Method to print the linked list
    print() {
        if (this.head === null) {
            console.log("The list is empty");
        } else {
            let current = this.head;
            let listValues = "";
            while (current !== null) {
                listValues += `${current.value} -> `;
                current = current.next;
            }
            console.log(listValues + "null");
        }
    }
}

// Example usage:
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log("Original list:");
list.print();  // Output: 10 -> 20 -> 30 -> 40 -> null

// Remove a node at index 2 (which is the value 30)
list.removeAt(2);

console.log("List after removing at index 2:");
list.print();  // Output: 10 -> 20 -> 40 -> null

// Remove a node at index 0 (which is the head, value 10)
list.removeAt(0);

console.log("List after removing at index 0:");
list.print();  // Output: 20 -> 40 -> null
