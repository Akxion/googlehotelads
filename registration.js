 // registration.js

// Load user data from the JSON file
let userData = [];

async function loadUserData() {
  const response = await fetch('users.json');
  userData = await response.json();
}

// Function to handle user registration
function registerUser() {
  const regPhone = document.getElementById('reg-phone').value;
  const regPassword = document.getElementById('reg-password').value;

  // Check if the phone number is unique
  if (userData.some(user => user.phone === regPhone)) {
    alert('Phone number already registered.');
    return;
  }

  // Add the new user to the userData array
  userData.push({ phone: regPhone, password: regPassword });

  // Update the users.json file with the new data (you'll need a server for this)
  // Then, you can use fetch to send a POST request to your server to update the JSON file.

  alert('Registration successful!');
}

// Add event listener for the registration button
document.getElementById('register-button').addEventListener('click', registerUser);

// Load user data when the page loads
window.addEventListener('load', loadUserData);

