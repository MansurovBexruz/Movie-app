const emailInput = document.querySelector("#login-email") as HTMLInputElement;
const passwordInput = document.querySelector(
  "#login-password"
) as HTMLInputElement;
const loginButton = document.querySelector(".login-btn") as HTMLButtonElement;
const emailMessage = document.querySelector(
  ".email-message"
) as HTMLParagraphElement;
const passwordMessage = document.querySelector(
  ".password-message"
) as HTMLParagraphElement;



const emailRegex = /^[a-zA-Z]{4,}\d+@gmail\.com$/;
const passwordRegex = /^(?=(?:.*\d){2,})(?=(?:.*[a-zA-Z]){4,}).{6,}$/;

loginButton.addEventListener("click", () => {
  const email = emailInput.value.trim(); // 👉 Click paytida qiymatlarni olamiz
  const password = passwordInput.value.trim();

  if (emailRegex.test(email) && passwordRegex.test(password)) {
    console.log(`Email value: ${email}`);
    console.log(`Password value: ${password}`);
    emailMessage.textContent = "Email format is valid.";
    passwordMessage.textContent = "Password format is valid.";
    emailMessage.style.color = "green";
    passwordMessage.style.color = "green";
  } else {
    emailMessage.textContent =
      "Invalid email format. It should be at least 4 letters followed by digits and end with @gmail.com";
    passwordMessage.textContent =
      "Invalid password format. It should be at least 6 characters long, contain at least 4 letters and 2 digits.";
    emailMessage.style.color = "red";
    passwordMessage.style.color = "red";
  }
});
