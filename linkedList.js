import Node from "./node";

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        let current = this.head;
        while (current.next !== null) current = current.next;
        current.next = new Node(value);
        this.head = current;
    }

    prepend(value) {
        this.head = new Node(value, this.head)
    }

    size() {
        let current = this.head;
        let s = 0
        while (current !== null) {
            current = current.next
            s++;
        }
        return s;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const list = new LinkedList(a);
list.append(6)

export default LinkedList;
