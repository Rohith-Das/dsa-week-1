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

    // Method to remove the middle element of the linked list
    removeMiddle() {
        if (this.size === 0) {
            console.log("The list is empty");
            return;
        }

        if (this.size === 1) {
            this.head = null;
            this.size--;
            return;
        }

        let slow = this.head;
        let fast = this.head;
        let previous = null;

        // Move fast by 2 steps and slow by 1 step
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            previous = slow;
            slow = slow.next;
        }

        // Remove the middle element
        if (previous) {
            previous.next = slow.next;
        }
        this.size--;
    }
}

// Example usage:
let list = new LinkedList();
list.insertAt(1, 0);
list.insertAt(2, 1);
list.insertAt(3, 2);
list.insertAt(4, 3);
list.insertAt(5, 4);

console.log("Before removing middle element:");
list.print();  // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 

list.removeMiddle();

console.log("After removing middle element:");
list.print();  // Output: 1 -> 2 -> 4 -> 5 ->
