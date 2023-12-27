// Code for simple slide in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            // adjust class
            entry.target.classList.add("animation-shown");
        } else {
            // for re-animation
            entry.target.classList.remove("animation-shown")
        }
    });
});

const hiddenElements = document.querySelectorAll(".animation-hidden");
// use the observer to detect elements
hiddenElements.forEach((element) => observer.observe(element));

document.querySelector(".hamburger-checkbox").addEventListener("change", function () {
    menuItemsDropdown.forEach((menuItem) => {
        if (this.checked) {
            menuItem.style.display = "flex"
        }
        else {
            menuItem.style.display = "none"
        }
    });
});

const menuItemsDropdown = document.querySelectorAll(".hamburger-item")