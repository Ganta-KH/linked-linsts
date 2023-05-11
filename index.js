import LinkedList from "./linkedList.js";
import Node from "./node.js";

// create the node list

const node = new Node(1);
const list = new LinkedList(node);

list.append(2);
list.append(3);
list.append(4);
list.append(5);

// test LinkedList functions

console.log("toArray: ", list.toArray()); // [ 1, 2, 3, 4, 5 ]
console.log("size: ", list.size()); // 5
console.log("head: ", list.getHead().value); // 1
console.log("tail: ", list.getTail().value); // 6
console.log("at(3): ", list.at(3).value); // 4
list.pop();
console.log("pop: ", list.toArray()); // [ 1, 2, 3, 4 ]
console.log("contains(7): ", list.contains(7)); // false
console.log("find(2): ", list.find(2)); // 1
console.log("toString: ", list.toString()); // ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null
list.insertAt(0, 3);
console.log("insertAt(0,3): ", list.toArray()); // [ 1, 2, 3, 0, 4 ]
list.removeAt(2);
console.log("removeAt(2): ", list.toArray()); // [ 1, 2, 0, 4 ]
