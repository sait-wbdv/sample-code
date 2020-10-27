// Run this file:
// - in the browser
// - from the command line using node

// What do you see? Why?

const a = {
  greeting: "Hello!",
  log: function(){

    console.log(this);
    console.log(this.greeting);

    this.greeting = "Hola!"

    console.log(this.greeting);
    
    // const setGreeting = function(greeting) {
    //   this.greeting = greeting;
    // }

    // setGreeting('Nihao!');
    // console.log(this.greeting);
  }
}

a.log();
