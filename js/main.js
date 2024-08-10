//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Portfolio section - Modal
const projectModels = document.querySelectorAll(".project-model");
const imgCards = document.querySelectorAll(".img-card");
const projectCloseBtns = document.querySelectorAll(".project-close-btn");

var projectModel = function (modalClick) {
    projectModels[modalClick].classList.add("active");
}

imgCards.forEach((imgCard,i) => {
    imgCard.addEventListener("click", () => {
        projectModel(i);
    });
});

projectCloseBtns.forEach((projectCloseBtn, i) => {
    projectCloseBtn.addEventListener("click", () => {
        projectModels.forEach((projectModelsView) => {
            projectModelsView.classList.remove("active");
        });
    });
});
//Our clients - Swiper

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations