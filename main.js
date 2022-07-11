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

navLinks.forEach( item => {
    item.addEventListener("click", () => {
        document.querySelector(".dropdown-menu").classList.remove("active");
    });
});

window.addEventListener("scroll", () => {
    document.querySelector(".dropdown-menu").classList.remove("active");
});

// services reveal
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions[0].addEventListener("click", () => {
    answers[0].classList.toggle("answer-active");
    questions[0].classList.toggle("question-active");
});

questions[1].addEventListener("click", () => {
    answers[1].classList.toggle("answer-active");
    questions[1].classList.toggle("question-active");
});

questions[2].addEventListener("click", () => {
    answers[2].classList.toggle("answer-active");
    questions[2].classList.toggle("question-active");
});
