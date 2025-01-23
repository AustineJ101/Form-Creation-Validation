document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username should be at least 3 characters");
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Invalid email address");
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password should contain at least 8 characters");
    }

    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.textContent = "Registration successful!";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});

const texts = ["This is the first","This is the Second", "This is the Third"];

console.log(texts.join("<br>"));


