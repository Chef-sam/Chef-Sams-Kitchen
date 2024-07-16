// Get the accept and reject cookies buttons, and the cookies banner
const acceptCookiesButton = document.querySelector('#accept-cookies');
const rejectCookiesButton = document.querySelector('#reject-cookies');
const cookiesBanner = document.querySelector('.cookies-style');

// Toggle Menu

// Get the navigation links container
const navLinks = document.getElementById("navLinks");

// Function to show the hamburger menu
function showMenu() {
    navLinks.style.right = "0";
}

// Function to hide the hamburger menu
function hideMenu() {
    navLinks.style.right = "-200px";
}

// For Specialities slide show

let slideIndex = 1; // Initialize the slide index

// Function to change slides by n (next/previous)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Reset the slide index if it exceeds the number of slides
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    // Show the current slide and add the active class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Redirect Button to Reservation

// Function to redirect to the reservation page
function redirectToReservations() {
    window.location.href = "Reservation.html";
}

// To display default slide

// Run this function when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex); // Show the default slide

    // Check if cookies have already been accepted or rejected
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    const cookiesRejected = localStorage.getItem('cookiesRejected');

    // Display the cookies banner if neither accepted nor rejected
    if (!cookiesAccepted && !cookiesRejected) {
        cookiesBanner.style.display = 'flex';
    }
});

// To validate the cookies banner, toggle banner

// Add event listener to the accept cookies button
acceptCookiesButton.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'true'); // Set cookiesAccepted to true
    localStorage.removeItem('cookiesRejected'); // Remove cookiesRejected
    cookiesBanner.style.display = 'none'; // Hide the cookies banner
});

// Add event listener to the reject cookies button
rejectCookiesButton.addEventListener('click', function () {
    localStorage.setItem('cookiesRejected', 'true'); // Set cookiesRejected to true
    localStorage.removeItem('cookiesAccepted'); // Remove cookiesAccepted
    cookiesBanner.style.display = 'none'; // Hide the cookies banner
});