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

    // Merge sort the linked list
    mergeSort(head) {
        if (!head || !head.next) {
            return head;
        }

        // Step 1: Split the list into two halves
        const middle = this.getMiddle(head);
        const nextToMiddle = middle.next;

        middle.next = null;

        // Step 2: Recursively sort the two halves
        const left = this.mergeSort(head);
        const right = this.mergeSort(nextToMiddle);

        // Step 3: Merge the two sorted halves
        return this.merge(left, right);
    }

    // Helper function to merge two sorted linked lists
    merge(left, right) {
        if (!left) return right;
        if (!right) return left;

        if (left.value < right.value) {
            left.next = this.merge(left.next, right);
            return left;
        } else {
            right.next = this.merge(left, right.next);
            return right;
        }
    }

    // Helper function to find the middle of the linked list
    getMiddle(head) {
        if (!head) return head;

        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    // Function to start the sorting process
    sort() {
        this.head = this.mergeSort(this.head);
    }
}

// Usage example
const list = new LinkedList();
list.insertAt(3, 0); // Insert 3 at index 0
list.insertAt(1, 1); // Insert 1 at index 1
list.insertAt(2, 2); // Insert 2 at index 2

console.log("Before sorting:");
list.print(); // Output: 3 -> 1 -> 2 -> null

list.sort(); // Sort the linked list

console.log("After sorting:");
list.print(); // Output: 1 -> 2 -> 3 -> null
