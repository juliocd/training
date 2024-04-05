/* // For String
class MaxHeap {
    private arr: string[];

    constructor() {
        this.arr = [];
    }

    __swap(i: number, j: number) {
        const temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }

    insert(val: string) {
        if(this.isEmpty()) {
            this.arr.push(val);
            return;
        }

        this.arr.push(val);

        let nodeIdx = this.arr.length - 1;
        let parentIdx = Math.floor((nodeIdx - 1) / 2);
        while(nodeIdx > 0 && this.arr[nodeIdx] > this.arr[parentIdx]) {
            this.__swap(parentIdx, nodeIdx);
            nodeIdx = parentIdx;
            parentIdx = Math.floor((nodeIdx - 1) / 2);
        }
    }

    remove(val: string) {
        if(this.isEmpty()) {
            throw new Error('Heap is empty');
        }

        const valIdx = this.arr.indexOf(val);
        if(valIdx == -1) return;

        this.arr[valIdx] = this.arr[this.arr.length - 1];
        this.arr.pop();

        let nodeIdx = valIdx;
        let leftChildIdx = 2 * nodeIdx + 1;
        let rightChildIdx = 2 * nodeIdx + 2;
        let maxChildIdx = rightChildIdx 
            && (this.arr[rightChildIdx] > this.arr[leftChildIdx] 
                && this.arr[rightChildIdx] > this.arr[nodeIdx])  ? rightChildIdx :
            leftChildIdx && (this.arr[leftChildIdx] > this.arr[nodeIdx]) ? leftChildIdx : -1;
        while(maxChildIdx != -1) {
            this.__swap(maxChildIdx, nodeIdx);
            nodeIdx = maxChildIdx;
            leftChildIdx = 2 * nodeIdx + 1;
            rightChildIdx = 2 * nodeIdx + 2;

            maxChildIdx = rightChildIdx 
                && (this.arr[rightChildIdx] > this.arr[leftChildIdx] 
                    && this.arr[rightChildIdx] > this.arr[nodeIdx])  ? rightChildIdx :
                leftChildIdx && (this.arr[leftChildIdx] > this.arr[nodeIdx]) ? leftChildIdx : -1;
        }

        console.log(this.arr)
    }

    getMax() {
        if(this.isEmpty()) {
            throw new Error('Heap is empty');
        }
        const max = this.arr[0];
        this.remove(max);

        return max;
    }

    peek() {
        if(this.isEmpty()) {
            throw new Error('Heap is empty');
        }
        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length == 0;
    }
}
*/
class WordFrequency{
    private word: string;
    private frequency: number;

    constructor(word: string, frequency: number) {
        this.word = word;
        this.frequency = frequency;
    }

    getWord() {
        return this.word;
    }

    getFrequency() {
        return this.frequency;
    }
}

class MaxHeapWordFrequency {
    private arr: WordFrequency[];

    constructor() {
        this.arr = [];
    }

    __swap(i: number, j: number) {
        const temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }

    insert(val: WordFrequency) {
        if(this.isEmpty()) {
            this.arr.push(val);
            return;
        }

        this.arr.push(val);

        let nodeIdx = this.arr.length - 1;
        let parentIdx = Math.floor((nodeIdx - 1) / 2);
        while(nodeIdx > 0 
            && (this.arr[nodeIdx].getFrequency() > this.arr[parentIdx].getFrequency()
                || (this.arr[nodeIdx].getFrequency() == this.arr[parentIdx].getFrequency() 
                    && this.arr[nodeIdx].getWord() < this.arr[parentIdx].getWord()))) {
            this.__swap(parentIdx, nodeIdx);
            nodeIdx = parentIdx;
            parentIdx = Math.floor((nodeIdx - 1) / 2);
        }
    }

    __maxChildIdx(parentIdx: number) {
        const leftChildIdx = 2 * parentIdx + 1;
        const rightChildIdx = 2 * parentIdx + 2;
        let maxSibling = -1;

        if(rightChildIdx < this.arr.length) {
            maxSibling = this.arr[leftChildIdx].getFrequency() < this.arr[rightChildIdx].getFrequency() 
                ? rightChildIdx : leftChildIdx;
            maxSibling = this.arr[leftChildIdx].getFrequency() == this.arr[rightChildIdx].getFrequency() 
                && this.arr[leftChildIdx].getWord() > this.arr[rightChildIdx].getWord()
                    ? rightChildIdx : maxSibling;
        } else if (leftChildIdx < this.arr.length) {
            maxSibling = leftChildIdx;
        }

        if(maxSibling == -1) return maxSibling;

        if(this.arr[maxSibling].getFrequency() > this.arr[parentIdx].getFrequency()) return maxSibling;
        if(this.arr[maxSibling].getFrequency() == this.arr[parentIdx].getFrequency()
            && this.arr[maxSibling].getWord() < this.arr[parentIdx].getWord()) return maxSibling;

        return -1;
    }

    getMax() {
        if(this.isEmpty()) {
            throw new Error('Heap is empty');
        }

        const max = this.arr[0].getWord();
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr.pop();

        let nodeIdx = 0;
        let maxChildIdx = this.__maxChildIdx(nodeIdx);
        while(maxChildIdx > -1) {
            this.__swap(maxChildIdx, nodeIdx);
            nodeIdx = maxChildIdx;
            maxChildIdx = this.__maxChildIdx(nodeIdx);
        }

        return max;
    }

    peek() {
        if(this.isEmpty()) {
            throw new Error('Heap is empty');
        }
        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length == 0;
    }

    disp() {
        console.log(this.arr)
    }
}

function topKFrequent(words: string[], k: number): string[] {
    const frequency: {[key: string]: number} = {};
    for(const word of words) {
        if(!frequency[word]) {
            frequency[word] = 1;
            continue;
        }
        frequency[word]++;
    }

    const maxHeapWordFrequency = new MaxHeapWordFrequency();
    const keys = Object.keys(frequency);
    for(const key of keys) {
        maxHeapWordFrequency.insert(new WordFrequency(key, frequency[key]));
    }

    const result = [];
    while(!maxHeapWordFrequency.isEmpty() && k > 0) {
        k--;
        result.push(maxHeapWordFrequency.getMax());
    }

    /*const maxHeap = new MaxHeap();
    maxHeap.insert("a");
    console.log(maxHeap.peek());
    maxHeap.insert("b");
    console.log(maxHeap.peek());
    maxHeap.insert("c");
    console.log(maxHeap.peek());
    maxHeap.insert("d");
    console.log(maxHeap.peek());
    console.log('max: ' ,maxHeap.getMax());
    console.log(maxHeap.peek());
    maxHeap.insert("f");
    maxHeap.insert("g");
    maxHeap.insert("h");
    console.log(maxHeap.peek());
    maxHeap.remove("f");*/

    return result;
};