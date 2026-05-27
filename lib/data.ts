export const personalInfo = {
  name: { first: "Toutla", last: "Ayoub" },
  title: "Dessinateur-Projeteur Béton Armé & Technicien Génie Civil",
  location: "Sidi Moumen, Casablanca, Maroc",
  phone: "07-62-57-38-37",
  email: "ayoubtoutla5@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayoub-toutla-312127322/",
  available: true,
  bio: "Titulaire d'un diplôme en Bâtiment, j'allie expertise technique en Bureau d'Études (Béton Armé) et suivi rigoureux sur le terrain. Ma double compétence me permet de gérer l'intégralité des projets, de la conception des plans d'exécution et des métrés TCE jusqu'à la coordination des travaux et la réception technique sur site.",
  cvUrl: "/cv/CV_Ayoub_Toutla.pdf",
};

export const stats = [
  { value: 1, suffix: "+", label: "An d'expérience" },
  { value: 10, suffix: "+", label: "Projets réalisés" },
  { value: 2, suffix: "", label: "Entreprises" },
  { value: 100, suffix: "%", label: "Disponible" },
];

export const skills = {
  software: [
    { name: "AutoCAD 2D/3D", level: 95, badge: "Expert" },
    { name: "Autofluid Plomberie", level: 85, badge: "Avancé" },
    { name: "Pack Office / Excel", level: 88, badge: "Avancé" },
    { name: "Revit Structure", level: 60, badge: "Notions" },
    { name: "Robot Structural", level: 55, badge: "Bases" },
  ],
  technical: [
    "Plans de Coffrage",
    "Plans de Ferraillage",
    "Métrés TCE",
    "Phases APS/APD/DCE/EXE",
    "Études de prix (DQE)",
    "Plans Plomberie (Autofluid)",
    "Réception Ferraillage",
    "Suivi Chantier",
    "Ouvrages d'Art (BAEL/RPS)",
    "Coordination Intervenants",
    "Finalisation Dossiers Soumission",
    "Avant-métrés & BPU",
  ],
  languages: [
    { name: "Arabe", level: 5, label: "Langue maternelle" },
    { name: "Tamazight", level: 4, label: "Courant" },
    { name: "Français", level: 4, label: "Courant" },
    { name: "Anglais", level: 2, label: "Débutant" },
  ],
};

export const experiences = [
  {
    id: 1,
    company: "STRUCTURE VALLEY",
    title: "Technicien Spécialisé — Bureau d'Études",
    type: "CDI",
    period: "Août 2024 — Présent",
    duration: "~1 an",
    location: "Maroc · Sur site",
    current: true,
    groups: [
      {
        name: "Conception & Études Techniques",
        icon: "drafting-compass",
        missions: [
          "Élaboration des dossiers techniques en phases APS, APD, DCE et EXE",
          "Étude et conception de structures bâtiments et ouvrages d'art (bassins, dalots) — normes BAEL/RPS",
          "Coordination avec architectes et interface technique avec les entreprises d'exécution",
        ],
      },
      {
        name: "Plans DAO/CAO & Finalisation",
        icon: "pencil-ruler",
        missions: [
          "Réalisation des plans de coffrage et ferraillage détaillés",
          "Modélisation 2D/3D AutoCAD + notions Revit Structure",
          "Plans de plomberie (évacuation/alimentation) via Autofluid",
          "Mise en page planches techniques pour tirages finaux et dossiers de soumission",
        ],
      },
      {
        name: "Suivi Technique & Contrôle Chantier",
        icon: "hard-hat",
        missions: [
          "Réception ferraillage sur site — dalles, poutres, éléments porteurs",
          "Contrôle qualité béton et armatures avant coulage",
        ],
      },
      {
        name: "Métrés & Études de Prix",
        icon: "calculator",
        missions: [
          "Métrés détaillés TCE (terrassement → finitions)",
          "Avant-métrés, bordereaux des prix et DQE",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "ASTRA CONSEIL",
    title: "Technicien Stagiaire — Bureau de Coordination",
    type: "Stage",
    period: "Juil. 2023 — Oct. 2023",
    duration: "4 mois",
    location: "Casablanca-Settat · Sur site",
    current: false,
    groups: [
      {
        name: "Pilotage Second Œuvre (CES)",
        icon: "clipboard-list",
        missions: [
          "Suivi rigoureux des travaux de finition (Enduits, Revêtements, Peinture, Plâtre, Électricité) sur Arcadia Loft",
          "Ordonnancement des tâches entre corps d'état + rapports journaliers",
        ],
      },
      {
        name: "Contrôle & Réception",
        icon: "check-square",
        missions: [
          "Vérification conformité finitions + réception technique ferraillage",
          "Collaboration équipes techniques pour levée des réserves",
        ],
      },
    ],
  },
];

export const education = [
  {
    degree: "Technicien Spécialisé en Génie Civil — option Bâtiment",
    school: "OFPPT — Institut Spécialisé du Bâtiment Ain Borja",
    location: "Casablanca",
    period: "2022 — 2024",
    icon: "graduation-cap",
  },
  {
    degree: "Première année SMC (Sciences de la Matière et Chimie)",
    school: "Faculté des Sciences Ben M'sick",
    location: "Casablanca",
    period: "2021 — 2022",
    icon: "book-open",
  },
  {
    degree: "Baccalauréat Sciences Physiques",
    school: "Lycée Addakhla",
    location: "Casablanca",
    period: "2020 — 2021",
    icon: "award",
  },
];

export const certifications = [
  {
    title: "Formation en Installations Électriques du Bâtiment",
    organization: "NEXANS Maroc",
    year: "2025",
    description: "Réseaux BT, câblage, normes NFC 15-100 appliquées au bâtiment",
    icon: "zap",
  },
];

export const projects = [
  {
    id: 1,
    title: "Villa Mr. Hadj Atid — APD",
    category: "Structures BA",
    categoryKey: "structures",
    tools: ["AutoCAD 2D/3D", "BAEL", "Ferraillage BA"],
    image: "/images/projects/PJ1/03-render-exterieur-piscine.jpeg",
    description: "Plans d'exécution complets — coffrage, ferraillage, détails constructifs et rendu 3D d'une villa contemporaine haut standing avec piscine.",
    location: "Maroc",
    year: "2025 — 2026",
    phase: "APD",
    highlights: [
      "Plans de coffrage et ferraillage tous niveaux",
      "Détails constructifs : acrotère, garde-corps en verre",
      "Rendu 3D architecturale — villa contemporaine avec piscine et jardins",
      "Coordination BET / architecte",
    ],
    fullDescription: "Étude complète en phase APD pour une villa contemporaine haut standing. Le dossier comprend les plans de coffrage et ferraillage de tous les niveaux, les détails constructifs (acrotère HA8 e=15, garde-corps en verre, chaînages horizontaux), ainsi qu'un rendu 3D architectural illustrant la conception finale avec piscine, jardin paysagé et salon intérieur double hauteur avec parois vitrées.",
    gallery: [
      "/images/projects/PJ1/03-render-exterieur-piscine.jpeg",
      "/images/projects/PJ1/04-render-exterieur-angle2.jpeg",
      "/images/projects/PJ1/02-render-salon.jpeg",
      "/images/projects/PJ1/01-plans-autocad.jpeg",
      "/images/projects/PJ1/05-detail-acrotere.jpeg",
      "/images/projects/PJ1/06-detail-garde-corps-verre.jpeg",
      "/images/projects/PJ1/07-plan-detail.jpeg",
      "/images/projects/PJ1/08-plan-detail-2.jpeg",
    ],
  },
  {
    id: 2,
    title: "Bassin d'Orage — Ssakan El Anik",
    category: "Ouvrages d'Art",
    categoryKey: "ouvrages",
    tools: ["AutoCAD 2D/3D", "BAEL/RPS", "Suivi Chantier"],
    image: "/images/projects/PJ2/05-chantier-ferraillage.jpeg",
    description: "Étude et plans d'exécution d'un bassin de rétention d'eaux pluviales en béton armé, avec réception ferraillage sur chantier.",
    location: "Maroc",
    year: "2025",
    phase: "APD / EXE",
    highlights: [
      "Plans d'exécution fondations et bassin BA",
      "Dimensionnement et ferraillage selon BAEL (HA8 à HA16)",
      "Coupes constructives avec film polyane et pente d'écoulement",
      "Suivi et réception ferraillage sur chantier",
    ],
    fullDescription: "Conception et réalisation des plans d'exécution d'un bassin d'orage en béton armé pour la gestion des eaux pluviales. Le dossier technique comprend les plans de fondations, les plans de ferraillage détaillés avec cadrage des armatures (HA8 à HA16, espacement e=15 à e=20), les coupes constructives avec film polyane et pente d'écoulement (pente = 0,01), ainsi que le suivi et la réception ferraillage directement sur le chantier.",
    gallery: [
      "/images/projects/PJ2/05-chantier-ferraillage.jpeg",
      "/images/projects/PJ2/03-plan-general.jpeg",
      "/images/projects/PJ2/01-plan-fondations.jpeg",
      "/images/projects/PJ2/02-detail-coupe-bassin.jpeg",
      "/images/projects/PJ2/04-plan-detail.jpeg",
      "/images/projects/PJ2/06-chantier-site.jpeg",
      "/images/projects/PJ2/07-chantier-detail.jpeg",
    ],
  },
  {
    id: 3,
    title: "Villa Benslimane — Structure Valley",
    category: "Structures BA",
    categoryKey: "structures",
    tools: ["AutoCAD 2D/3D", "BAEL", "Robot Structural"],
    image: "/images/projects/PJ3/03-plans-autocad-2.jpeg",
    description: "Dossier structure APD1 complet — plans de coffrage, ferraillage, fondations et rendu architectural villa style méditerranéen.",
    location: "Benslimane, Maroc",
    year: "2025 — 2026",
    phase: "APD1",
    highlights: [
      "Plans de coffrage tous niveaux (Structure Valley)",
      "Tableau des semelles et poteaux dimensionnés",
      "Plans ferraillage voiles et fondation NV supérieur",
      "Rendu 3D architectural — villa méditerranéenne avec arches et jardins",
    ],
    fullDescription: "Dossier structure complet en phase APD1 réalisé chez Structure Valley pour une villa de style méditerranéen à Benslimane. Le dossier comprend les plans de coffrage de tous les niveaux, les tableaux dimensionnels des semelles et poteaux (P1/P2, LG25×50), les plans de ferraillage des voiles et de la fondation niveau supérieur (FONDATION NV SUP), ainsi que des rendus 3D architecturaux illustrant l'esthétique finale de la villa avec ses arches caractéristiques, ses façades blanches et ses jardins méditerranéens.",
    gallery: [
      "/images/projects/PJ3/03-plans-autocad-2.jpeg",
      "/images/projects/PJ3/07-render-facade.jpeg",
      "/images/projects/PJ3/01-render-terrasse.jpeg",
      "/images/projects/PJ3/04-plans-autocad-3.jpeg",
      "/images/projects/PJ3/02-plans-autocad-1.jpeg",
      "/images/projects/PJ3/05-plan-fondation-nv-sup.jpeg",
      "/images/projects/PJ3/06-plan-detail.jpeg",
      "/images/projects/PJ3/08-render-2.jpeg",
      "/images/projects/PJ3/09-render-3.jpeg",
      "/images/projects/PJ3/10-render-4.jpeg",
    ],
  },
];

export const projectCategories = [
  { key: "all", label: "Tous" },
  { key: "structures", label: "Structures BA" },
  { key: "ouvrages", label: "Ouvrages d'Art" },
];

export const navLinks = [
  { href: "#profil", label: "Profil" },
  { href: "#competences", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#formations", label: "Formations" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
];
