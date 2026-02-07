// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

// First hide them
reveals.forEach(el => {
    el.classList.add("hidden");
});

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.remove("hidden");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// Run once on page load
revealOnScroll();
