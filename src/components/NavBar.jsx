import React, { useState } from "react";
import "../styles/NavBar.css";


const socialLinks = [
  { href: "https://linkedin.com", icon: "bi bi-linkedin", label: "LinkedIn" },
  { href: "https://github.com", icon: "bi bi-github", label: "GitHub" },
  { href: "https://twitter.com", icon: "bi bi-twitter", label: "Twitter" },
];

const NavBar = ({ onSectionChange, activeSection, theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleNavClick = (section) => {
    onSectionChange(section);
    setMenuOpen(false);
  };
  const handleSocialClick = (e) => {
    setMenuOpen(false);
    // Laisse le lien s'ouvrir normalement
  };
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-brand">YEGL</span>
      </div>
      <button className="burger-menu" aria-label="Ouvrir le menu" onClick={handleMenuToggle}>
        <span className={menuOpen ? "burger-bar open" : "burger-bar"}></span>
        <span className={menuOpen ? "burger-bar open" : "burger-bar"}></span>
        <span className={menuOpen ? "burger-bar open" : "burger-bar"}></span>
      </button>
      <div className={menuOpen ? "navbar-menu open" : "navbar-menu"}>
        <ul className={menuOpen ? "open" : ""}>
          <li><button className={activeSection === "description" ? "active" : ""} onClick={() => handleNavClick("description")}>Description</button></li>
          <li><button className={activeSection === "about" ? "active" : ""} onClick={() => handleNavClick("about")}>À propos</button></li>
          <li><button className={activeSection === "realisations" ? "active" : ""} onClick={() => handleNavClick("realisations")}>Mes réalisations</button></li>
          <li><button className={activeSection === "projets" ? "active" : ""} onClick={() => handleNavClick("projets")}>Mes projets</button></li>
          <li><button className={activeSection === "contact" ? "active" : ""} onClick={() => handleNavClick("contact")}>Contact</button></li>
        </ul>
        <div className="navbar-socials">
          {socialLinks.map((link, idx) => (
            <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} onClick={handleSocialClick}>
              <i className={link.icon}></i>
            </a>
          ))}
          <button className="theme-toggle" onClick={handleThemeToggle}>{theme === "dark" ? "🌞" : "🌙"}</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
