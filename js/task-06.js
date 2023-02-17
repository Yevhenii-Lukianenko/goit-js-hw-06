const symbolsInput = document.querySelector('#validation-input');
const necessaryAmountOfSymbolsInput = symbolsInput.getAttribute('data-length');

symbolsInput.addEventListener('blur', validatesInput);

function validatesInput() {
  if (symbolsInput.value.length == necessaryAmountOfSymbolsInput) {
    symbolsInput.classList.remove('invalid');
    return symbolsInput.classList.add('valid');
  }
  symbolsInput.classList.remove('valid');
  return symbolsInput.classList.add('invalid');
}
