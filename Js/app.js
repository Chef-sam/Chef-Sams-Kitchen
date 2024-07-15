// To validate the cookies banner, toggle banner
const acceptCookiesButton = document.querySelector('#accept-cookies');
const rejectCookiesButton = document.querySelector('#reject-cookies');
const cookiesBanner = document.querySelector('.cookies-style')

// Toggle Menu
const navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// For Specialities slide show

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    // slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}


// Redirect Button to Reservation
function redirectToReservations() {
    window.location.href = "Reservation.html";
}


// To diplay default slide
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);

    // Check if cookies have already been accepted or rejected
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    const cookiesRejected = localStorage.getItem('cookiesRejected');
    
    if (!cookiesAccepted && !cookiesRejected) {
        cookiesBanner.style.display = 'flex';
    }
})






acceptCookiesButton.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.removeItem('cookiesRejected');
    cookiesBanner.style.display = 'none';
});

rejectCookiesButton.addEventListener('click', function () {
    localStorage.setItem('cookiesRejected', 'true');
    localStorage.removeItem('cookiesAccepted');
    cookiesBanner.style.display = 'none';
});


// document.addEventListener('DOMContentLoaded', function () {
//     const acceptCookiesButton = document.querySelector('#accept-cookies');
//     const rejectCookiesButton = document.querySelector('#reject-cookies');
//     const cookiesBanner = document.querySelector('.cookies-style');

//     // Check if cookies have already been accepted or rejected
//     const cookiesAccepted = localStorage.getItem('cookiesAccepted');
//     const cookiesRejected = localStorage.getItem('cookiesRejected');

//     if (cookiesAccepted === 'true' || cookiesRejected === 'true') {
//         cookiesBanner.style.display = 'none';
//     }

//     acceptCookiesButton.addEventListener('click', function () {
//         localStorage.setItem('cookiesAccepted', 'true');
//         localStorage.removeItem('cookiesRejected');
//         cookiesBanner.style.display = 'none';
//     });

//     rejectCookiesButton.addEventListener('click', function () {
//         localStorage.setItem('cookiesRejected', 'true');
//         localStorage.removeItem('cookiesAccepted');
//         cookiesBanner.style.display = 'none';
//     });
// });
