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

const toastContainer = document.getElementById("toast-container");
const successBtn = document.querySelector(".Trigger");
const errorBtn = document.querySelector(".Trigger2");

function createToast(type, message) {

    const toast = document.createElement("div");
    toast.classList.add("toast", type);

    let icon = type === "success"
        ? '<i class="fa-solid fa-circle-check"></i>'
        : '<i class="fa-solid fa-triangle-exclamation"></i>';

    toast.innerHTML = `
        ${icon}
        <span>${message}</span>
        <button class="close-btn">&times;</button>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        removeToast(toast);
    }, 3000);

    toast.querySelector(".close-btn").addEventListener("click", () => {
        removeToast(toast);
    });
}

function removeToast(toast) {
    toast.classList.remove("show");

    setTimeout(() => {
        toast.remove(); 
    }, 400);
}

successBtn.addEventListener("click", () => {
    createToast("success", "Project saved successfully!");
});

errorBtn.addEventListener("click", () => {
    createToast("error", "Failed to fetch data!");
});

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

function validateName() {
    const value = nameInput.value.trim();

    if (value.length < 3) {
        nameInput.classList.add("error");
        nameInput.classList.remove("success");
        nameError.textContent = "Name must be at least 3 characters long.";
        return false;
    } else {
        nameInput.classList.remove("error");
        nameInput.classList.add("success");
        nameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    const value = emailInput.value.trim();
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!pattern.test(value)) {
        emailInput.classList.add("error");
        emailInput.classList.remove("success");
        emailError.textContent = "Please enter a valid email.";
        return false;
    } else {
        emailInput.classList.remove("error");
        emailInput.classList.add("success");
        emailError.textContent = "";
        return true;
    }
}

function validateMessage() {
    const value = messageInput.value.trim();

    if (value === "") {
        messageInput.classList.add("error");
        messageInput.classList.remove("success");
        messageError.textContent = "Message cannot be empty.";
        return false;
    } else {
        messageInput.classList.remove("error");
        messageInput.classList.add("success");
        messageError.textContent = "";
        return true;
    }
}

function checkFormValidity() {
    const isValid =
        validateName() &&
        validateEmail() &&
        validateMessage();

    submitBtn.disabled = !isValid;
}

nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
messageInput.addEventListener("input", checkFormValidity);

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form Submitted Successfully!");
});
