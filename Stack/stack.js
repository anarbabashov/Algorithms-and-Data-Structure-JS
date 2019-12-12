//***** Stack Data Structure *****//

class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;    
    }
}

class Stack {
    constructor() {
        this.root = null;
        this.n = 0;
    }

    isEmpty() {
        return this.n === 0;
    }

    size() {
        return this.n;
    }

    push(value) {
        var oldFirst = this.root;
        this.root = new StackNode(value);
        this.root.next = oldFirst;
        this.n++;
    }

    pop() {
        if(this.isEmpty()) return null;
        var oldFirst = this.root;
        this.root = oldFirst.next;
        this.n--;
        return oldFirst.value;
    }
}

let stackI = new Stack;

stackI.size();
stackI.isEmpty();
stackI.push(1);
stackI.push(2);
stackI.push(3);
stackI.push(true);
stackI.push(false);
stackI.push('String');
stackI.pop();
