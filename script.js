document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedBackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    let isValid = true;
    let message = "";
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (username.length < 3) {
      isValid = false;
      message = "The username must be at least 3 characters long.";
    }

    if (!email.includes("@")) {
      isValid = false;
      message = "The email must contain an '@' symbol.";
    }

    if (password.length < 8) {
      isValid = false;
      message = "Password must contain at least 8 characters.";
    }

    feedBackDiv.style.display = "block";

    if (isValid) {
      feedBackDiv.style.color = "#28a745";
      feedBackDiv.textContent = "Registration successful!";
      form.submit();
    } else {
      feedBackDiv.style.color = "#dc3545";
      feedBackDiv.innerHTML = `<br>${message}`;
    }
  });
});
