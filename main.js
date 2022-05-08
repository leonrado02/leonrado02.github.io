// dropdown menu
const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");

menuBtn.addEventListener("click", () => {
    document.querySelector(".dropdown-menu").classList.add("active");
});

closeBtn.addEventListener("click", () => {
    document.querySelector(".dropdown-menu").classList.remove("active");
});

const navLinks = document.querySelectorAll(".nav li");

navLinks.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".dropdown-menu").classList.remove("active");
    });
});

window.addEventListener("scroll", () => {
    document.querySelector(".dropdown-menu").classList.remove("active");
});

