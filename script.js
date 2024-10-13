document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

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

    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
      form.submit();
    } else {
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.innerHTML = `<br>${message}`;
    }
  });
});
