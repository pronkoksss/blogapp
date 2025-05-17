import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Login with Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form login-form">
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
        Password:
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
