const languages = {
  en: 'English',
  es: 'Spanish',
  ch: 'Chinese'
};

// Test that an extra argument has been passed from the command line. 
// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
if (process.argv.length > 2) {

  // The first extra argument is always the third element in argv.
  const pref = process.argv[2];

  // Test if the passed argument is in the `languages` array. 
  // https://stackoverflow.com/questions/5113374/javascript-check-if-variable-exists-is-defined-initialized
  if (typeof languages[pref] !== 'undefined'){

    // Language was found!
    console.log(languages[pref]);

  } else {

    // Argument was passed but it wasn't found in `languages`
    console.log('Language not found.');

  }

} else {

  // No extra arguments were passed.
  console.log('No language specified.');

}