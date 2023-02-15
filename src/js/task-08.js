const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formFields = event.currentTarget.elements;

  const email = formFields.email.value;
  const password = formFields.password.value;

  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(formData);
  event.currentTarget.reset();
}
