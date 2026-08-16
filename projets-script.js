document.addEventListener('DOMContentLoaded', () => {
    // Effet de survol sur les listes techniques
    const listItems = document.querySelectorAll('.tech-stack li, .details ul li');
    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#3498db';
            item.style.fontWeight = 'bold';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '';
            item.style.fontWeight = '';
        });
    });

    // Animation d'apparition au défilement
    const reveals = document.querySelectorAll('.details, .visual-showcase, .app-access');
    reveals.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach((el) => observer.observe(el));
});

let slideIndex = 1;
let autoPlayTimer = null;

const carousel = document.querySelector('.carousel-container');
if (carousel) {
    showSlides(slideIndex);
    startAutoPlay();
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (slides.length === 0) return;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
        plusSlides(1);
    }, 5000);
}

function stopAutoPlay() {
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
    }
}
