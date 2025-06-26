const usernameInput = document.querySelector(
  "#register-username"
) as HTMLInputElement;
const emailInput = document.querySelector(
  "#register-email"
) as HTMLInputElement;
const passwordInput = document.querySelector(
  "#register-password"
) as HTMLInputElement;
const registerButton = document.querySelector(
  ".register-btn"
) as HTMLButtonElement;

const usernameMessage = document.querySelector(
  ".username-message"
) as HTMLParagraphElement;
const emailMessage = document.querySelector(
  ".email-message"
) as HTMLParagraphElement;
const passwordMessage = document.querySelector(
  ".password-message"
) as HTMLParagraphElement;

// Regexlar
const emailRegex = /^[a-zA-Z]{4,}\d+@gmail\.com$/;
const passwordRegex = /^(?=(?:.*\d){2,})(?=(?:.*[a-zA-Z]){4,}).{6,}$/;
const usernameRegex = /^[a-zA-Z0-9_]{4,}$/; // Kamida 4 ta belgi: harf, raqam yoki _

registerButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  let isValid = true;

  // Username tekshiruvi
  if (usernameRegex.test(username)) {
    usernameMessage.textContent = "Username is valid.";
    usernameMessage.style.color = "green";
  } else {
    usernameMessage.textContent =
      "Invalid username. Must be at least 4 characters (letters, numbers, or _).";
    usernameMessage.style.color = "red";
    isValid = false;
  }

  // Email tekshiruvi
  if (emailRegex.test(email)) {
    emailMessage.textContent = "Email format is valid.";
    emailMessage.style.color = "green";
  } else {
    emailMessage.textContent =
      "Invalid email format. Must have at least 4 letters, then digits, and end with @gmail.com.";
    emailMessage.style.color = "red";
    isValid = false;
  }

  // Password tekshiruvi
  if (passwordRegex.test(password)) {
    passwordMessage.textContent = "Password format is valid.";
    passwordMessage.style.color = "green";
  } else {
    passwordMessage.textContent =
      "Invalid password. Must be at least 6 characters, 4 letters, and 2 digits.";
    passwordMessage.style.color = "red";
    isValid = false;
  }

  if (isValid) {
    console.log("✅ Registered user info:");
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  }
});
