// ...

// Load user data from the JSON file
let userData = [];

async function loadUserData() {
  const response = await fetch('users.json');
  userData = await response.json();
}

// Function to check if a user is logged in
function checkLoginStatus() {
  const loggedInUser = sessionStorage.getItem('loggedInUser');
  return loggedInUser ? JSON.parse(loggedInUser) : null;
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

// Function to handle user login
function loginUser() {
  const loginPhone = document.getElementById('login-phone').value;
  const loginPassword = document.getElementById('login-password').value;

  const user = userData.find(user => user.phone === loginPhone && user.password === loginPassword);

  if (user) {
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    showHotelGrid();
  } else {
    alert('Invalid phone number or password.');
  }
}

// Function to display the hotel grid when logged in
function showHotelGrid() {
  document.getElementById('registration').style.display = 'none';
  document.getElementById('login').style.display = 'none';

  // You can display the hotel grid here
  const hotelGrid = document.getElementById('hotel-grid');
  hotelGrid.style.display = 'block';

  // Update the user login status
  const loggedInUser = checkLoginStatus();
  if (loggedInUser) {
    console.log('User is logged in:', loggedInUser.phone);
  }
}

// Add event listeners for registration and login buttons
document.getElementById('register-button').addEventListener('click', registerUser);
document.getElementById('login-button').addEventListener('click', loginUser);

// Load user data and check login status when the page loads
window.addEventListener('load', () => {
  loadUserData().then(() => {
    const loggedInUser = checkLoginStatus();
    if (loggedInUser) {
      showHotelGrid();
    }
  });
});


// Sample hotel data (replace with your actual data)
const hotels = [
    {
        "name": "Hotel Parisien",
        "location": "Paris, France",
        "image": "Parisien/hotel1.jpg",
        "rating": 4.5
    },
    // Add data for other hotels here
];

// Function to create hotel cards
function createHotelCard(hotel) {
    const hotelCard = document.createElement('div');
    hotelCard.classList.add('hotel-card');

    const image = document.createElement('img');
    image.src = hotel.image;
    image.alt = hotel.name;

    const name = document.createElement('h2');
    name.textContent = hotel.name;

    const rating = document.createElement('div');
    rating.classList.add('rating');
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        if (i < hotel.rating) {
            star.textContent = '\u2605'; // Filled star
        } else {
            star.textContent = '\u2606'; // Empty star
        }
        rating.appendChild(star);
    }

    hotelCard.appendChild(image);
    hotelCard.appendChild(name);
    hotelCard.appendChild(rating);

    return hotelCard;
}

// Function to populate the hotel grid
function populateHotelGrid() {
    const hotelGrid = document.getElementById('hotel-grid');

    hotels.forEach((hotel) => {
        const hotelCard = createHotelCard(hotel);
        hotelGrid.appendChild(hotelCard);
    });
}

// Function to filter hotels based on user input
function filterHotels() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredHotels = hotels.filter((hotel) => {
        return hotel.name.toLowerCase().includes(searchTerm) || hotel.location.toLowerCase().includes(searchTerm);
    });

    // Clear the current hotel grid
    const hotelGrid = document.getElementById('hotel-grid');
    hotelGrid.innerHTML = '';

    // Populate the hotel grid with filtered hotels
    filteredHotels.forEach((hotel) => {
        const hotelCard = createHotelCard(hotel);
        hotelGrid.appendChild(hotelCard);
    });
}

// Add event listener to the search input for real-time filtering
document.getElementById('search-input').addEventListener('input', filterHotels);

// Call the function to populate the hotel grid when the page loads
window.addEventListener('load', populateHotelGrid);
