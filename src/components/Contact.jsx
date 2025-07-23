import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    // Ici, tu pourrais intégrer un service d'envoi réel (EmailJS, Formspree, etc.)
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact</h2>
      {sent ? (
        <div className="contact-success">Merci pour votre message ! Je vous répondrai rapidement.</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Votre email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Votre message" value={form.message} onChange={handleChange} required />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
