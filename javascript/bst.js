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
    
    preOrder() {
        console.log(this.data);
        if(this.left) this.left.preOrder();
        if(this.right) this.right.preOrder();
    }
    
    inOrder() {
        if(this.left) this.left.inOrder();
        console.log(this.data);
        if(this.right) this.right.inOrder();
    }
    
    postOrder() {
        if(this.left) this.left.postOrder();
        if(this.right) this.right.postOrder();
        console.log(this.data);
    }
    
    dfsTraverse() {
        console.log(this.data);
        if(this.left) this.left.dfsTraverse();
        if(this.right) this.right.dfsTraverse();
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
bts.preOrder();
console.log('InOrder');
bts.inOrder()
console.log('PostOrder');
bts.postOrder()
