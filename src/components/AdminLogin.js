import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminEmail = "admin@123";
    const adminPass = "admin123";
    
    if (formData.email === adminEmail && formData.password === adminPass) {
      setMessage('Login successful! Welcome Admin.');
      setMessageType('success');
      setFormData({ email: '', password: '' });
      // Redirect to admin dashboard after successful login
      setTimeout(() => {
        navigate('/admin-dashboard');
      }, 1500);
    } else {
      setMessage('Invalid login');
      setMessageType('error');
    }
  };

  return (
    <div className="admin-login">
      <h1 className="page-title">Admin Login</h1>
      
      {message && (
        <div className={messageType === 'success' ? 'success-message' : 'error-message'}>
          {message}
        </div>
      )}

      <div className="form-container">
        <div className="card">
          <h2 className="text-center mb-4">Administrator Access</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <button type="submit" className="btn">Login</button>
          </form>
          
          <div className="text-center mt-4">
            <p className="text-muted">Admin Credentials:</p>
            <p className="text-muted">Email: admin@123</p>
            <p className="text-muted">Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
