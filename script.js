// Une fonction qui signale à l'utilisateur que le champ rempli ne correspond pas à nos critères

function surligne(champ, erreur) {
    if (erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}

// Une fonction qui vérifie la saisie du nom

function verNom(champN) {
    if (champN.value.length < 2 || champN.value.length > 15) {
        surligne(champN, true);
        return false;
    } else {
        surligne(champN, false);
        return true;
    }
}

// Une fonction qui vérifie la saisie du prénom

function verPrenom(champP) {
    if (champP.value.length < 2 || champP.value.length > 25) {
        surligne(champP, true);
        return false;
    } else {
        surligne(champP, false);
        return true;
    }
}

// Une fonction qui vérifie la saisie de l'adresse

function verAdresse(champA) {
    if (champA.value.length < 2 || champA.value.length > 30) {
        surligne(champA, true);
        return false;
    } else {
        surligne(champA, false);
        return true;
    }
}

// Une fonction qui vérifie l'email (en utilisant une regex)

function verEmail(champE) {
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regex.test(champE.value)) {
        surligne(champE, true);
        return false;
    } else {
        surligne(champE, false);
        return true;
    }
}

// Une fonction qui vérifie le numéro de téléphone saisi

function verPhone(champPh) {
    var regexP = /^\+?[0-9]{8,15}$/;

    if (!regexP.test(champPh.value)) {
        surligne(champPh, true);
        return false;
    } else {
        surligne(champPh, false);
        return true;
    }
}

// Une fonction qui vérifie tout le formulaire

function verForm(f) {
    var nomOk = verNom(f.nom);
    var prenomOk = verPrenom(f.prenom);
    var adresseOk = verAdresse(f.adresse);
    var mailOk = verEmail(f.mail);
    var phoneOk = verPhone(f.phone);
    if (nomOk && prenomOk && adresseOk && mailOk && phoneOk)
        return true;
    else {
        alert("Veuillez remplir correctement tous les champs");
        return false;
    }
}

// Confirmation avant téléchargement de fichiers (portfolio, projets, attestation)

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
            const confirmation = confirm(messages[id]);
            if (!confirmation) {
                e.preventDefault();
            }
        });
    });
});

// Animation d'apparition au défilement (scroll-reveal)

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.mesSections, .mesArticles, .infosComplementaires');
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

// Bouton "retour en haut"

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('a');
    btn.href = '#pageAccueil';
    btn.id = 'backToTop';
    btn.setAttribute('aria-label', 'Retour en haut de la page');
    btn.textContent = '↑';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
});

// Voile sombre derrière le menu latéral quand il est ouvert

document.addEventListener('DOMContentLoaded', () => {
    const label = document.querySelector('header label');
    if (!label) return;
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    label.appendChild(overlay);

    const checkbox = label.querySelector('input[type="checkbox"]');
    if (checkbox) {
        overlay.addEventListener('click', () => {
            checkbox.checked = false;
        });
    }
});
