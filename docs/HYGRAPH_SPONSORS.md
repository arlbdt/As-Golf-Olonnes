# Sponsors dans Hygraph

Pour que les non-développeurs puissent gérer les sponsors affichés sur la page d’accueil, créez un modèle **Sponsor** dans Hygraph.

## 1. Créer le modèle "Sponsor"

Dans Hygraph : **Schema** → **Add model** → nom **Sponsor**.

## 2. Champs à ajouter

| Champ (API ID) | Type              | Obligatoire | Description |
|----------------|-------------------|-------------|-------------|
| `name`         | Single line text  | Oui         | Nom du sponsor (utilisé pour le texte alternatif du logo) |
| `logo`         | Asset             | Oui         | Image du logo |
| `url`          | Single line text  | Non         | Site web du sponsor (ex. https://...) – si renseigné, le logo sera cliquable |

Optionnel pour l’ordre d’affichage :

| Champ (API ID) | Type    | Obligatoire | Description |
|----------------|---------|-------------|-------------|
| `sortOrder`    | Integer | Non         | Ordre d’affichage (plus le nombre est petit, plus le sponsor apparaît à gauche) |

## 3. Publier le schéma

**Schema** → **Publish**.

## 4. Ajouter du contenu

**Content** → **Sponsor** → **Create new entry** :

- **name** : nom du partenaire
- **logo** : téléverser l’image du logo
- **url** : (optionnel) adresse du site du sponsor

Publier chaque entrée pour qu’elle apparaisse sur le site.

## Comportement sur le site

- Seuls les sponsors **publiés** avec un **logo** sont affichés.
- Si aucun sponsor avec logo : la section n’apparaît pas.
- Un seul sponsor avec logo : titre « Notre Sponsor » + une image.
- Plusieurs : titre « Nos Sponsors » + carrousel. Les logos avec **url** renseigné ouvrent le site dans un nouvel onglet.
