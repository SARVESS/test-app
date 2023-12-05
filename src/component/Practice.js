
// Basically in JS the class is syntactical sugar to make it simple and more verbose.

// fucntion Person(name, age) {
//     this.name = name;
//     this.age = age;
// } 

// OR

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person("Philip", 32);
const person2 = new Person("Shreya", 26);

const pers = {
    name: "Thomas",
    age: 40,
    hi() {
      console.log("Hi, " + this.name);
    },
  };
  pers.hi();

//Currying transforms a function with multiple arguments into a sequence/series of functions each taking a single argument.

//So a function like func(a,b,d) can be transformed into func(a)(b)(d).

//Currying takes advantage of closures by creating functions that return other functions. Because these functions have persistent memories, we are able to access variables “outside” of nested functions.

function curry(f) {
    return function (a) {
      return function (b) {
       return f(a, b);
      };
    };
}
  
  function sum(a, b) {
    return a + b;
  }

  function multiply(a, b) {
    return a * b;
  }
  
  let curriedSum = curry(sum);
  console.log(curriedSum(1)(2)); // 3
  
  let addOne = curriedSum(1); 
  console.log(addOne(2)); // 3

  let mult = curry(multiply);
  console.log(mult(3)(4)); // 12

   
  // Another way of writing curry function using arrow function.
  function curry(func) {
    return (a) => (b) => func(a, b);
  }
  
  
  function sum(a, b) {
    return a + b;
  }
  const curriedsum = curry(sum);
  console.log(curriedsum(2)(3)); // 5


  // Curry Divide Example
  function curryD(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        }
    }
  }
  function divide(a, b) {
    return a / b;
  }
  const curriedDivide = curryD(divide);
  console.log(curriedDivide(10)(5)); // 2

  // Ways to add prototypal inheritance in an object
  // 1. constructor Function -> above
  // 2. classes -> above
  // 3. Object.create keyword
     
  const person = {
    name: 'Lisa',
    age: 24, 
    color: 'White'
  };
  const me = Object.create(person);

  new Promise(() => {}); // this is promise which receives a callback.

  new Promise(() => {
    try {
     const data = "";
     resolve(data);
    } catch(e) {
      reject(new Error(e));
    }
  })

  Promise.resolve("YAy !!")
     .then(() => {})
     .catch(() => {})

// Unique from array using reduce.
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10, 25, 25];
let uniqueAgeGroup = ageGroup.reduce(function(accumulator, currentValue) {
    if(accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }
    return accumulator;
}, []);
     
// get unique values from ageGroup array.
console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]   

// > We have two kind of copies shallow and deep copies. 
// > Shallow copies are used for "flat" objects and and deep copies are used for "nested" obejcts.
// > By "flat" objects we mean objects that contain only primitive values.
// > For Instance: [1, 2, 3, 4, 5].
// > Nested objects mean objects that contain non-primitive values. 
// > For Instance: ["laptop", { value: 5000 }]. 

// > To create a shallow copy, we can use the following methods: 
//   a. Spread syntax [...] {...}
//   b. Object.assign({}, { a:1, b:2})
//   c. Array.from(new Set(arr))
//   d. Object.create(obj1)
//   e. Array.prototype.concat()

// > And to create a deep copy, we can use:
//   a. JSON.parse(JSON.stringify(obj))
//   b. structureClone(obj)
//   c. Thirs party libraries like lodash.  


// What to prepare for sure in js [By Googling or in this project] -
// 1. closures and IIFEE. - done
// 2. this - done
// 3. currying - done
// 3. Object Prototypes - done
// 4. callback hell - done
// 5. event loop - done
// 6. promises - done
// 8. async await - done
// 9. high order components
// 10. interviewbit questions
// 11. spread operator and objects and array methods - done
// 12. Generator Functions
// 13. Questions like closures and there mcqs.
// 14. setInterval and setTimeout 
// 15. ReactJs Refs
// 16. Eventloop, streams and buffers in nodejs.
// 17. More about nodejs like i/o non-blocking behaviour, callback queues, call stack etc.
// 18. What is nodejs ?

// Merge Two array and remove duplicates in JS
const arr1 = [1, 2, 5, 6];
const arr2 = [3, 1, 4, 6];
const newArr = [...arr1, ...arr2];
const set = new Set(newArr);
const setArray = Array.from(set);
console.log(setArray);


// React Lifecycle Methods -> 
// Mounting Phase -> 
// constructor -> static getDerivedStateFromProps -> render -> ComponentDidMount

// Updating Phase -> 
// static getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapShotBeforeUpdate -> componentDidUpdate

// Unmonting 
// componentWillUnmount

// Inversion of control (IOC) talks about who will initiate the call, whereas Dependency Injection (DI) talks about how one object acquires dependency on another object through abstraction.

 // LINK FOR REACT REFS -
 // https://legacy.reactjs.org/docs/refs-and-the-dom.html