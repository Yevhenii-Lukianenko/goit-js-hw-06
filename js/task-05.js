const nameInput = document.querySelector('#name-input');
const textTitle = document.querySelector('#name-output');

function changesNameInTitle() {
  if (nameInput.value === '') {
    return (textTitle.textContent = 'Anonymous');
  }
  return (textTitle.textContent = nameInput.value);
}

nameInput.addEventListener('input', changesNameInTitle);
