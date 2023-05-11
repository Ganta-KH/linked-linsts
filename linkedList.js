import Node from "./node.js";

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        let current = this.head;
        while (current.next !== null) current = current.next;
        current.next = new Node(value);
    }

    prepend(value) {
        this.head = new Node(value, this.head);
    }

    size() {
        let current = this.head;
        let s = 0;
        while (current !== null) {
            current = current.next;
            s++;
        }
        return s;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let current = this.head;
        while (current.next != null) current = current.next;
        return current;
    }

    at(index) {
        let current = this.head;
        let count = 0;
        while (count !== index && current !== null) {
            current = current.next;
            count++;
        }
        if (count === index) return current;
        return null;
    }

    pop() {
        let current = this.head;
        const size = this.size() - 1;
        let count = 0;
        while (count < size - 1) {
            current = current.next;
            count++;
        }
        current.next = null;
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return null;
    }

    toString() {
        let current = this.head;
        let str = "";
        while (current !== null) {
            str += `( ${current.value} ) -> `;
            current = current.next;
        }
        str += "null";
        return str;
    }

    toArray() {
        const arr = [];
        let current = this.head;
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

    insertAt(value, index) {
        const size = this.size();
        if (index === 0) this.prepend(value);
        else if (index > 0 && index <= size) {
            let count = 0;
            let current = this.head;
            const newNode = new Node(value);
            while (count !== index - 1) {
                current = current.next;
                count++;
            }
            const nextNode = current.next;
            current.next = newNode;
            newNode.next = nextNode;
        }
    }

    removeAt(index) {
        if (index === 0) this.head = this.head.next;
        else if (index > 0 && index <= this.size()) {
            let last = this.head;
            let current = last.next;
            let count = 1;
            while (count !== index && current != null) {
                last = current;
                current = current.next;
                count++;
            }
            last.next = current.next
        }
    }
}

export default LinkedList;
