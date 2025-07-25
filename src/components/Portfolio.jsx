import React from "react";
import "../styles/Portfolio.css";

const projects = [
  {
    title: "Optimisation des algorithmes cryptographiques dans le cloud",
    year: "En cours",
    description: "Lecture d’articles scientifiques et expérimentation d’outils pour optimiser la cryptographie dans le cloud.",
    outils: "..."
  },
  {
    title: "Détection d’attaques shilling dans les systèmes de recommandation",
    year: "2024",
    description: "Détection d’attaques à l’aide de l’IA (CNN et BiLSTM), analyse des interactions utilisateurs.",
    outils: "Python"
  },
  {
    title: "Système de protection contre la falsification des documents officiels au Cameroun à l’aide de l’IA",
    year: "2024",
    description: "Détection de faux documents par IA, analyse d’anomalies dans textes, images et signatures.",
    outils: "Python"
  },
  {
    title: "Application de stockage de fichiers sécurisés",
    year: "2023",
    description: "Stockage sécurisé avec chiffrement AES/DES, hachage pour l’intégrité des données.",
    outils: "Python"
  },
  {
    title: "Construction d’un IDS",
    year: "2023",
    description: "Analyse d’activités pour identifier et alerter sur les comportements suspects.",
    outils: "Java"
  },
  {
    title: "Construction d’un CMS",
    year: "2022",
    description: "Développement d’un CMS avec HTML, JS, CSS, Ajax, PHP.",
    outils: "HTML, JS, CSS, Ajax, PHP"
  },
  {
    title: "System Monitor Electron",
    year: "2025",
    description:
      "Développement d’une application multiplateforme (Linux/Windows) de surveillance système en temps réel, combinant Electron (frontend moderne) et Python (backend API). Interface graphique interactive, alertes personnalisées, gestion des seuils, packaging en exécutable.",
    outils:
      "Electron, Python (Flask), Chart.js, Electron Packager, UI/UX, Git"
  }
];

const Portfolio = () => (
  <section className="portfolio-section">
    <h2>Mes Projets</h2>
    <div className="portfolio-grid">
      {projects.map((project, idx) => (
        <div className="portfolio-card" key={idx}>
          <h3>{project.title}</h3>
          <span className="portfolio-year">{project.year}</span>
          <p>{project.description}</p>
          <div className="portfolio-tools">{project.outils}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
