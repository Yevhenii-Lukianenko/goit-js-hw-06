function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

const arrayOfElements = [];
let valueOfBoxSize = 20;

// ================================= Creates elements =====================================

function createBoxes(amount) {
  // Adds check for input number
  if (amount > 100 || amount < 1) {
    return alert('Incorrect quantity. Please enter a number from 1 to 100.');
  }

  // Main creates function
  for (let index = 0; index < amount; index += 1) {
    const createsElement = document.createElement('div');

    valueOfBoxSize += 10;

    //Adds styles to created elements
    createsElement.style.backgroundColor = getRandomHexColor();
    createsElement.style.width = valueOfBoxSize + 'px';
    createsElement.style.height = valueOfBoxSize + 'px';

    arrayOfElements.push(createsElement);
  }
  boxes.append(...arrayOfElements);
}

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

// ================================= Destroys elements =====================================

function destroyBoxes() {
  boxes.replaceChildren();
  input.value = '';
  arrayOfElements.length = 0;
  valueOfBoxSize = 20;
}

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

// ======================================================================
