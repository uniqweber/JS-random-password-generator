const passwordField = document.getElementById("password");
const generateButton = document.getElementById("generate");
const copyMsg = document.getElementById("copyMsg");

function generatePassword() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?/~`-=";

  const allChars = lowerCase + upperCase + numbers + specialChars;
  const length = 12;
  let password = "";

  // Ensure at least one character from each category
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];

  // Fill the remaining characters randomly
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordField.value = password;
}

// Function to copy the password to the clipboard
function copyPassword() {
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(passwordField.value);
  copyMsg.classList.remove("-right-52");
  copyMsg.classList.add("right-5");
  setTimeout(() => {
    copyMsg.classList.remove("right-5");
    copyMsg.classList.add("-right-52");
  }, 1000);
}

generatePassword();
