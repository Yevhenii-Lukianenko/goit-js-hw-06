function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const currentColorName = document.querySelector('.color');
const changesColorBtn = document.querySelector('.change-color');

changesColorBtn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  currentColorName.textContent = body.style.backgroundColor;
});
