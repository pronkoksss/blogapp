import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  // Hàm lấy danh sách contact từ server
  useEffect(() => {
    fetch('/api/contacts')
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(console.error);
  }, []);

  // Hàm thêm contact mới vào danh sách
  const addContact = (contact) => {
    setContacts(prev => [...prev, contact]);
  };

  return (
    <div className="app-container">
      <h1>Personal Blog</h1>

      <section className="login-section">
        <h2>Login</h2>
        <LoginForm />
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <ContactForm onAdd={addContact} />
        <div className="contacts-list">
          <h3>Messages:</h3>
          {contacts.length === 0 && <p>No messages yet.</p>}
          <ul>
            {contacts.map(c => (
              <li key={c._id}>
                <strong>{c.name}</strong> ({c.email}): {c.message}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
