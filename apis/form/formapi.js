const nameField = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const emailField = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

handleSubmit = () => {

  emailField.setCustomValidity("Invalid email.")
  
  console.log(emailField.validity);

  // if (!nameField.checkValidity()) {
  //   const { validationMessage } = nameField;
  //   nameError.innerHTML = validationMessage;
  // }

  // if (!emailField.checkValidity()) {
  //   emailField.setCustomValidity("Invalid email.");
  //   const { validationMessage } = emailField;
  //   emailError.innerHTML = validationMessage;
  // }
}