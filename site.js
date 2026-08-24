// =============================================================
// THÈME CLAIR / SOMBRE (persisté, partagé entre toutes les pages)
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
});

// =============================================================
// VALIDATION DU FORMULAIRE DE CONTACT
// =============================================================

function surligne(champ, erreur) {
    champ.style.borderColor = erreur ? "#e74c3c" : "";
}

function verNom(champN) {
    const ok = champN.value.length >= 2 && champN.value.length <= 15;
    surligne(champN, !ok);
    return ok;
}

function verPrenom(champP) {
    const ok = champP.value.length >= 2 && champP.value.length <= 25;
    surligne(champP, !ok);
    return ok;
}

function verAdresse(champA) {
    const ok = champA.value.length >= 2 && champA.value.length <= 30;
    surligne(champA, !ok);
    return ok;
}

function verEmail(champE) {
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    const ok = regex.test(champE.value);
    surligne(champE, !ok);
    return ok;
}

function verPhone(champPh) {
    var regexP = /^\+?[0-9]{8,15}$/;
    const ok = regexP.test(champPh.value);
    surligne(champPh, !ok);
    return ok;
}

function verForm(f) {
    var nomOk = verNom(f.nom);
    var prenomOk = verPrenom(f.prenom);
    var adresseOk = verAdresse(f.adresse);
    var mailOk = verEmail(f.mail);
    var phoneOk = verPhone(f.phone);
    if (nomOk && prenomOk && adresseOk && mailOk && phoneOk) return true;
    alert("Veuillez remplir correctement tous les champs");
    return false;
}

// =============================================================
// CONFIRMATION AVANT TÉLÉCHARGEMENT
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
    const downloadIds = ['portfolio', 'c', 'java', 'attest'];
    const messages = {
        portfolio: 'Voulez-vous vraiment télécharger le portfolio ?',
        c: 'Voulez-vous vraiment télécharger les fichiers du projet en langage C ?',
        java: 'Voulez-vous vraiment télécharger les fichiers du projet en langage Java ?',
        attest: "Voulez-vous vraiment télécharger l'attestation de formation ?"
    };
    downloadIds.forEach((id) => {
        const lien = document.getElementById(id);
        if (!lien) return;
        lien.addEventListener('click', (e) => {
            if (!confirm(messages[id])) e.preventDefault();
        });
    });
});

// =============================================================
// ANIMATION D'APPARITION AU DÉFILEMENT
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal, .details, .visual-showcase, .app-access');
    reveals.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach((el) => observer.observe(el));
});

// =============================================================
// BOUTON "RETOUR EN HAUT"
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('a');
    btn.href = '#top';
    btn.id = 'backToTop';
    btn.setAttribute('aria-label', 'Retour en haut de la page');
    btn.textContent = '↑';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) btn.classList.add('visible');
        else btn.classList.remove('visible');
    });
});

// =============================================================
// VOILE SOMBRE DERRIÈRE LE MENU LATÉRAL MOBILE
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
    const label = document.querySelector('header label.burger, label.burger');
    if (!label) return;
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    label.appendChild(overlay);

    const checkbox = label.querySelector('input[type="checkbox"]');
    if (checkbox) {
        overlay.addEventListener('click', () => { checkbox.checked = false; });
        label.querySelectorAll('.slide a').forEach((a) => {
            a.addEventListener('click', () => { checkbox.checked = false; });
        });
    }
});

// =============================================================
// ONGLETS — SECTION COMPÉTENCES
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    if (!tabButtons.length) return;

    tabButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            tabButtons.forEach((b) => b.classList.remove('active'));
            tabPanels.forEach((p) => p.classList.remove('active'));
            btn.classList.add('active');
            const target = document.getElementById(btn.dataset.tab);
            if (target) target.classList.add('active');
        });
    });
});

// =============================================================
// CARROUSEL (pages projets + onglet Création graphique)
// =============================================================

let slideIndex = 1;
let autoPlayTimer = null;

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        showSlides(slideIndex);
        startAutoPlay();
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }
});

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    if (slides.length === 0) return;
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    slides[slideIndex - 1].style.display = "block";
}

function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => plusSlides(1), 5000);
}

function stopAutoPlay() {
    if (autoPlayTimer) { clearInterval(autoPlayTimer); autoPlayTimer = null; }
}

// =============================================================
// OUVERTURE AUTOMATIQUE D'UN ACCORDÉON CIBLÉ PAR L'URL (#uts, #teg…)
// =============================================================

function openTargetedAccordion() {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (target && target.tagName === 'DETAILS') {
        target.setAttribute('open', '');
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'center' }), 60);
    }
}

document.addEventListener('DOMContentLoaded', openTargetedAccordion);
window.addEventListener('hashchange', openTargetedAccordion);

// =============================================================
// SURVOL DES LISTES TECHNIQUES (pages projets)
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.tech-stack li, .details ul li');
    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = 'var(--accent-2)';
            item.style.fontWeight = 'bold';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '';
            item.style.fontWeight = '';
        });
    });
});
