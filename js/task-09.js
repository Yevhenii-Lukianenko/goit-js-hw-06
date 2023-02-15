function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const colorOption = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  colorOption.textContent = body.style.backgroundColor;
});
