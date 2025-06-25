const registerBtn = document.getElementById(
  "register-btn"
) as HTMLButtonElement;
const registerUsername = document.getElementById(
  "register-username"
) as HTMLInputElement;
const registerPassword = document.getElementById(
  "register-password"
) as HTMLInputElement;
const nameInput = document.getElementById("name-input") as HTMLInputElement;
const emailInput = document.getElementById(
  "register-username"
) as HTMLInputElement;
const emailMessage = document.querySelector(".email-message") as HTMLPreElement;
const passwordMessage = document.querySelector(
  ".password-message"
) as HTMLDivElement;
const nameMessage = document.querySelector(".name-message") as HTMLDivElement;

// Register button click
registerBtn.addEventListener("click", () => {
  checkEmail();
  checkPassword();
  checkUserName();
});

const checker = /^(?=.*[a-z])(?=.*[A-Z])(?=(.*\d){2,})(?=.*[^A-Za-z0-9]).{8,}$/;

//////////////////////////////////// Functions ///////////////////////////////////

function checkUserName() {
  const name = nameInput.value;

  if (name.length >= 6 && checker.test(name)) {
    nameInput.style.border = `2px solid #00ff00`;
    nameMessage.textContent = `✅ Name hamma talabga javob bera oladi`;
    nameMessage.style.color = `#ffffff`;
    console.log("Name =", nameInput.value);
  } else {
    nameInput.style.border = `2px solid #ff0000`;
    nameMessage.textContent = `❌ Name hamma talabga javob bera olmaydi`;
    nameMessage.style.color = `#ff0000`;
  }
}

function checkPassword() {
  const password = registerPassword.value;
  if (password.length >= 8 && checker.test(password)) {
    registerPassword.style.border = `2px solid #00ff00`;
    passwordMessage.textContent = `✅ Parol hamma talabga javob bera oladi`;
    passwordMessage.style.color = `#ffffff`;
    console.log("Password =", registerPassword.value);
  } else {
    registerPassword.style.border = `2px solid #ff0000`;
    passwordMessage.textContent = `❌ Parol hamma talabga javob bera olmaydi`;
    passwordMessage.style.color = `#ff0000`;
  }
}

function checkEmail() {
  if (!emailInput) {
    console.error("Email input not found.");
    return false;
  }

  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@gmail\.com$/;

  if (emailRegex.test(email)) {
    emailInput.style.border = `2px solid #00ff00`;
    emailMessage.textContent = `✅ Tog'ri email`;
    emailMessage.style.color = ` #ffffff`;
    console.log("Username =", registerUsername.value);
    return true;
  } else {
    emailInput.style.border = `2px solid #ff0000`;
    emailMessage.textContent = `❌ Xato email`;
    emailMessage.style.color = ` #ff0000`;
    return false;
  }
}
