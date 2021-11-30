AOS.init();
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()){
            $("nav").addClass("sticky")
        }else (
            $("nav").removeClass("sticky")
        )
    })
})

// nav
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
