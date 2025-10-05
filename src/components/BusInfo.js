import React, { useState } from 'react';
import { useBusContext } from '../context/BusContext';

function BusInfo() {
  const { addBus } = useBusContext();
  const [formData, setFormData] = useState({
    route: '',
    busType: '',
    busDetails: '',
    contactDetails: '',
    price: '',
    seats: '',
    operator: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate bus info submission
    setMessage(`Bus Info submitted successfully! Type: ${formData.busType}`);
    setMessageType('success');
    setFormData({ busType: '', busDetails: '', contactDetails: '' });
  };

  return (
    <div className="bus-info">
      <h1 className="page-title">Bus Information Management</h1>
      
      {message && (
        <div className={messageType === 'success' ? 'success-message' : 'error-message'}>
          {message}
        </div>
      )}

      <div className="form-container">
        <div className="card">
          <h2 className="text-center mb-4">Submit Bus Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="busType">Bus Type</label>
              <select
                id="busType"
                name="busType"
                className="form-control"
                value={formData.busType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Bus Type</option>
                <option value="AC Sleeper">AC Sleeper</option>
                <option value="Non-AC Sleeper">Non-AC Sleeper</option>
                <option value="AC Seater">AC Seater</option>
                <option value="Non-AC Seater">Non-AC Seater</option>
                <option value="Luxury Bus">Luxury Bus</option>
                <option value="Mini Bus">Mini Bus</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="busDetails">Bus Details</label>
              <textarea
                id="busDetails"
                name="busDetails"
                className="form-control"
                value={formData.busDetails}
                onChange={handleInputChange}
                rows="4"
                placeholder="Enter bus details, amenities, capacity, etc."
                required
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="contactDetails">Contact Details</label>
              <input
                type="text"
                id="contactDetails"
                name="contactDetails"
                className="form-control"
                value={formData.contactDetails}
                onChange={handleInputChange}
                placeholder="Phone number or email for contact"
                required
              />
            </div>
            
            <button type="submit" className="btn">Submit Bus Info</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BusInfo;
