class Stack {
    constructor() {
      this.mainStack = [];
      this.trackStack = [];
      this.size = 0;
    }
    
    push(ele) {
      // if the stack is empty or ele we are pushing is greater than current max push into trackstack.
      if(this.size === 0 || this.getMax() < ele) {
        this.trackStack.push(ele);
      } else {
        this.trackStack.push(this.getMax());
      }
      this.size += 1;
      this.mainStack.push(ele);
    }
    
    pop() {
      if(this.size > 0) { 
        this.mainStack.pop();
        this.trackStack.pop();
        this.size -= 1;
      }
    }
    
    peek() {
      return this.mainStack[this.size - 1];
    }
    
    getMax() {
      return this.trackStack[this.size - 1];
    }
  }
  
  const a = new Stack();
  a.push(10);
  a.push(20);
  a.push(30);
  
  console.log(a.getMax());