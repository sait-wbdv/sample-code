// console.log(process.argv);

function greet(lang) {

  if (lang === 'en') {
    console.log("Hello!");
  } else if (lang === "es") {
    console.log("Hola!");
  } else if (lang === "ch") {
    console.log('Nihao!');
  } else {
    console.log('language not defined.');
  }

}

greet(process.argv[2]);