class Nodex<T> {
    value: T;
    next: Nodex<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
}
  
class LinkedList<T> {
    head: Nodex<T> | null;
    tail: Nodex<T> | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addToTail(value: T): void {
      const newNode = new Nodex(value);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        this.tail = newNode;
      }
    }
  
    print(): void {
      let current = this.head;
      const values: T[] = [];
  
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log(values.join(' -> '));
    }
}
  
// Usage example:
const linkedList = new LinkedList<number>();
linkedList.addToTail(10);
linkedList.addToTail(20);
linkedList.addToTail(30);
linkedList.print();
