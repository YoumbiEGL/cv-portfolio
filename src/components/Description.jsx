import React from "react";
import "../styles/Description.css";
import photo from "../assets/photo1.jpg";

const socialLinks = [
  { href: "https://linkedin.com", icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { href: "https://github.com", icon: "fab fa-github", label: "GitHub" },
  { href: "https://twitter.com", icon: "fab fa-x-twitter", label: "Twitter" },
];

const Description = () => (
  <section className="hero-section">
    <div className="hero-content">
      <div className="hero-text">
        <h1>YOUMBI ESSOUMA GUY LANDRY</h1>
        <div className="hero-contact">
          <span>Yaoundé, Nkolbisson</span> · <span>guy.youmbi@facsciences-uy1.cm</span> · <span>696-593-886</span>
        </div>
        <h2 className="hero-objectif">Objectif professionnel</h2>
        <p className="hero-intro">
          Passionné par la protection des systèmes d’information, je souhaite intégrer une organisation où je pourrai mettre à profit mes compétences en cybersécurité, cryptographie et gestion des risques pour garantir la sécurité des données et des infrastructures. Mon objectif est de contribuer activement à la prévention, la détection et la gestion des cybermenaces tout en continuant à développer mes connaissances dans un environnement stimulant et innovant.
        </p>
      </div>
      <div className="hero-photo-col">
        <div className="hero-photo">
          <img src={photo} alt="Portrait de Youmbi Essouma Guy Landry" />
        </div>
        <div className="hero-socials">
          {socialLinks.map((link, idx) => (
            <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hero-social-btn">
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Description;
