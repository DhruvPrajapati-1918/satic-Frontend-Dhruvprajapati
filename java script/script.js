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
