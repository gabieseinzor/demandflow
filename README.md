# DemandFlow

Application web interne de gestion des demandes d'approvisionnement d'une PME (cas d'étude du projet).

Projet fil rouge du titre **Concepteur Développeur d'Applications (CDA)**, ADRAR Toulouse, 2026-2027.

> **État du projet : en cours de développement** (conception terminée à 90 %, back-end en démarrage). Voir [État d'avancement](#état-davancement).

## Le problème

Dans la PME étudiée, les demandes de matériel et de fournitures circulent par mail et par fichiers Excel : demandes perdues, manque de visibilité pour l'employé, aucune trace des validations.

## La solution

DemandFlow centralise les demandes dans un circuit de validation clair et tracé, de l'expression du besoin jusqu'à la livraison.

## Le circuit d'une demande

```
Soumise → Visée → Validée → Traitée → Livrée
   │         │
   ├─ Annulée (par l'employé, tant que la demande est Soumise)
   └─ Rejetée (par le chef ou le validateur, motif obligatoire)
```

| Statut  | Code        | Qui agit                                          |
| ------- | ----------- | ------------------------------------------------- |
| Soumise | `SUBMITTED` | L'employé crée la demande                         |
| Visée   | `ENDORSED`  | Le chef de service la vise                        |
| Validée | `VALIDATED` | Le validateur la valide                           |
| Traitée | `PROCESSED` | Le validateur la traite (commentaire obligatoire) |
| Livrée  | `DELIVERED` | L'employé confirme la réception                   |
| Rejetée | `REJECTED`  | Chef de service ou validateur, avec motif         |
| Annulée | `CANCELLED` | L'employé, depuis « Soumise »                     |

Livrée, Rejetée et Annulée sont les états finaux. L'achat éventuel se fait en dehors de l'application ; le validateur en garde la trace dans son commentaire.

## Rôles

| Rôle            | Ce qu'il fait                                                      |
| --------------- | ------------------------------------------------------------------ |
| Employé         | Crée, suit, modifie ou annule ses demandes, confirme la réception  |
| Chef de service | Consulte, modifie, vise ou rejette les demandes de son service     |
| Validateur      | Valide, traite ou rejette les demandes visées de tous les services |
| Administrateur  | Crée et gère les comptes et les services                           |

Les comptes sont créés par l'administrateur, sans inscription libre.

## Stack technique

| Couche          | Technologie                                                              |
| --------------- | ------------------------------------------------------------------------ |
| Front-end       | React, Vite, Tailwind CSS (migration progressive vers TypeScript prévue) |
| Back-end        | Java, Spring Boot (API REST, Spring Security, JWT)                       |
| Base de données | PostgreSQL (Docker), migrations Flyway                                   |
| Outils          | Git/GitHub, Docker, Adminer, Figma, StarUML                              |

## Architecture

Architecture client-serveur en couches : le navigateur appelle une API REST (JSON), le back-end applique la chaîne **Sécurité → Controller → Service → Repository/Entity**, puis lit et écrit dans PostgreSQL. Les règles métier (workflow, droits) vivent uniquement dans la couche Service.

Le schéma et la justification détaillée de chaque choix seront publiés prochainement dans `docs/architecture.md`.

## Documentation

| Document                             | Contenu                                   |
| ------------------------------------ | ----------------------------------------- |
| [User stories](docs/user-stories.md) | 27 stories classées par priorité (MoSCoW) |

Le dictionnaire de données, le cahier des charges et les maquettes seront ajoutés au fur et à mesure de leur publication.

## Structure du dépôt

```
docs/       documentation du projet
database/   scripts et données de la base
backend/    API et logique métier (Spring Boot)
frontend/   interface utilisateur (React)
```

Un seul dépôt (monorepo) : front et back évoluent ensemble.

## Lancer le projet

### Front-end

```bash
cd frontend
npm install
npm run dev
```

### Back-end et base de données

Le back-end est en cours de développement : la procédure de lancement sera documentée quand le premier parcours (connexion et création de demande) sera fonctionnel.

Prérequis prévus : Java 21, Docker, Node.js.

Les secrets (mot de passe de la base, clé JWT) ne sont jamais versionnés : ils se définissent dans des variables d'environnement.

## État d'avancement

- [x] Cadrage, user stories, document d'architecture
- [x] Dictionnaire de données (5 entités)
- [x] Environnement front (Vite, React, Tailwind) et page de connexion
- [x] Projet Spring Boot, PostgreSQL et Flyway initialisés
- [ ] Parcours « l'employé fait une demande et la suit » (connexion, création, liste, détail et historique)
- [ ] Circuit de validation (visa, validation, traitement, livraison)
- [ ] Administration des comptes et des services
- [ ] Recette et tests

## Conventions

- Branche `main` stable, une branche courte par fonctionnalité (`feat/...`).
- Commits au format Conventional Commits (type en anglais, description en français), par exemple `feat(front): afficher la liste des demandes`.
- Code en anglais, interface en français.

## Auteure

Gabrielle Kibouka Seinzor, [LinkedIn](https://www.linkedin.com/in/gabie-seinzor/).
