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
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});


//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2000,
    delay: 100
});


ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 900, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 1300, origin: 'left', interval: 100 });
// ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 400, origin: 'left', interval: 200 });
ScrollReveal().reveal('.media-icons i', { delay: 400, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 400, origin: 'bottom' });
// ScrollReveal().reveal('.about .description, .contact-right', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.about .description', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 400, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description, .contact-card, .contact-left h2', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 700, origin: 'bottom', interval: 200 });
// ScrollReveal().reveal('.footer ,.group', { delay: 700, origin: 'bottom', interval: 200 });
