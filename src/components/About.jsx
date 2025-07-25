import React from "react";
import "../styles/About.css";

const About = () => (
  <section className="about-section">
    <h2>À propos de moi</h2>
    <p>
      Passionné par le développement web, je conçois des applications modernes, performantes et accessibles. J’aime relever des défis techniques et collaborer sur des projets innovants.
    </p>
    <h2>Éducation</h2>
    <ul className="about-list">
      <li>
        <strong>Master 2 en Sécurité Informatique</strong>, Université de Yaoundé I (2024–présent)<br/>
        <span>Faculté des Sciences · Cours : Cyberattaque, Cyberdéfense, Cryptographie, Science des données</span>
      </li>
      <li>
        <strong>Master 1 en Sécurité Informatique</strong>, Université de Yaoundé I (2023–2024)<br/>
        <span>Faculté des Sciences · Cours : Architecture des ordinateurs, Cryptographie symétrique et asymétrique, Algorithmique</span>
      </li>
      <li>
        <strong>Licence en Sécurité Informatique</strong>, Université de Yaoundé I (2022–2023)<br/>
        <span>Faculté des Sciences · Cours : Architecture des ordinateurs, Cryptographie, théorie de code, théorie des nombres, développement web, POO</span>
      </li>
      <li>
        <strong>Baccalauréat Général Série D</strong>, Lycée de la Cité Verte (2019–2020)<br/>
        <span>Cours : Mathématiques, SVT, Physique, Chimie</span>
      </li>
    </ul>
    <h2>Compétences</h2>
    <div className="skills-list">
      <span>Cryptographie</span>
      <span>Sécurité des systèmes</span>
      <span>Intelligence artificielle</span>
      <span>Cloud</span>
      <span>Cycle de vie logiciel sécurisé</span>
      <span>Travail en équipe</span>
      <span>Communication</span>
      <span>Ponctualité</span>
      <span>C, C#, SQL, JavaScript, Python, HTML, CSS, PHP</span>
      <span>Django</span>
      <span>Développement d’applications desktop avec Electron</span>
      <span>Programmation Python (API Flask, monitoring système)</span>
      <span>Intégration frontend/backend (communication HTTP)</span>
      <span>UI/UX design moderne (Chart.js, modales, notifications)</span>
      <span>Packaging et déploiement multiplateforme (Electron Packager)</span>
      <span>Gestion de projet, documentation, versioning Git</span>
    </div>
    <h2>Langues</h2>
    <div className="lang-list">
      <span>Français : 90%</span>
      <span>Anglais : 40%</span>
    </div>
  </section>
);

export default About;
