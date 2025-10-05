import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import DriverLogin from './components/DriverLogin';
import CreateDriver from './components/CreateDriver';
import UserRegister from './components/UserRegister';
import BusInfo from './components/BusInfo';
import SearchBus from './components/SearchBus';
import { BusProvider } from './context/BusContext';
import { AuthProvider } from './context/AuthContext';
import { validateFirebaseSetup, displayFirebaseStatus } from './utils/firebaseValidation';
import './App.css';

function App() {
  useEffect(() => {
    // Validate Firebase setup on app start
    const checkFirebaseSetup = async () => {
      const validation = await validateFirebaseSetup();
      displayFirebaseStatus(validation);
    };
    
    checkFirebaseSetup();
  }, []);

  return (
    <AuthProvider>
      <BusProvider>
        <Router>
          <div className="App">
            <Header />
            <main className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/driver-login" element={<DriverLogin />} />
                <Route path="/create-driver" element={<CreateDriver />} />
                <Route path="/user-register" element={<UserRegister />} />
                <Route path="/bus-info" element={<BusInfo />} />
                <Route path="/search-bus" element={<SearchBus />} />
              </Routes>
            </main>
          </div>
        </Router>
      </BusProvider>
    </AuthProvider>
  );
}

export default App;
