import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Description from "./components/Description";
import Realisation from "./components/Realisation";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import "./styles/NavBar.css";
import "./styles/Description.css";
import "./styles/Realisation.css";
import "./styles/Portfolio.css";
import "./styles/About.css";
import "./styles/Contact.css";
import "./styles/index.css";
import "./styles/Loader.css";

function App() {
  const [section, setSection] = useState("description");
  const [theme, setTheme] = useState("light"); // Définit le thème principal sur 'light'
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Affiche le loader lors du changement de section
  const handleSectionChange = (nextSection) => {
    if (nextSection === section) return;
    setLoading(true);
    setTimeout(() => {
      setSection(nextSection);
      setLoading(false);
    }, 600); // Durée du loader (ms)
  };

  return (
    <div className="app-fullpage">
      <NavBar
        onSectionChange={handleSectionChange}
        activeSection={section}
        theme={theme}
        setTheme={setTheme}
      />
      {loading && <Loader />}
      <div style={{ paddingTop: "5.5rem" }}>
        {section === "description" && <Description />}
        {section === "about" && <About />}
        {section === "realisations" && <Realisation />}
        {section === "projets" && <Portfolio />}
        {section === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;
