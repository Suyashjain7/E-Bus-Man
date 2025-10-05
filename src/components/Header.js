import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">E-Bus Management System</h1>
        <nav className="nav">
          <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
            Home
          </Link>
          <Link to="/admin-login" className={location.pathname === '/admin-login' ? 'nav-link active' : 'nav-link'}>
            Admin
          </Link>
          <Link to="/driver-login" className={location.pathname === '/driver-login' ? 'nav-link active' : 'nav-link'}>
            Driver
          </Link>
          <Link to="/user-register" className={location.pathname === '/user-register' ? 'nav-link active' : 'nav-link'}>
            User
          </Link>
          <Link to="/search-bus" className={location.pathname === '/search-bus' ? 'nav-link active' : 'nav-link'}>
            Search Bus
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
