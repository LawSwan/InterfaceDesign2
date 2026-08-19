import React, { useState } from 'react';
import Login from './components/Login';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div className="app-shell">
      {user ? (
        <div className="auth-card">
          <h2 className="auth-title">Welcome, {user}!</h2>
          <p className="auth-subtitle">You are successfully logged in.</p>
          <button className="auth-button" onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
