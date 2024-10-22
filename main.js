let submitButton = document.querySelector(
  ".container__button"
);
let errorMsg = document.querySelector(".container__error");
let emailField = document.querySelector(
  'input[type="email"]'
);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitButton.addEventListener("click", formValidate);

function formValidate() {
  errorMsg.classList.remove("active");
  emailField.classList.remove("active");
  if (emailRegex.test(emailField.value)) {
    let email = emailField.value;
    emailField.value = "";
    // Send email as AJAX POST Request
  } else {
    errorMsg.classList.add("active");
    emailField.classList.add("active");
  }
}
