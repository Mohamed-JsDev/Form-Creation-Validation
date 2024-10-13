document.addEventListener("DOMContentLoaded", function () {
  // Form Selection
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Form Submission Event Listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Input Retrieval and Trimming
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation Logic
    let isValid = true; // Initialize validation status
    const messages = []; // Array to store validation messages

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must contain both '@' and '.' characters.");
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must contain at least 8 characters.");
    }

    // Display Feedback
    feedbackDiv.style.display = "block"; // Make feedbackDiv visible

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Success color
      form.submit(); // Submit the form if valid
    } else {
      feedbackDiv.innerHTML = messages.join("<br>"); // Join messages with <br>
      feedbackDiv.style.color = "#dc3545"; // Error color
    }
  });
});
