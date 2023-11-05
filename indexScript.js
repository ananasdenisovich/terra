/*
document.addEventListener('DOMContentLoaded', function () {

  const loginForm = document.getElementById('loginForm');
  const overlay = document.getElementById('overlay');
  const loginFormContainer = document.getElementById('loginFormContainer');
  const loginRegisterButton = document.getElementById('loginRegisterButton');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  loginRegisterButton.addEventListener('click', function () { //displays a login/register button
    loginFormContainer.style.display = 'block';
    overlay.style.pointerEvents = 'auto'; // Enable pointer events
  });

  overlay.addEventListener('click', function (event) { //hides form when area outside it is clicked
    if (event.target === overlay) {
      loginFormContainer.style.display = 'none';
      overlay.style.pointerEvents = 'none'; // Disable pointer events
    }
  });

  loginForm.addEventListener('submit', function (event) { //submits login
    if (usernameInput.value && passwordInput.value) {// Check if the form is valid
      loginFormContainer.style.display = 'none';
      overlay.style.pointerEvents = 'none';
    } else {
      // Display error message or handle other validation logic
    }

    event.preventDefault();
  });
});
*/
$(document).ready(function () {
  const overlay = $('#overlay');
  const loginFormContainer = $('#loginFormContainer');
  const usernameInput = $('#username');
  const passwordInput = $('#password');
  const confirmPasswordInput = $('#confirmPassword');
  const registerButton = $('#registerButton');

  function displayErrorTooltip(element, error) {
    const tooltip = element.siblings('.error-tooltip');
    tooltip.text(error);
  }

  function hideErrorTooltip(element) {
    const tooltip = element.siblings('.error-tooltip');
    tooltip.text('');
  }

  function areInputsValid() {
    const usernameValue = usernameInput.val().trim();
    const passwordValue = passwordInput.val();
    const confirmPasswordValue = confirmPasswordInput.val();

    if (!usernameValue) {
      displayErrorTooltip(usernameInput, 'Username is required');
      return false;
    }
    hideErrorTooltip(usernameInput);

    if (!passwordValue) {
      displayErrorTooltip(passwordInput, 'Password is required');
      return false;
    }
    hideErrorTooltip(passwordInput);

    if (passwordValue !== confirmPasswordValue) {
      displayErrorTooltip(confirmPasswordInput, 'Passwords do not match');
      return false;
    }
    hideErrorTooltip(confirmPasswordInput);

    return true;
  }
  $('[data-toggle="tooltip"]').tooltip();
  function updateRegisterButtonState() {
    registerButton.prop('disabled', !areInputsValid());
  }
  usernameInput.on('input', updateRegisterButtonState);
  passwordInput.on('input', updateRegisterButtonState);
  confirmPasswordInput.on('input', updateRegisterButtonState);
  $('#loginForm').on('submit', function (event) {
    event.preventDefault();
    if (areInputsValid()) {
      loginFormContainer.css('display', 'none');
      overlay.css('pointer-events', 'none');
      alert('User registered successfully');
    }
  });
  function overlayClose() {
    loginFormContainer.css('display', 'none');
    overlay.css('pointer-events', 'none');
  }
  $('#loginRegisterButton').on('click', function () {
    loginFormContainer.css('display', 'block');
    overlay.css('pointer-events', 'auto');
  });
  $('#closeButton').on('click', overlayClose);
});



