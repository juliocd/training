// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Queue {
    constructor() {
        this.queue = [];
    }
    
    enqueue(value) {
        this.queue.unshift(value);
    }
    
    dequeue() {
        if(this.queue.length == 0) {
            throw new Error('Queue is empty. Action not allowed.');
        }
        
        return this.queue.pop();
    }
    
    fetch() {
        if(this.size == 0) {
            return null;
        }
        
        return this.queue[this.queue.length - 1];
    }
    
    isEmpty() {
        return this.queue.length == 0;
    }
}

class Node {
    constructor(data){
        this.data = data;
        this.left;
        this.right;
    }
    
    insert(value){
        if(value <= this.data) {
            if(!this.left) {
                this.left = new Node(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if(!this.right) {
                this.right = new Node(value);
            } else {
                this.right.insert(value);
            }
        }
    }
    
    contains(value) {
        if(value == this.data) {
            return true;
        } else if(value < this.data) {
            if(!this.left) {
                return false;
            } else {
                return this.left.contains(value);
            }
        } else {
            if(!this.right) {
                return false;
            } else {
                return this.right.contains(value);
            }
        }
    }
    
    dfsPreOrder() {
        console.log(this.data);
        if(this.left) this.left.dfsPreOrder();
        if(this.right) this.right.dfsPreOrder();
    }
    
    dfsInOrder() {
        if(this.left) this.left.dfsInOrder();
        console.log(this.data);
        if(this.right) this.right.dfsInOrder();
    }
    
    dfsPostOrder() {
        if(this.left) this.left.dfsPostOrder();
        if(this.right) this.right.dfsPostOrder();
        console.log(this.data);
    }
    
    bfs() {
        const queue = new Queue();
        queue.enqueue(this);
        
        while(!queue.isEmpty()) {
            const node = queue.dequeue();
            console.log(node.data);
            
            if(node.left) queue.enqueue(node.left)
            if(node.right) queue.enqueue(node.right)
        }
    }
    
    __removeNode(node, parent, newNode) {
        if(parent.left && parent.left == node) {
            parent.left = newNode
        } else {
            parent.right = newNode
        }
    }
    
    delete(value, parent = null) {
        if(value == this.data) {
            if(this.left && this.right) {
                
            } else if (!this.left) {
                this.__removeNode(this, parent, this.right);
            } else if (!this.right) {
                this.__removeNode(this, parent, this.left);
            } else {
                this.__removeNode(this, parent, null);
            }
            
            return true;
        } else if(value < this.data) {
            if(!this.left) {
                return false;
            } else {
                return this.left.delete(value, this);
            }
        } else {
            if(!this.right) {
                return false;
            } else {
                return this.right.delete(value, this);
            }
        }
    }
}

/*const queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(6);
console.log(queue.fetch());
queue.dequeue();
console.log(queue.fetch());
console.log(queue.isEmpty());
queue.enqueue(12);*/

const bts = new Node(11);
console.log('--- INSERT ---');
bts.insert(8);
bts.insert(5);
bts.insert(2);
bts.insert(10);
bts.insert(16);
bts.insert(18);
console.log('--- FIND ---');
console.log(bts.contains(16))
console.log(bts.contains(5))
console.log(bts.contains(160))
console.log(bts.contains(10))
console.log(bts.contains(2))
console.log('--- TRAVERSE ---');
console.log('### DFS ###');
console.log('PreOrder');
bts.dfsPreOrder();
console.log('InOrder');
bts.dfsInOrder()
console.log('PostOrder');
bts.dfsPostOrder()
console.log('### BFS ###');
bts.bfs();
console.log('--- DELETE ---');
console.log('Remove 5')
bts.delete(5);
bts.bfs();
console.log('Remove 16')
bts.delete(16);
bts.bfs();
console.log('Remove 2')
bts.delete(2);
bts.bfs();
console.log('Remove 10')
bts.delete(10);
bts.bfs();






