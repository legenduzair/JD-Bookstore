// To acquire hamburger button and navbar links class name.
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

/* Adds click event listener for when hamburger button is clicked.
If clicked, the navbar links are displayed. */ 
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// To acquire anchor tag in navbar links div.
const navLinks = document.querySelector('.navbar-links a');

// If statement to add active class if user is on active page.
if (navLinks.href.includes(`${activePage}`)) {
    navLinks.classList.add('active');
};