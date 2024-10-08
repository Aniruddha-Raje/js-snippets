class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

const insertInBetween = async (element, index) => {
    if (index < 0 || index > this.size)
        return console.log("Please enter a valid index.");
    else {
        // creates a new node
        var node = new Node(element);
        var curr, prev;
 
        curr = this.head;
 
        // add the element to the
        // first index
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;
 
            // iterate over the list to find
            // the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}

const insertAtLast = async () => {
    // creates a new node
    var node = new Node(element);
 
    // to store current node
    var current;
 
    // if list is Empty add the
    // element and make it head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
 
        // iterate to the end of the
        // list
        while (current.next) {
            current = current.next;
        }
 
        // add node
        current.next = node;
    }
    this.size++;
}

const insertAtFront = async () => {
    
}

const traverse = async (node) => {
    while(node.next != null){
        console.log("data => ", node.data);

        node.next = node.next;
    }
}

const create = async () => {
    

    let node1 = new Node(2);
    let node2 = new Node(5);
    node1.next = node2;

    let list = new LinkedList(node1);
    console.log(list.head.next.data);
}

const remove = async(index) => {
    if (index < 0 || index >= this.size)
        return console.log("Please Enter a valid index");
    else {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;
 
        // deleting first element
        if (index === 0) {
            this.head = curr.next;
        } else {
            // iterate over the list to the
            // position to removce an element
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // remove the element
            prev.next = curr.next;
        }
        this.size--;
 
        // return the remove element
        return curr.element;
    }
}

const removeData = async(element) => {
    var current = this.head;
    var prev = null;
 
    // iterate over the list
    while (current != null) {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (current.element === element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}

const indexOf = async(element) => {
    var count = 0;
    var current = this.head;
 
    // iterate over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }
 
    // not found
    return -1;
}

const isEmpty = async() => {
    return this.size == 0;
}

const size = async() => {
    console.log(this.size);
}

const read = async() => {
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
}

const run = async () => {
    await create();
}

run();