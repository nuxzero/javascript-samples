class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }

  // Peek at the first item.
  peek() {
    return this.array[0];
  }

  // Push an item to the top of the stack.
  push(value) {
    this.array.push(value);
    return this;
  }

  // Pop the top item from the stack.
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();

console.log(myStack.peek());
console.log(myStack.push("google"));
console.log(myStack.push("udemy"));
console.log(myStack.push("discord"));
console.log(myStack.peek());
console.log("==== POP ====");
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
