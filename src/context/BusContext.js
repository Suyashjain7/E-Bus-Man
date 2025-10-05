import React, { createContext, useContext, useState } from 'react';

const BusContext = createContext();

export const useBusContext = () => {
  const context = useContext(BusContext);
  if (!context) {
    throw new Error('useBusContext must be used within a BusProvider');
  }
  return context;
};

export const BusProvider = ({ children }) => {
  const [buses, setBuses] = useState([
    {
      id: 1,
      route: 'Gurgaon to Delhi',
      busType: 'AC Sleeper',
      departure: '10:00 AM',
      arrival: '11:30 AM',
      price: '$25',
      seats: 32,
      operator: 'Express Bus Co.',
      duration: '1h 30m',
      details: 'Luxury AC sleeper with modern amenities',
      contact: 'express@bus.com'
    },
    {
      id: 2,
      route: 'Delhi to Gurgaon',
      busType: 'AC Seater',
      departure: '12:00 PM',
      arrival: '01:30 PM',
      price: '$20',
      seats: 45,
      operator: 'City Transport',
      duration: '1h 30m',
      details: 'Comfortable AC seating arrangement',
      contact: 'city@transport.com'
    },
    {
      id: 3,
      route: 'Gurgaon to Delhi',
      busType: 'Non-AC Seater',
      departure: '10:00 AM',
      arrival: '11:30 AM',
      price: '$15',
      seats: 50,
      operator: 'Budget Travel',
      duration: '1h 30m',
      details: 'Economical travel option',
      contact: 'budget@travel.com'
    },
    {
      id: 4,
      route: 'Delhi to Gurgaon',
      busType: 'Luxury Bus',
      departure: '12:00 PM',
      arrival: '01:30 PM',
      price: '$35',
      seats: 28,
      operator: 'Premium Travel',
      duration: '1h 30m',
      details: 'Premium luxury bus service',
      contact: 'premium@travel.com'
    }
  ]);

  const addBus = (newBus) => {
    const busWithId = {
      ...newBus,
      id: Date.now(), // Simple ID generation
      duration: '1h 30m' // Fixed duration for Gurgaon-Delhi route
    };
    setBuses(prev => [...prev, busWithId]);
  };

  const getBusesByRoute = (source, destination) => {
    const route = `${source} to ${destination}`;
    return buses.filter(bus => bus.route === route);
  };

  return (
    <BusContext.Provider value={{ buses, addBus, getBusesByRoute }}>
      {children}
    </BusContext.Provider>
  );
};
