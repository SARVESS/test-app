// Factory Pattern

class TailFactory {
    constructor(args) {
      this.tailLength = args.tailLength;
    }
    
    getTailLength() {
      console.log('what is tail length ', this.tailLength);
    }
  }
  
  class TorsoFactory {
    constructor(args) {
      this.torso = args.torso;
    }
    
    getTorso() {
      console.log('what is torso ', this.torso);
    }
  }
  
  class HeadFactory {
    constructor(args) {
      this.head = args.head;
    }
    
    getHead() {
      console.log('what is head ', this.head);
    }
  }
  
  class ReptileFactory {
    constructor(type, args) {
      if(type === "tail") {
        return new TailFactory(args);
      }
      if(type === "torso") {
        return new TorsoFactory(args);
      }
      if(type === "head") {
        return new HeadFactory(args);
      }
    }
  }
  
  const reptileProps = {
    tailLength: 20,
    torso: "shivam",
    head: "round"
  }
  
  const reptile = new ReptileFactory("tail", reptileProps);
  
  reptile.getTailLength();