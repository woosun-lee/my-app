import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { signIn } from './Auth';

import Home from './Home';
import About from './About';
import Profile from './Profile';
import NotFound from './NotFound';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const login = async({ id, password }) => setUser( await signIn({ id, password }));
  const logout = () => setUser(null);
  
  return (
    <>
      <header>
        <Link to="/*">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        {authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/*" element={ <Home />} />
          <Route path="/about" element={  <About />} />
          <Route path="/login" element={ <LoginForm authenticated={authenticated} login={login} />} />
          <Route path="/profile" element={ <Profile authenticated={authenticated} user={user} />} />
          <Route element={ <NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
