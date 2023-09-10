 // Sample hotel data (replace with your actual data)
// Sample hotel data (replace with your actual data)
const hotels = [
    {
        "name": "Hotel Parisien",
        "location": "Paris, France", // Add location field
        "image": "Parisien/hotel1.jpg",
        "rating": 5.0
    },
    {
        "name": "Palé Hall",
        "location": "Llandderfel, Gwynedd, Wales", // Add location field
        "image": "Palé Hall/hotel1.jpg",
        "rating": 3.0
    },
    {
        "name": "Belmond Hotel Cipriani",
        "location": "Giudecca, Venice, Italy", // Add location field
        "image": "Belmond Hotel Cipriani/hotel1.jpg",
        "rating": 3.0
    },
    {
        "name": "Les Hortensias du Lac",
        "location": "Hossegor, Aquitaine, France", // Add location field
        "image": "Les Hortensias du Lac/les.jpg",
        "rating": 5.0
    },
    {
        "name": "The Gritti Palace",
        "location": "Venice, Veneto, Italy", // Add location field
        "image": "The Gritti Palace/venice.jpg",
        "rating": 3.0
    },
    {
        "name": "Santa Ponsa",
        "location": "Menorca, Spain ", // Add location field
        "image": "Santa Ponsa/Santa Ponsa.jpg",
        "rating": 3.0
    },
    {
        "name": "Hotel Adlon Kempinski Berlin",
        "location": "Berlin Germany", // Add location field
        "image": "Hotel Adlon Kempinski/Hotel Adlon Kempinski.jpg",
        "rating": 4.0
    },
    {
        "name": "Ballyfin",
        "location": "County Laois, Ireland", // Add location field
        "image": "Ballyfin/Ballyfin.webp",
        "rating": 5.0
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
    
    const location = document.createElement('p'); // Create a <p> element for location
    location.textContent = `Location: ${hotel.location}`; // Set the location text with a label

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
    hotelCard.appendChild(location);
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
