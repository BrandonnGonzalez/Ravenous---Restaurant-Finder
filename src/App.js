import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';

function App() {
  const handleSearch = (searchData) => {
    console.log('Search data:', searchData);
    // This is where you would typically make an API call
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Developed by Brandon Gonzalez</h1>
        <h1>Ravenous - Yelp Clone</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <BusinessList />
    </div>
  );
}

export default App;
