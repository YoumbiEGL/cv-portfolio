import React from "react";
import "../styles/Loader.css";

const Loader = () => (
  <div className="loader-overlay" role="status" aria-live="polite">
    <div className="loader-spinner"></div>
  </div>
);

export default Loader;
