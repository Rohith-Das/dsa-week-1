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

    // Method to insert a node at a specific index
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }

        let node = new Node(value);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let previous = null;
            let currentIndex = 0;

            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            node.next = current;
            previous.next = node;
        }
        this.size++;
    }

    // Method to print the linked list
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }
        console.log(result);
    }

    // Method to get the middle element of the linked list
    getMiddle() {
        if (this.size === 0) {
            console.log("The list is empty");
            return null;
        }

        let slow = this.head;
        let fast = this.head;

        // Traverse the list with fast pointer moving two steps and slow pointer moving one step
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        console.log("Middle element:", slow.value);
        return slow.value;
    }
}

// Example usage:
let list = new LinkedList();
list.insertAt(1, 0);
list.insertAt(2, 1);
list.insertAt(3, 2);
list.insertAt(4, 3);
list.insertAt(5, 4);

console.log("Linked list:");
list.print();  // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 

console.log("Middle element:");
list.getMiddle();  // Output: Middle element: 3
