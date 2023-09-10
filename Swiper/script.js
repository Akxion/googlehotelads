// Variables to track the current image index
let currentIndex = 0;
const maxIndex = 2; // Assuming you have three images

// Function to update the displayed image
function updateImage() {
    const images = document.querySelectorAll('.carousel img');
    images.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.transform = 'scale(1)';
        } else {
            image.style.transform = 'scale(0)';
        }
    });
}

// Function to show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % (maxIndex + 1);
    updateImage();
}

// Function to show the previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + maxIndex + 1) % (maxIndex + 1);
    updateImage();
}

// Event listeners for the carousel buttons
document.querySelector('.prev-button').addEventListener('click', showPrevImage);
document.querySelector('.next-button').addEventListener('click', showNextImage);

// Function to toggle the review section visibility
function toggleReviewSection() {
    const reviewSection = document.querySelector('.review-section');
    if (reviewSection.style.display === 'none' || !reviewSection.style.display) {
        reviewSection.style.display = 'block';
    } else {
        reviewSection.style.display = 'none';
    }
}

// Event listener to show review section when carousel is clicked
document.querySelector('.carousel').addEventListener('click', () => {
    toggleReviewSection();
});

// Function to handle form submission
function submitReview(event) {
    event.preventDefault();

    const telephone = document.getElementById('telephone').value;
    const review = document.getElementById('review').value;
    const rating = parseInt(document.getElementById('rating').value);

    if (isNaN(rating) || rating < 1 || rating > 5) {
        alert('Please enter a valid rating between 1 and 5.');
        return;
    }

    // You can handle the review data as needed, such as sending it to a server or storing it locally.

    // Clear form fields
    document.getElementById('telephone').value = '';
    document.getElementById('review').value = '';
    document.getElementById('rating').value = '';

    alert('Review submitted successfully!');
}

document.getElementById('review-form').addEventListener('submit', submitReview);
