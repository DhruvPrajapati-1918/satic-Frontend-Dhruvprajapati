console.log("day1 Task loaded");

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-link a');

hamburger.addEventListener('click', () => {
    body.classList.toggle('nav-open');
    body.classList.toggle('no-scroll');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('nav-open');
        body.classList.remove('no-scroll');
    });
});

const form = document.querySelector('.search-form');
const input  = document.getElementById('searchinput');
form.addEventListener("submit",function(event) {
    event.preventDefault();

    const value = input.value.trim();

    if(value === ""){
        alert("please enter a search term");
    } else{
        console.log("searching for: " + value);
    }
});
