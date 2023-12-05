console.log('First');
const p = new Promise((resolve, reject) => {
   try {
     console.log('Before First Timeout');
     setTimeout(() => {
       console.log('Inside First Timeout');
       resolve('Hello - 1');
     }, 1000);
     console.log('Before Second Timeout');
     setTimeout(() => {
       console.log('Inside Second Timeout');
       resolve('Hello - 2');
     }, 3000); 
   } catch (e) {
       reject(e);
   }
});
p.then((res) => console.log(res));
console.log('End!!');

// First
// Before First Timeout
// Before Second Timeout
// End!!
// Inside First Timeout
// Hello - 1
// Inside Second Timeout