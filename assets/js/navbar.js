// To acquire hamburger button and navbar links class name.
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

/* Adds click event listener for when hamburger button is clicked.
If clicked, the navbar links are displayed. */ 
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})