//***** Queue Data Structure *****//

class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.n = 0;
    }

    isEmpty() {
        return this.first == null;
    }
    size() {
        return this.n;
    }

    enqueue(value) {
        var oldLast = this.last;
        this.last = new QueueNode(value);
        
        if(this.isEmpty()) {
            this.first = this.last;
        } else {
            oldLast.next = this.last;
        }

        this.n++;
    }

    dequeue() {
        if(this.isEmpty()) {
            this.last = null;
            return null;
        }

        let itemValue = this.first.value;
        this.first = this.first.next;
        this.n--;
        return itemValue;
    }
}

var queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(true);
queue.enqueue(false);
queue.enqueue('String');
queue.size();
queue.dequeue();
