const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formFields = event.currentTarget.elements;

  const email = formFields.email.value;
  const password = formFields.password.value;

  const loginFormData = {
    email,
    password,
  };

  if (email === '' || password === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(loginFormData);
  event.currentTarget.reset();
}
