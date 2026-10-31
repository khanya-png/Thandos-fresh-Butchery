
// MOBILE NAVIGATION MENU

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isOpen);
        hamburger.textContent = isOpen ? "✕" : "☰";
    });
}

// CLOSE MENU WHEN A LINK IS CLICKED

if (navMenu) {
    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");

            if (hamburger) {
                hamburger.textContent = "☰";
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    });
}
