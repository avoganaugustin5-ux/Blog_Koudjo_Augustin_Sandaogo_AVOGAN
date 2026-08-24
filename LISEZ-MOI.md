# Nouveau site — instructions d'installation

## Ce qui a changé

Le site est passé d'une seule longue page à une **architecture multi-pages** :
chaque section a maintenant sa propre page, professionnelle et dynamique, plus une
page d'accueil qui sert de vitrine et redirige vers elles.

| Page | Contenu |
|---|---|
| `index.html` | Accueil / vitrine (hero + cartes de navigation + projets à la une) |
| `profil.html` | Informations personnelles |
| `formations.html` | Parcours scolaire et universitaire (timeline) |
| `competences.html` | Compétences (onglets : programmation, graphisme, montage vidéo) |
| `projets.html` | Grille des 8 projets |
| `contact.html` | Formulaire et coordonnées |
| `references.html` | Détails sur les sigles / établissements cités (accordéon) |
| `wordpress-uts.html` | **Nouvelle page** : la copie WordPress du site UTS (uts.infinityfreeapp.com) |
| `app-uts.html`, `chat-reseau.html`, `gestion-ecole.html`, `hotel-java.html`, `rdv-medicaux.html`, `stage-dsi.html`, `unibukina-hub.html` | Tes pages projets existantes, mises à jour vers le nouveau design |

Deux fichiers remplacent tous les anciens CSS/JS :
- **`site.css`** remplace `style.css` ET `projets-style.css`
- **`site.js`** remplace `script.js` ET `projets-script.js`

Un bouton ☀️/🌙 en haut à droite bascule entre thème clair et sombre sur
**toutes** les pages, et le choix est mémorisé (localStorage).

## Comment installer

1. Dans ton dossier `AVOGAN-Koudjo`, **supprime** les anciens fichiers :
   `style.css`, `projets-style.css`, `script.js`, `projets-script.js`
   (et l'ancien `index.html` à une seule page).
2. Copie tous les fichiers de ce dossier à la racine de `AVOGAN-Koudjo`
   (là où se trouvent déjà tes dossiers `images/` et `Documents/`).
3. Ne touche pas à `images/` et `Documents/` — ils sont réutilisés tels quels
   par les nouvelles pages (mêmes noms de fichiers qu'avant).
4. Ouvre `index.html` dans un navigateur pour vérifier que tout s'affiche bien
   avec tes vraies images.

## Nouvelle page à alimenter

`wordpress-uts.html` présente ta copie WordPress du site de l'UTS
(https://uts.infinityfreeapp.com). Le texte est rédigé à partir de ce que tu
avais déjà indiqué sur ton stage — relis-le et ajuste les détails techniques
si besoin (thème utilisé, plugins, etc.), je n'ai pas pu visiter le site en
direct pour vérifier les détails exacts.

## Petit rappel

Le lien "Télécharger mon CV" sur la page d'accueil pointe vers
`Documents/CV_AVOGAN_Augustin.pdf` — vérifie que ce fichier existe bien sous
ce nom dans ton dossier `Documents/`.
