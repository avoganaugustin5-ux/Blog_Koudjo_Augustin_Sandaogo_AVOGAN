document.addEventListener('DOMContentLoaded', () => {
    console.log("Page projet chargée avec succès !");
    
    // Effet de survol sur les listes techniques
    const listItems = document.querySelectorAll('li');
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
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Auto-play optionnel (toutes les 5 secondes)
setInterval(() => {
    plusSlides(1);
}, 5000);