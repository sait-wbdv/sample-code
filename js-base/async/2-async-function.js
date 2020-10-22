console.log("Nihao! Let's party.");

// Declare and assign our callback functions
const partyMe = function(){
  console.log("I love friends! Good thing I'm synchronous.");
}

const futureMe = function(){
  console.log("I'm back from the Event Queue! Where is everyone?");
}

// Invoke a function synchronously
partyMe();

// Invoke a function asynchronously with `setTimeout()`
// This function: 
// 1. sits in the Heap for 2 seconds, then 
// 2. gets added to the Event Queue, then
// 3. the function is invoked when the browser gets to it.
setTimeout(futureMe, 2000);

// The current script ends after this statement is executed.
console.log("Party's over. Adios!");