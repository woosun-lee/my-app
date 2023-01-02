import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function LoginForm({ authenticated, login, location }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    try {
      login({ id, password });
    } catch (e) {
      alert('Failed to login');
      setId('');
      setPassword('');
    }
  };

  //const { from } = location.state || { from: { pathname: "/" } };
  if (authenticated) return <Navigate to="/profile" />;

  return (
    <>
      <h1>Login</h1>
      <input
        value={id}
        onChange={({ target: { value } }) => setId(value)}
        type="text"
        placeholder="id"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>
    </>
  );
}

export default LoginForm;