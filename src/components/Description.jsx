import React, { useEffect, useState } from "react";
import "../styles/Description.css";
import photo from "../assets/photo1.jpg";

const socialLinks = [
  { href: "https://linkedin.com", icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { href: "https://github.com", icon: "fab fa-github", label: "GitHub" },
  { href: "https://twitter.com", icon: "fab fa-x-twitter", label: "Twitter" },
];

const welcomeText = "Bienvenue sur mon portfolio";

const Description = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [animateWelcome, setAnimateWelcome] = useState(false);

  useEffect(() => {
    let i = 0;
    let finished = false;
    const typing = setInterval(() => {
      if (i < welcomeText.length) {
        setTypedText((prev) => prev + welcomeText.charAt(i));
        i++;
      } else if (!finished) {
        finished = true;
        clearInterval(typing);
        setTimeout(() => {
          setAnimateWelcome(true);
          // Joue un son de bienvenue
          const audio = new Audio("https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b9b2b7.mp3");
          audio.volume = 0.15;
          audio.play();
          setTimeout(() => setShowWelcome(false), 1800);
        }, 400);
      }
    }, 55);
    return () => clearInterval(typing);
  }, []);

  return (
    <section className="hero-section">
      {showWelcome && (
        <div className="welcome-overlay">
          <div className={animateWelcome ? "welcome-message dance rainbow" : "welcome-message"}>
            {typedText}
            <span className="welcome-emoji">✨</span>
          </div>
        </div>
      )}
      <div className="hero-content" style={{ opacity: showWelcome ? 0.2 : 1, transition: "opacity 0.6s" }}>
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
};

export default Description;
