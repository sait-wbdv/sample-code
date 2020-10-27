// Run this file:
// - in the browser
// - from the command line using node

// What do you see? Why

function a() {
  console.log(this);
  // this.greeting = "Hello World!";
}

const b = function() {
  console.log(this);   
}

a();
b();
console.log(this);
// console.log(greeting); 
