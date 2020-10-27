// Run this file:
// - in the browser
// - from the command line using node

// What do you see? Why?

const a = {
  greeting: "Hello!",
  log: function(){
    const self = this;

    console.log(self.greeting);

    self.greeting = "Hola!"
    
    console.log(self.greeting);
    
    const setGreeting = function(greeting) {
      self.greeting = greeting;
    }

    setGreeting('Nihao!');
    console.log(self.greeting);
  }
}

a.log();
