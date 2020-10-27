const languages = {
  en: 'English',
  es: 'Spanish',
  ch: 'Chinese'
};

if (process.argv.length > 2) {
  const pref = process.argv.slice(2);

  if (typeof languages[pref] !== 'undefined'){
    console.log(languages[pref]);
  } else {
    console.log('Language not found.');
  }
} else {
  console.log('No language specified.');
}