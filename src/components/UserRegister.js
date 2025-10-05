import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser, loginUser } from '../services/firebaseAuth';

function UserRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'register') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setLoginData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match!');
      setMessageType('error');
      return;
    }
    
    try {
      const result = await registerUser(formData.email, formData.password, {
        firstName: formData.firstName,
        lastName: formData.lastName
      });
      
      if (result.success) {
        setMessage('User registered successfully!');
        setMessageType('success');
        setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
      } else {
        setMessage(result.error || 'Registration failed!');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Registration failed! Please try again.');
      setMessageType('error');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(loginData.email, loginData.password);
      
      if (result.success) {
        setMessage('User logged in successfully!');
        setMessageType('success');
        setLoginData({ email: '', password: '' });
      } else {
        setMessage(result.error || 'Login failed!');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Login failed! Please try again.');
      setMessageType('error');
    }
  };

  return (
    <div className="user-register">
      <h1 className="page-title">User Portal</h1>
      
      {message && (
        <div className={messageType === 'success' ? 'success-message' : 'error-message'}>
          {message}
        </div>
      )}

      <div className="form-container">
        <div className="card">
          <h2 className="text-center mb-4">User Registration</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={(e) => handleInputChange(e, 'register')}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={(e) => handleInputChange(e, 'register')}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={(e) => handleInputChange(e, 'register')}
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
                onChange={(e) => handleInputChange(e, 'register')}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange(e, 'register')}
                required
              />
            </div>
            
            <button type="submit" className="btn">Register</button>
          </form>
        </div>

        <div className="card mt-4">
          <h2 className="text-center mb-4">User Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="loginEmail">Email</label>
              <input
                type="email"
                id="loginEmail"
                name="email"
                className="form-control"
                value={loginData.email}
                onChange={(e) => handleInputChange(e, 'login')}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                id="loginPassword"
                name="password"
                className="form-control"
                value={loginData.password}
                onChange={(e) => handleInputChange(e, 'login')}
                required
              />
            </div>
            
            <button type="submit" className="btn">Login</button>
          </form>
          
          <div className="text-center mt-4">
            <Link to="/search-bus" className="btn btn-secondary">Search Buses</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
