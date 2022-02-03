class DNode {
    constructor(data) {
      this.next = null;
      this.data = data;
      this.prev = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    insertAtBeginning(data) {
      let dNode = new DNode(data);
      let current = this.head;
      if (this.head === null) {
        this.head = dNode;
        this.tail = dNode;
        return this.head;
      } else {
        dNode.next = current;
        current.prev = dNode;
        this.head = dNode;
        return this.head;
      }
    }
  
    insertAtEnd(data) {
      let dNode = new DNode(data);
      let current = this.head;
      if (this.head === null) {
        this.head = dNode;
        this.tail = dNode;
        return this.head;
      } else {
        this.tail = this.getTail();
        dNode.prev = this.tail;
        this.tail.next = dNode;
        this.tail = dNode;
        return this.tail;
      }
    }
  
    insertAtGivenPosition(data, location) {
      let current = this.head;
      if (location < 0 || location > this.getlength()) {
        console.log('invalid location');
        return;
      }
      if (location === 0) {
        return this.insertAtBeginning(data);
      }
      if (location === this.getlength()) {
        return this.insertAtEnd(data);
      }
      let count = 0;
      let previous = null;
      while (count !== location) {
        count++;
        previous = current;
        current = current.next;
      }
      let dNode = new DNode(data);
      dNode.next = current;
      previous.next = dNode;
  
      //New
      current.prev = dNode;
      dNode.prev = previous;
      return dNode;
    }
    
    deleteFirstElement(){
      let temp = this.head
      this.head = this.head.next;
      this.head.prev = null;
      return temp;
    }
    
    deletLastElement(){
      this.tail = this.getTail();
      let temp = this.tail
      this.tail = this.tail.prev;
      this.tail.next = null
      return temp;
    }
    
    deleteFromGivenLocation(location) {
      if (location < 0 || location > this.getlength()) {
        console.log('invalid location');
        return;
      }
      if (location === 0) {
        return this.deleteFirstElement();
      }
      if (location === this.getlength()) {
        return this.deletLastElement();
      }
      let current = this.head;
      let count = 0
      while(count !== location) {
        current = current.next
      }
      current.next = current.prev;
      current.prev = current.next.prev;
    }
  
    traverseForward() {
      let current = this.head;
      let arr = []
      while (current) {
        // console.log(current.data);
        arr.push(current.data)
        current = current.next;
      }
      return arr;
    }
  
    traverseBackward() {
      let current = this.getTail();
      while (current) {
        console.log(current.data);
        current = current.prev;
      }
    }
  
    getTail() {
      let current = this.head;
      while (current) {
        this.tail = current;
        current = current.next;
      }
      return this.tail;
    }
  
    getlength() {
      let current = this.head;
      let count = 0;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    getIndex(element) {
      let current = this.head;
      let index = 0;
      while (current && current.data !== element) {
        index++;
        current = current.next;
      }
      if (!current) {
        index = null;
      }
      return index;
    }
  
    isPresent(element) {
      let current = this.head;
      let present = false;
      while (current && current.data !== element) {
        current = current.next;
      }
      if (current) {
        present = true;
      }
      return present;
    }
  
    getHead() {
      return this.head;
    }
  
    isEmpty() {
      if (this.head !== null) {
        return false;
      }
      return true;
    }
  }
  
  let dll = new LinkedList();
  dll.insertAtBeginning(5);
  dll.insertAtBeginning(6);
  dll.insertAtBeginning(7);
  // dll.insertAtBeginning(7)
  // dll.traverse();
  dll.insertAtEnd(10);
  dll.insertAtGivenPosition(100, 2);
  dll.traverseForward();
  dll.getlength()
  // dll.deleteFirstElement()
  //[7,6,100,5,10]
  dll.traverseForward();
  // dll.deletLastElement();
  dll.traverseForward();
  dll.deleteFromGivenLocation(2)
  dll.getlength()
  // dll.traverseBackward();
  