// Attibutions:
// Lorem Picsum
// https://picsum.photos/
const animals = [
  {
    id:     237,
    title:  'Puppy',
    credit: 'André Spieker',
    url:    'https://unsplash.com/photos/8wTPqxlnKM4'
  },
  {
    id:     433,
    title:  'Bear',
    credit: 'Thomas Lefebvre',
    url:    'https://unsplash.com/photos/aRXPJnXQ9lU'
  },
  {
    id:     577,
    title:  'Moose',
    credit: 'Thomas Lefebvre',
    url:    'https://unsplash.com/photos/34mvN5nt1ls'
  },
  {
    id:     582,
    title:  'Coyote',
    credit: 'Levi Saunders',
    url:    'https://unsplash.com/photos/NUMlxTPsznM'
  }
];

// Loop through animals with Array.forEach()
animals.forEach(function(animal){
  console.log(animal.title);
});

// Find a tiger with Array.find()
const foundItem = animals.find(function(animal){
  return animal.id === 593;
});

console.log(foundItem);

// Find all animal photos take by Thomas Lefebvre using Array.filter()

const thomasPhotos = animals.filter(function(animal){
  return animal.credit === 'Thomas Lefebvre';
})
  
console.log(thomasPhotos);

// Make all photo credits lowercase using Array.map()
const lcAnimals = animals.map(function(animal){
  animal.credit = animal.credit.toLowerCase();
  return animal;
})

console.log(lcAnimals);