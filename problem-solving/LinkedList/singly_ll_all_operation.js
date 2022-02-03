class Node {
    constructor(value, next = null) {
      this.data = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    insertAtBeginning(data) {
      let node = new Node(data);
      if (this.head == null) {
        this.head = this.tail = node;
        this.head.next = null;
      } else {
        node.next = this.head; // assigning node next to head
        this.head = node; // assigning  node to head
      }
      return this.head;
    }
  
    traverse() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    insertAtEnd(value) {
      let node = new Node(value);
      if (!this.tail) {
        this.head = this.tail = node;
        return node;
      }
      this.tail.next = node;
      this.tail = node;
      return node;
    }
  
    insertAtGivenPosition(value, position) {
      let node = new Node(value);
      let count = 0;
      if (position < 0) {
        return;
      }
      if (position === 0) {
        node.next = this.head;
        this.head = node;
        return node;
      }
      let current = this.head;
      while (count !== position - 1) {
        current = current.next;
        count++;
      }
      let pred = current;
      node.next = pred.next;
      pred.next = node;
      return node;
    }
  
    deleteFirstNode() {
      if (this.head === null) {
        return;
      }
      let temp = this.head;
      this.head = this.head.next;
      return temp;
    }
  
    deleteLastNode() {
      if (this.head === null || this.tail === null) {
        return;
      }
      let pre = null;
      let current = this.head;
      while (current.next) {
        pre = current;
        current = current.next;
      }
      let temp = pre.next;
      pre.next = null;
      return temp;
    }
  
    deleteGivenPositionNode(position) {
      let count = 0;
      if (position < 0) {
        return;
      }
      if (position === 1) {
        let temp = this.head;
        this.head = this.head.next;
        return temp;
      }
      let current = this.head;
      while (count !== position - 1) {
        current = current.next;
        count++;
      }
      let prev = current;
      let temp = prev.next;
      prev.next = temp.next;
      return temp;
    }
  }
  
  let ll = new LinkedList();
  let value = ll.insertAtBeginning(5);
  let value1 = ll.insertAtBeginning(10);
  ll.insertAtEnd(56);
  ll.insertAtGivenPosition(45, 2);
  ll.traverse();
  // console.log('After deletion')
  // ll.deleteFirstNode();
  // ll.traverse();
  // ll.deleteLastNode()
  ll.deleteGivenPositionNode(2);
  ll.traverse();
  