class Stack {
   constructor(){
        this.items = [];
    }
}

const push = async (element) => {
    // push element into the items
    this.items.push(element);
}

const pop = async() => {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}

const peek = async() => {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
}

const isEmpty = async() => {
    return this.items.length == 0;
}

const read = async() => {
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}

