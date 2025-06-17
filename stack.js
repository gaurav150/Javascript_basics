class Stack {
    constructor() {
        // Initialize your stack
        this.items = [];
    }
    
    push(element) {
        // Add element to the top
        this.items.push(element)
        return this.items.length;
    }
    
    pop() {
        // Remove and return top element
        if (this.isEmpty()) return undefined;
        return this.items.pop();

    }
    
    peek() {
        // Return top element without removing
        if (this.isEmpty()) return undefined;
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        // Check if stack is empty
        return this.items.length === 0;
    }
    
    size() {
        // Return number of elements
        return this.items.length;
    }
    
    clear() {
        // Remove all elements
        // return this.items.length === 0;
        return this.items = [];
    }
}

// Example usage
const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.clear());
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.clear());
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());