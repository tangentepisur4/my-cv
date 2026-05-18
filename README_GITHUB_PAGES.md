# Publication du CV sur GitHub Pages

Ce projet est maintenant prêt pour un hébergement gratuit sur GitHub Pages.

Le site statique à publier se trouve dans le dossier `docs`.

## Étapes

1. Créer un dépôt public sur GitHub, par exemple `cv-responsive`.
2. Envoyer le contenu de ce dossier projet vers ce dépôt.
3. Sur GitHub, ouvrir `Settings` > `Pages`.
4. Dans `Build and deployment`, choisir :
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/docs`
5. Cliquer sur `Save`.

Après quelques minutes, le CV sera disponible avec une URL de ce type :

```text
https://votre-utilisateur.github.io/cv-responsive/
```

## Dossier à publier

GitHub Pages doit servir le dossier `docs`, pas l'ancien dossier IBM Cloud.

Le dossier `cv_responsive` peut rester dans le projet comme archive de l'ancienne version Node.js / IBM Cloud, mais il n'est pas nécessaire pour l'hébergement GitHub Pages.
