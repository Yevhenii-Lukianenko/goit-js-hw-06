const refInput = document.querySelector('#font-size-control');
const refText = document.querySelector('#text');

refInput.addEventListener('input', () => {
  refText.style.fontSize = refInput.value + 'px';
});
