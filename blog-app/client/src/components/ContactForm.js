import React, { useState } from 'react';

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('Sending...');

    fetch('/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    })
      .then(res => res.json())
      .then(data => {
        setStatus('Message sent!');
        onAdd(data);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(err => {
        console.error(err);
        setStatus('Error sending message');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form contact-form">
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
        />
      </label>

      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
      </label>

      <label>
        Message:
        <textarea 
          value={message} 
          onChange={e => setMessage(e.target.value)} 
          required 
        />
      </label>

      <button type="submit">Send</button>
      <p className="status-message">{status}</p>
    </form>
  );
};

export default ContactForm;
