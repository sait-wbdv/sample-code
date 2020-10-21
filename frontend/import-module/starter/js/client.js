import { nouns } from './nouns.js';
import { animals } from './animals.js';
import { randUtil } from './random.js';

const init = function(){
  console.log(nouns);
  console.log(animals);
  console.log(randUtil);
}

window.addEventListener('load', init);
