const drums = document.querySelectorAll('.drum').length;
let audio = new Audio('sounds/tom-1.mp3');
let innerhtm;

function makeSound(key) {
  switch(key) {
    case 'w':
      audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      break;
  }
}

// For when an image is clicked or a key is pressed
for(let i = 0; i < drums; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    innerhtm = this.innerHTML;
    makeSound(innerhtm);
    btnAnimation(innerhtm);
  });
}

// For when a key is pressed
document.addEventListener('keydown', function(event) {
  makeSound(event.key);
  btnAnimation(event.key);
});

function btnAnimation(currentKey) {
  const activeBtn = document.querySelector('.' + currentKey);
  activeBtn.classList.add('pressed');
  setTimeout(function() {
    activeBtn.classList.remove('pressed');
  }, 100);
}