// Get DOM elements for audio player and preloader
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");

// Toggle settings panel visibility
// Shows/hides the settings container and its toggle buttons
function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

// Control audio playback based on sound toggle switch
// Pauses audio when switch is off, plays when on
function playpause() {
    if (!document.getElementById("switchforsound").checked) {
        audio.pause();
    } else {
        audio.play();
    }
}

// Toggle between light and dark visual modes
// Switches body to light mode and applies color inversion to specific elements
function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function(e) {
        e.classList.toggle("invertapplied");
    });
}

// Initialize page when fully loaded
// Hide preloader and trigger greeting animation
window.addEventListener("load", function() {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

// Get DOM elements for mobile menu functionality
let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");

// Toggle mobile hamburger menu
// Shows/hides mobile menu and animates hamburger icon bars
// Also prevents background scrolling when menu is open
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Hide mobile menu when clicking on menu items
// Closes mobile menu and resets hamburger icon animation
// Restores background scrolling
function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Get all sections and navigation items for scroll spy functionality
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

// Scroll spy functionality - highlights active navigation item based on scroll position
// Updates both desktop and mobile navigation when user scrolls through sections
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    // Update mobile navigation active state
    mobilenavLi.forEach(li => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThismobiletab");
        }
    });

    // Update desktop navigation active state
    navLi.forEach(li => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThistab");
        }
    });
});

// Get back to top button element
let mybutton = document.getElementById("backtotopbutton");

// Show/hide back to top button based on scroll position
// Button appears when user scrolls down more than 400px
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Scroll to top of page when back to top button is clicked
// Works across different browsers
function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Attach scroll function to window scroll event
window.onscroll = function() {
    scrollFunction();
};

// Prevent right-click context menu on images
// Protects images from being easily downloaded
document.addEventListener("contextmenu", function(e) {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);

// Footer pupil eye tracking functionality
// Variables to control eye movement based on mouse position
let Pupils = document.getElementsByClassName("footer-pupil");
let pupilsArr = Array.from(Pupils);
let pupilStartPoint = -10;          // Starting position offset for pupils
let pupilRangeX = 20;              // Maximum horizontal movement range
let pupilRangeY = 15;              // Maximum vertical movement range
let mouseXStartPoint = 0;          // Starting X coordinate of mouse tracking area
let mouseXEndPoint = window.innerWidth;  // Ending X coordinate of mouse tracking area
let currentXPosition = 0;          // Current mouse X position
let fracXValue = 0;                // Fractional value for X movement calculation
let mouseYEndPoint = window.innerHeight; // Ending Y coordinate of mouse tracking area
let currentYPosition = 0;          // Current mouse Y position
let fracYValue = 0;                // Fractional value for Y movement calculation
let mouseXRange = mouseXEndPoint - mouseXStartPoint; // Total X tracking range

// Handle mouse movement to animate footer pupils
// Calculates pupil position based on mouse coordinates and applies transform
const mouseMove = (e) => {
    // Calculate fractional values for smooth movement
    fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange;
    fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint;
    
    // Calculate actual pixel movement for pupils
    let mouseXMovement = pupilStartPoint + fracXValue * pupilRangeX;
    let mouseYMovement = pupilStartPoint + fracYValue * pupilRangeY;
    
    // Apply transform to all pupil elements
    pupilsArr.forEach(pupil => {
        pupil.style.transform = `translate(${mouseXMovement}px, ${mouseYMovement}px)`;
    });
};

// Handle window resize to update mouse tracking area
// Recalculates tracking boundaries when window size changes
const windowResize = (e) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

// Attach event listeners for mouse tracking and window resize
window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);
