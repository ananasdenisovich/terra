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



