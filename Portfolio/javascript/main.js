const navToggle = document.querySelector(".nav-toggle")
const header = document.querySelector(".site-header")
const navLinks = document.querySelectorAll(".nav-menu a")

navToggle.addEventListener("click", () => {

header.classList.toggle("nav-active")

const expanded =
navToggle.getAttribute("aria-expanded") === "true"

navToggle.setAttribute("aria-expanded", !expanded)

})



navLinks.forEach(link => {

link.addEventListener("click", () => {

header.classList.remove("nav-active")

navToggle.setAttribute("aria-expanded", "false")

})

})

const form = document.querySelector(".contact-form");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", (e) => {
e.preventDefault();
let valid = true;

inputs.forEach(input => {
const parent = input.parentElement;
if(input.value.trim() === ""){
parent.classList.add("is-invalid");
valid = false;
}else{
parent.classList.remove("is-invalid");
}

    
if(input.type === "email" && input.value){
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!regex.test(input.value)){
parent.classList.add("is-invalid");
valid = false;
}else{
parent.classList.remove("is-invalid");
}
}
});

if(valid){
alert("Form submitted successfully!");
form.reset();
}
});