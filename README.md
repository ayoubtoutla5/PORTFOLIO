# Portfolio — Toutla Ayoub

Portfolio professionnel de **Toutla Ayoub**, Dessinateur-Projeteur Béton Armé & Technicien Génie Civil basé à Casablanca, Maroc.

## Stack technique

| Outil | Version |
|---|---|
| Next.js | 16 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |
| Lucide React | 1 |

## Sections

- **Hero** — Présentation animée avec titre et appel à l'action
- **Profil** — Bio, valeurs et parcours en bref
- **Compétences** — Logiciels (barres de progression), savoir-faire technique (badges) et langues
- **Expérience** — Structure Valley & Astra Conseil avec missions détaillées
- **Formations** — Diplômes et certifications
- **Projets** — Galerie filtrée par catégorie
- **Contact** — Formulaire et liens directs

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Structure

```
app/          # Layout et page principale (Next.js App Router)
components/
  layout/     # Navbar, Footer, ScrollProgress
  sections/   # Hero, About, Skills, Experience, Education, Projects, Contact
  ui/         # Composants réutilisables
lib/
  data.ts     # Toutes les données du portfolio (experiences, skills, projects…)
public/
  cv/         # CV PDF téléchargeable
```

## Contact

- Email : ayoubtoutla5@gmail.com
- LinkedIn : [Ayoub Toutla](https://www.linkedin.com/in/ayoub-toutla-312127322/)
- Tél : 07-62-57-38-37
