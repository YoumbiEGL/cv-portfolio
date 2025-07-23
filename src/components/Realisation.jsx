import React from "react";
import "../styles/Realisation.css";

const experiences = [
  {
    title: "Responsable sécurité",
    lieu: "Shopixup",
    year: "2024",
    missions: [
      "Élaboration et mise en œuvre des politiques de sécurité.",
      "Protection des données et prévention des cyberattaques.",
      "Gestion des incidents de sécurité et conformité réglementaire."
    ]
  },
  {
    title: "Stage CISCO",
    lieu: "École Nationale Supérieure Polytechnique de Yaoundé",
    year: "2023",
    missions: [
      "Explorer et maîtriser diverses solutions Cisco.",
      "Participation à des projets concrets.",
      "Formations et ateliers internes."
    ]
  },
  {
    title: "Membre du Club de Sécurité Informatique",
    lieu: "Université de Yaoundé I",
    year: "2023",
    missions: [
      "Participation à des projets étudiants sur la cybersécurité.",
      "Organisation de conférences et séminaires.",
      "Rédaction de rapports et guides de bonnes pratiques."
    ]
  },
  {
    title: "Membre du Club des Développeurs Informatique",
    lieu: "Université de Yaoundé I",
    year: "2022",
    missions: [
      "Participation à des projets étudiants.",
      "Collaboration et guides sur le développement sécurisé."
    ]
  }
];

const Realisation = () => (
  <section className="realisation-section">
    <h2>Expérience</h2>
    <div className="realisation-grid">
      {experiences.map((exp, idx) => (
        <div className="realisation-card" key={idx}>
          <h3>{exp.title}</h3>
          <span className="realisation-lieu">{exp.lieu} · {exp.year}</span>
          <ul className="realisation-missions">
            {exp.missions.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Realisation;
