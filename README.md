# Teranga Mode 🛍️

Boutique en ligne de mode et lifestyle pour le Sénégal : femme, homme, enfant, accessoires, beauté et maison. Prix en FCFA, paiement Wave / Orange Money / carte / à la livraison (démo).

> Ce projet est la reconstruction (rebaptisée) de l'ancienne boutique « Teranga Shein », dont le dépôt d'origine a été désactivé par GitHub pour cause de marque déposée. Le nouveau nom **Teranga Mode** évite tout conflit de marque.

## Stack

- [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite 5](https://vitejs.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- [React Router 6](https://reactrouter.com)

## Fonctionnalités

- Page d'accueil : héros, catégories, ventes flash, nouveautés, meilleures ventes
- Catalogue avec filtres par catégorie, promos, recherche et tri
- Fiches produit avec tailles, avis et suggestions
- Panier persistant (localStorage) avec seuil de livraison gratuite
- Favoris persistants
- Tunnel de commande (livraison + mode de paiement, démo sans transaction réelle)
- Interface 100 % française, responsive mobile-first

## Développement

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build   # sortie dans dist/
```

## Déploiement Netlify

Le fichier `netlify.toml` configure le build (`npm run build`, dossier `dist`) et la redirection SPA. Il suffit de connecter ce dépôt au projet Netlify existant pour redéployer le site.
