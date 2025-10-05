import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1 className="page-title">Welcome to E-Bus Management System</h1>
      <p className="subtitle">Manage your bus operations efficiently with our comprehensive platform</p>
      
      <div className="navigation-grid">
        <div className="nav-card">
          <h3>Admin Panel</h3>
          <p>Access administrative functions, manage drivers, and oversee system operations.</p>
          <Link to="/admin-login" className="btn">Admin Login</Link>
        </div>
        
        <div className="nav-card">
          <h3>Driver Management</h3>
          <p>Create new driver accounts and manage existing driver logins.</p>
          <Link to="/driver-login" className="btn">Driver Login</Link>
          <Link to="/create-driver" className="btn btn-secondary" style={{ marginLeft: '10px' }}>Create Driver</Link>
        </div>
        
        <div className="nav-card">
          <h3>User Registration</h3>
          <p>Register new users and provide access to bus search and booking services.</p>
          <Link to="/user-register" className="btn">User Portal</Link>
        </div>
        
        <div className="nav-card">
          <h3>Bus Information</h3>
          <p>Submit and manage bus details, types, and contact information.</p>
          <Link to="/bus-info" className="btn">Manage Buses</Link>
        </div>
        
        <div className="nav-card">
          <h3>Search Buses</h3>
          <p>Find available buses between destinations with real-time information.</p>
          <Link to="/search-bus" className="btn">Search Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
