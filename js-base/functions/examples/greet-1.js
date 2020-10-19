function greet(lang) {
  if (lang == 'en') {

    console.log('Hi');

  } else if (lang == 'es') {

    console.log('Hola!');

  } else if (lang === "ch") {
  
    console.log('Nihao!');
  
  } else {

    console.log('language not found');

  }
}

greet('en'); 
greet('es');

console.log(greet);

