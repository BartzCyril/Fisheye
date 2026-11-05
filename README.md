# FishEye — plateforme de photographes accessible

> Prototype en JavaScript natif d'un site qui permet à des photographes indépendants de présenter leurs travaux, avec l'accessibilité comme priorité absolue.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)

**👉 Voir le site : [bartzcyril.github.io/Fisheye](https://bartzcyril.github.io/Fisheye/)**

## Sujet

Projet de formation OpenClassrooms. FishEye, site de photographes indépendants, veut moderniser son site. Mission : livrer un prototype fonctionnel (HTML, CSS, JavaScript) à partir des maquettes Figma, les données étant fournies dans un fichier JSON en attendant le back-end. Le client a fait de l'**accessibilité** sa priorité.

## Fonctionnalités

- Page d'accueil listant les photographes (nom, ville, slogan, tarif)
- Page de chaque photographe générée dynamiquement à partir du JSON
- Galerie de photos et de vidéos, **triable** par popularité, date ou titre
- **Lightbox** pour parcourir les médias, à la souris ou au clavier
- **Likes** sur chaque média, avec total mis à jour en direct
- **Formulaire de contact** dans une modale

## Compétences acquises

- **JavaScript natif** : récupération des données avec `fetch`, génération dynamique du DOM
- **Design pattern Factory** pour créer les photographes et distinguer photos et vidéos
- **Accessibilité** : navigation complète au clavier, gestion du focus dans les modales, attributs ARIA, textes alternatifs, structure sémantique, site pensé pour les lecteurs d'écran
- **Gestion des événements** (clavier, souris) et de l'état de l'interface
- Code sans erreur dans la console, organisé en `factories/`, `pages/` et `utils/`
- **Sass** pour les styles

## Lancer le projet

Les données étant chargées avec `fetch`, le site doit être servi par un serveur local, par exemple :

```bash
npx serve .
```

## Site

[Fisheye](https://bartzcyril.github.io/Fisheye/)

## Maquette

[Maquette Figma](https://www.figma.com/file/Q3yNeD7WTK9QHDldg9vaRl/UI-Design-FishEye-FR?type=design&node-id=0-1&mode=design&t=vaiZgYFMpQiDt1kz-0)
