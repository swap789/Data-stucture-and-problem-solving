class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    
    insertAtBeginning(data){
      let node = new Node(data)
      if(this.head === null) {
        this.head = node;
        return node;
      } else {
        node.next = this.head
        this.head = node;
        return node;
      }
    }
    
    insertAtEnd(data) {
      let node = new Node(data)
      if(this.head === null) {
        this.head = node;
        return node;
      } else {
        let current = this.getTail();
        current.next = node;
        console.log(current)
      }
      node.next = this.head
    }
    
     getTail() {
        let current = this.head;
        let tail = null; 
        while (current) {
          tail = current;
          current = current.next;
        }
        return tail
     }
    
    traverseList() {
      let current = this.head;
      let arr = []
      while(current) {
        arr.push(current.data)
        current = current.next;
      }
      return arr;
    }
  }
  
  let ll = new CircularLinkedList()
  ll.insertAtEnd(5)
  ll.insertAtEnd(10)
  // ll.insertAtEnd(15)
  // ll.insertAtEnd(17)
  ll.traverseList()
  