import React, { useState} from 'react';
import Login from './components/Login/Login';
import PriceList from './components/PriceList/PriceList';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(localStorage.getItem('username'));

  const handleLogin = (newToken, username) => {
    setToken(newToken);
    setUser(username);
    localStorage.setItem('token', newToken);
    localStorage.setItem('username', username);
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <div className="app-container">
      {!token ? (
        <Login onLogin={handleLogin} />
      ) : (
        <PriceList token={token} username={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;