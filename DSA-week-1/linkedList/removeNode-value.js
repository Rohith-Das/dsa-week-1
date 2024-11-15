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

    // Method to remove a node with a specific value
    removeByValue(value) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        // If the node to remove is the head
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        // Traverse the list to find the node with the specified value
        let current = this.head;
        let previous = null;
        while (current !== null && current.value !== value) {
            previous = current;
            current = current.next;
        }

        // If the value was not found in the list
        if (current === null) {
            console.log(`Value ${value} not found in the list`);
            return;
        }

        // Remove the node by updating the previous node's next pointer
        previous.next = current.next;
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

// Remove a node with value 30
list.removeByValue(30);

console.log("List after removing value 30:");
list.print();  // Output: 10 -> 20 -> 40 -> null

// Remove a node with value 10 (head node)
list.removeByValue(10);

console.log("List after removing value 10:");
list.print();  // Output: 20 -> 40 -> null

// Attempt to remove a node with a value not in the list
list.removeByValue(50); // Output: "Value 50 not found in the list"
