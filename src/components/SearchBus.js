import React, { useState } from 'react';

function SearchBus() {
  const [searchData, setSearchData] = useState({
    source: '',
    destination: '',
    date: ''
  });
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock search results
      const mockResults = [
        {
          id: 1,
          route: 'Gurgaon to Delhi',
          busType: 'AC Sleeper',
          departure: '10:00 AM',
          arrival: '11:30 AM',
          price: '$25',
          seats: 32,
          operator: 'Express Bus Co.',
          duration: '1h 30m'
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
          duration: '1h 30m'
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
          duration: '1h 30m'
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
          duration: '1h 30m'
        }
      ];
      
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="search-bus">
      <h1 className="page-title">Search Buses</h1>
      
      <div className="form-container">
        <div className="card">
          <h2 className="text-center mb-4">Find Available Buses</h2>
          <form onSubmit={handleSearch}>
            <div className="form-group">
              <label htmlFor="source">From</label>
              <input
                type="text"
                id="source"
                name="source"
                className="form-control"
                value={searchData.source}
                onChange={handleInputChange}
                placeholder="Enter departure city"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="destination">To</label>
              <input
                type="text"
                id="destination"
                name="destination"
                className="form-control"
                value={searchData.destination}
                onChange={handleInputChange}
                placeholder="Enter destination city"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="date">Date of Journey</label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                value={searchData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <button type="submit" className="btn" disabled={isSearching}>
              {isSearching ? 'Searching...' : 'Search Buses'}
            </button>
          </form>
        </div>

        {searchResults.length > 0 && (
          <div className="card mt-4">
            <h3 className="text-center mb-4">Available Buses</h3>
            <div className="search-results">
                             {searchResults.map(bus => (
                 <div key={bus.id} className="bus-result">
                   <div className="bus-info">
                     <h4>{bus.route}</h4>
                     <p><strong>Bus Type:</strong> {bus.busType}</p>
                     <p><strong>Operator:</strong> {bus.operator}</p>
                     <p><strong>Departure:</strong> {bus.departure} | <strong>Arrival:</strong> {bus.arrival}</p>
                     <p><strong>Duration:</strong> {bus.duration} | <strong>Available Seats:</strong> {bus.seats}</p>
                   </div>
                   <div className="bus-price">
                     <span className="price">{bus.price}</span>
                     <button className="btn btn-secondary">Book Now</button>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBus;
