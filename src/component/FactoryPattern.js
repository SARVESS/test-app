// Factory Pattern

class TailFactory {
    constructor(props) {
      this.tailLength = props.tailLength;
    }
    
    getTailLength() {
      console.log('what is tail length ', this.tailLength);
    }
  }
  
  class TorsoFactory {
    constructor(props) {
      this.torso = props.torso;
    }
    
    getTorso() {
      console.log('what is torso ', this.torso);
    }
  }
  
  class HeadFactory {
    constructor(props) {
      this.head = props.head;
    }
    
    getHead() {
      console.log('what is head ', this.head);
    }
  }
  
  class ReptileFactory {
    constructor(type, props) {
      if(type === "tail") {
        return new TailFactory(props);
      }
      if(type === "torso") {
        return new TorsoFactory(props);
      }
      if(type === "head") {
        return new HeadFactory(props);
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