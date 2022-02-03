class Stack {
    capacity = 5;
    top = -1;
    arr = [];
    constructor() {}
  
    getLength() {
      return this.arr.length;
    }
    
    doubleArrSize() {
      this.capacity =  this.capacity * 2;
      return this.capacity
    }
  
    isEmpty() {
      if (this.top === -1) {
        return true;
      } else {
        return false;
      }
    }
  
    isFull() {
      if (this.top === this.capacity - 1) {
        return true;
      } else {
        return false;
      }
    }
  
    push(data) {
      if (this.isFull()) {
        this.doubleArrSize();
      }
      this.top++;
      this.arr[this.top] = data;
      return this.arr;
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log('Stack is Empty');
      } else {
        this.top--;
        this.arr.length--;
      }
      return this.arr;
    }
  
    peek() {
      if (this.isEmpty()) {
        return 'Stack is Empty';
      } else {
        return this.arr[this.top];
      }
    }
  
    deleteStack() {
      this.top = -1;
      this.arr = [];
      return this.top;
    }
  }
  let stk = new Stack();
  stk.push(4);
  stk.push(5);
  stk.push(9);
  stk.push(100);
  stk.push(90);
  stk.push(500);
  stk.push(500);
  stk.push(500);
  stk.push(500);
  stk.push(500);
  stk.push(500);
  stk.capacity
  // stk.pop();
  // stk.peek();
  // stk.deleteStack();
  // stk.getLength()
  // stk.peek()
  