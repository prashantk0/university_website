const closeMenu = document.getElementById("close_menu");
const showMenu = document.getElementById("show_menu");
const navLinks = document.getElementById("nav_Links");

showMenu.addEventListener('click', () => {
    navLinks.style.right = "0px";
})

closeMenu.addEventListener('click', () => {
    navLinks.style.right = "-200px";
    
})