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
    if (champA.value.lenght < 2 || champA.value.lenght > 30) {
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

// Une fonction qui vérifie le numéro de téléphone saisie

function verPhone(champPh) {
    var regexP = /^$/;
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
    var sexeOk = verAdresse(f.adresse);
    var mailOk = verEmail(f.mail);
    var phoneOk = verPhone(f.phone);
    if (nomOk && prenomOk && sexeOk && mailOk && phoneOk)
        return true;
    else {
        alert("Veuillez remplir correctement tous les champs");
        return false;
    }
}

// Une fonction demandant au visiteur s'il veut vraiment télécharger mon fichier portfolio

document.addEventListener('DOMContentLoaded', () => {
    const lien = document.getElementById('portfolio');

    lien.addEventListener('click', (e) => {
        const confirmation = confirm(' Voulez-vous vraiment télécharger le Portfolio ?');

        if (!confirmation) {
            e.preventDefault(); // Annule le téléchargement si l'utilisateur clique sur annuler
        } else {
            // Possible de suivre le téléchargement en envoyant une requete au serveur
            console.log('Téléchargement confirmé');
        }
    });
});

// On demande s'il veut télécharger les fichiers du projet c ?

document.addEventListener('DOMContentLoaded', () => {
    const lien = document.getElementById('c');

    lien.addEventListener('click', (e) => {
        const confirmation = confirm(' Voulez-vous vraiment télécharger les fichiers du projet  en langage c ?');

        if (!confirmation) {
            e.preventDefault(); // Annule le téléchargement si l'utilisateur clique sur annuler
        } else {
            // Possible de suivre le téléchargement en envoyant une requete au serveur
            console.log('Téléchargement confirmé');
        }
    });
});

// On demande s'il veut télécharger les fichiers du projet java ?

document.addEventListener('DOMContentLoaded', () => {
    const lien = document.getElementById('java');

    lien.addEventListener('click', (e) => {
        const confirmation = confirm(' Voulez-vous vraiment télécharger les fichiers du projet en langage java ?');

        if (!confirmation) {
            e.preventDefault(); // Annule le téléchargement si l'utilisateur clique sur annuler
        } else {
            // Possible de suivre le téléchargement en envoyant une requete au serveur
            console.log('Téléchargement confirmé');
        }
    });
});


// On demande s'il veut télécharger le fichier de l'attestation de formation ?

document.addEventListener('DOMContentLoaded', () => {
    const lien = document.getElementById('attest');

    lien.addEventListener('click', (e) => {
        const confirmation = confirm(' Voulez-vous vraiment télécharger l\'attestation de formation ? ');

        if (!confirmation) {
            e.preventDefault(); // Annule le téléchargement si l'utilisateur clique sur annuler
        } else {
            // Possible de suivre le téléchargement en envoyant une requete au serveur
            console.log('Téléchargement confirmé');
        }
    });
});