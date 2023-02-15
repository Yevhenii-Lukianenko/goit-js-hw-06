const refInput = document.querySelector("#name-input");
const refTitle = document.querySelector("#name-output");

function addChangeToName() {
  if (refInput.value === "") {
    return (refTitle.textContent = "Anonymous");
  }
  return (refTitle.textContent = refInput.value);
}

refInput.addEventListener("input", addChangeToName);
