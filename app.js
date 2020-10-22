// Touring the DOM zoo!
// Select the specified parts of the DOM and console.log them
// use document.getElementById, document.getElementsByClassName, document.getElementsByTagName

// // the mammals section
// let mammalsSection = document.getElementById('mammals');
// console.log(mammalsSection);
// // the birds section
// let birdsSection = document.getElementById('birds');
// console.log(birdsSection);
// // all divs with the class animal
// let animals = document.getElementsByClassName('animal');
// console.log(animals);
// // the first animal div
// let firstAnimal = document.getElementsByClassName('animal');
// console.log(firstAnimal[0]);
// // the last animal div
// let lastAnimal = document.getElementsByClassName('animal');
// console.log(lastAnimal.length - 1);
// // all imgs
// let imgs = document.getElementsByTagName('img');
// console.log(imgs);
// // the number of imgs on the page
// console.log(imgs.length);
// // all labels
// let labels = document.getElementsByTagName('label');
// console.log(labels);
// // all the labels, one at a time
// for (let i = 0; i < labels.length; i++) {
//   console.log(labels[i]);
// }


// // Do the zoo tour one more time, this time with document.querySelector and document.querySelectorAll
// // the mammals section
// let mammalsSection = document.querySelector('#mammals');
// console.log(mammalsSection);
// // the birds section
// let birdsSection = document.querySelector('#birds');
// console.log(birdsSection);
// // all divs with the class animal
// let animals = document.querySelectorAll('.animal');
// console.log(animals);
// // the first animal div
// let firstAnimal = document.querySelector('.animal:nth-of-type(1)');
// console.log(firstAnimal);
// // the last animal div
// let lastAnimal = document.getElementsByClassName('animal');
// console.log(lastAnimal.length - 1);
// // all imgs
// let imgs = document.getElementsByTagName('img');
// console.log(imgs);
// // the number of imgs on the page
// console.log(imgs.length);
// // all labels
// let labels = document.getElementsByTagName('label');
// console.log(labels);
// // all the labels, one at a time
// for (let i = 0; i < labels.length; i++) {
//   console.log(labels[i]);
// }


// // Changing parts of the zoo!

// // The owl is the coolest animal. Give the owl img a gold border to show this
// let owl = document.querySelector('#owl');
// owl.style.border = '5px solid gold';

// // Change the label for the bunny to "Stylish Bunny"
// let bunnyLabel = document.querySelector('label[for="bunny"]');
// // bunnyLabel.textContent = 'Stylish Bunny';

// // Once with innerText, then again with innerHTML. When using innerHTML, create a new div inside the label tag
// bunnyLabel.innerHTML = '<div>Stylish Bunny</div>';

// // Give all images a border-radius of 3em
// let allImages = document.querySelectorAll('img');
// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].style.borderRadius = '3em';
// }

// // The parrot is being rotated for a newer, flashier model: https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. Change the img's src to reflect this. Use a direct attribute assignment, not the setAttribute method
// let parrot = document.querySelector('#parrot');
// parrot.src = 'https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

// // Change our sheep image to: https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. Use setAttribute
// document.querySelector('#sheep').setAttribute('src', 'https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

// // Give all labels a text-decoration of underline, a font-size of 2em, and a color of darkgreen. Create a new class to handle this, and apply it to all the labels.
// let labels2 = document.querySelectorAll('label');
// for (let i = 0; i < labels2.length; i++) {
//   labels2[i].classList.add('fancy-label');
// }

// // Remove the animal class from all divs that have it


// Zoo events!
// Put all of our existing js inside of a DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {

});

// attach an event listener to the owl image that logs "You clicked the coolest animal!"
let owl = document.querySelector('#owl');
owl.addEventListener('click', function() {
  console.log('You clicked the coolest animal!');
})

// attach an event listener to each animal that logs "You clicked an animal!"
// let animals = document.querySelectorAll('.animal');
// for (let i = 0; i < animals.length; i++) {
//   animals[i].addEventListener('click', function() {
//     console.log('You clicked an animal!');
//   });
// }

// Change the event listener on each animal to log "You clicked on <the-animal's-name>!". First do this the long way w/ 6 different events, then use a loop and the event object
// let animals = document.querySelectorAll('.animal');
// for (let i = 0; i < animals.length; i++) {
//   animals[i].addEventListener('click', function(event) {
//     console.log(`You clicked on the ${event.target.id}!`);
//   });
// }

// Add an event listener to each animal picture that changes that picture's label to 'Hello!' when the image is clicked on
let animals = document.querySelectorAll('.animal');
for (let i = 0; i < animals.length; i++) {
  animals[i].addEventListener('click', function(event) {
    let label = document.querySelector(`[for="${event.target.id}"]`);
    label.innerText = 'Hello!';
  });
}