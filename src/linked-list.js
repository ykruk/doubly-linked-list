const Node = require('./node');

class LinkedList {
    constructor() {
        this.list = [];
        this.length = this.list.length;
        this._head = null;
        this._tail = null;
        
    }

    append(data) {
        if(this.isEmpty()) {
            this.list.push({
                value: data,
                next: null,
                prev:null,
            });
            this._head = new Node(data);
            this._tail = new Node(data);
        } else { 
            let newObj = {
                value: data,
                next: null,
                prev: this.list[this.length-1],
            };
            this.list[this.length-1].next = newObj;
            this.list.push(newObj);
            this._tail = new Node(data);
        }
        this.length = this.list.length;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        return this.list[index].value;
    }

    insertAt(index, data) {
        let newObj = {
            value: data,
            next: this.list[index],
            prev: this.list[index-1],
        };
        if(this.length > 1) {
            this.list[index-1].next = newObj;
            this.list[index].prev = newObj;
        }
        this.list.splice(index, 0, newObj);

        this.length = this.list.length;
        
        return this;
    }

    isEmpty() {
        return this.list.length === 0 ? true : false;
    }

    clear() {
        this.list = [];
        this._head.data = null;
        this._tail.data = null;

        this.length = this.list.length;

        return this;
    }

    deleteAt(index) {
        if(this.length > 1) {
            this.list[index-1].next = this.list[index+1];
            this.list[index+1].prev = this.list[index-1];
        }
        this.list.splice(index, 1);

        this.length = this.list.length;

        return this;
    }

    reverse() {
        this.list.reverse();
        let tempHead = this._head.data;
        let tempTail = this._tail.data;
        this._head.data = tempTail;
        this._tail.data = tempHead;
        
        return this;
    }

    indexOf(data) {
        let test = 0;
        for (let index = 0; index < this.length; index++) {
            const element =  this.list[index];
            if(element.value === data) {
                test = index;
                index = this.length;
            } else {
                test = -1;
            }
        }
        return test;
    }
}

module.exports = LinkedList;