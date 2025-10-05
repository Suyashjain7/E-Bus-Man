import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1 className="page-title">Admin Dashboard</h1>
      <p className="subtitle">Welcome to the Administrator Control Panel</p>
      
      <div className="navigation-grid">
        <div className="nav-card">
          <h3>Driver Management</h3>
          <p>Create new driver accounts and manage existing drivers.</p>
          <Link to="/create-driver" className="btn">Create Driver</Link>
        </div>
        
        <div className="nav-card">
          <h3>Bus Information</h3>
          <p>Submit and manage bus details, types, and contact information.</p>
          <Link to="/bus-info" className="btn">Manage Buses</Link>
        </div>
        
        <div className="nav-card">
          <h3>System Overview</h3>
          <p>View system statistics and manage overall operations.</p>
          <button className="btn btn-secondary">View Statistics</button>
        </div>
        
        <div className="nav-card">
          <h3>User Management</h3>
          <p>Monitor user registrations and manage user accounts.</p>
          <button className="btn btn-secondary">Manage Users</button>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-secondary">Back to Home</Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
