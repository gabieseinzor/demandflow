# DemandFlow

Application web interne de gestion des demandes d'approvisionnement pour les PME.

Projet fil rouge du titre **Concepteur Développeur d'Applications (CDA)**  
ADRAR Toulouse — 2026-2027.

## Le problème

Dans beaucoup de PME, les demandes de matériel et de fournitures circulent par mail et par fichiers Excel : demandes perdues, manque de visibilité pour l'employé et absence de traçabilité des validations.

## La solution

DemandFlow centralise les demandes dans un circuit de validation clair et tracé, de l'expression du besoin jusqu'à la livraison.

**Circuit :** Employé crée → Chef de service vise → Validateur valide → suivi jusqu'à la livraison.

## Rôles

- **Employé** : crée et suit ses demandes
- **Chef de service** : vise, modifie ou rejette les demandes de son équipe
- **Validateur** : valide les demandes visées et suit leur avancement
- **Administrateur** : gère les comptes et les services

## Stack technique

- **Front-end** : React
- **CSS** : Tailwind CSS
- **Back-end** : Java, Spring Boot
- **Base de données** : MySQL
- **Outils** : Git/GitHub, Figma, StarUML

## Structure du dépôt

```text
docs/       documentation du projet
database/   scripts et données de la base
backend/    API et logique métier Spring Boot
frontend/   interface utilisateur React
```
