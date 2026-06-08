// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000); // 1 хвилина [cite: 144]
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={() => setIsOpen(false)}>Закрити</button>
        <form action="https://formspree.io/f/mqeopkka" method="POST">
          <input name="name" placeholder="Ім'я" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Телефон" required />
          <textarea name="message" placeholder="Повідомлення" required></textarea>
          <button type="submit">Відправити</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;