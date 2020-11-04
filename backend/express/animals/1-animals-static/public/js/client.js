console.log("Hello world!");

// Our animal data structure: An array of objects.
const imgList = [
  {
    id:           237,
    title:        'Puppy'
  },
  {
    id:           433,
    title:        'Bear'
  },
  {
    id:           577,
    title:        'Moose'
  },
  {
    id:           582,
    title:        'Coyote'
  },
  {
    id:           593,
    title:        'Tiger'
  },
  {
    id:           659,
    title:        'Husky'
  },
  {
    id:           718,
    title:        'Wolf'
  },
  {
    id:           783,
    title:        'Monkey'
  },
  {
    id:           790,
    title:        'Elk'
  },
  {
    id:           837,
    title:        'Bulldog'
  },
  {
    id:           1024,
    title:        'Bird'
  },
  {
    id:           1025,
    title:        'Pug'
  },
  {
    id:           1074,
    title:        'Big Cat'
  },
  {
    id:           1084,
    title:        'Walrus'
  }
]; 

// Variable where we will store our img tags
let imgTemplate = '';

// Flex container for images
const gallery = document.querySelector('.gallery'); 

// Loop through items using forEach (available on every array)
imgList.forEach(function(item){
  console.log(item);
  imgTemplate += 
    `<figure>
      <a href="${item.title.toLowerCase()}.html">
        <img src="https://picsum.photos/id/${item.id}/250" alt="${item.title}">
      </a>
      <figcaption>Hello ${item.title}!</figcaption>
    </figure>`;
});

// Add HTML img string to gallery container
gallery.innerHTML = imgTemplate;
