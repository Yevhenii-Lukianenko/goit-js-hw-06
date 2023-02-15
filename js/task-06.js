const refInput = document.querySelector("#validation-input");
const dataLength = refInput.getAttribute("data-length");

refInput.addEventListener("blur", validatesInput);

function validatesInput() {
  if (refInput.value.length == dataLength) {
    refInput.classList.remove("invalid");
    return refInput.classList.add("valid");
  }
  refInput.classList.remove("valid");
  return refInput.classList.add("invalid");
}
