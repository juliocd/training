// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

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
}

const bts = new Node(11);
bts.insert(8);
bts.insert(5);
bts.insert(10);
bts.insert(16);
bts.insert(18);
console.log(bts.contains(16))
console.log(bts.contains(5))
console.log(bts.contains(160))
console.log(bts.contains(10))
console.log(bts.contains(2))
console.log('PreOrder');
bts.dfsPreOrder();
console.log('InOrder');
bts.dfsInOrder()
console.log('PostOrder');
bts.dfsPostOrder()
