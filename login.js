// login.js

// Function to handle user login
function loginUser() {
  const loginPhone = document.getElementById('login-phone').value;
  const loginPassword = document.getElementById('login-password').value;

  const user = userData.find(user => user.phone === loginPhone && user.password === loginPassword);

  if (user) {
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    alert('Login successful!'); // You can redirect to the hotel grid page here.
  } else {
    alert('Invalid phone number or password.');
  }
}

// Add event listener for the login button
document.getElementById('login-button').addEventListener('click', loginUser);
 
