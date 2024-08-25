Here is the JavaScript program (script.js) that corresponds to the provided CSS and HTML:


// script.js

// Add event listener to hero button
document.querySelector('.hero button').addEventListener('click', () => {
    alert('Learn More button clicked!');
});

// Add event listener to call-to-action button
document.querySelector('.call-to-action button').addEventListener('click', () => {
    alert('Sign Up button clicked!');
});

// Add event listener to navigation menu items
document.querySelectorAll('header nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add animation to hero section
document.querySelector('.hero').animate([
    { opacity: 0 },
    { opacity: 1 }
], {
    duration: 2000,
    easing: 'ease-in-out'
});

// Add animation to features section
document.querySelector('.features').animate([
    { opacity: 0 },
    { opacity: 1 }
], {
    duration: 2000,
    easing: 'ease-in-out',
    delay: 1000
});

// Add animation to testimonials section
document.querySelector('.testimonials').animate([
    { opacity: 0 },
    { opacity: 1 }
], {
    duration: 2000,
    easing: 'ease-in-out',
    delay: 1500
});


This JavaScript program adds interactivity to the landing page by:

1. Adding event listeners to buttons and navigation menu items.
2. Animating the hero, features, and testimonials sections using the Web Animations API.

Note: This program assumes that the HTML and CSS are already set up as provided earlier.