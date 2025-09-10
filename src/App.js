import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';

// Sample business data for search simulation
const allBusinesses = [
  {
    imageSrc: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Bordertown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    imageSrc: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/6398f26cb77dc209f3628aeb_Whopper.png",
    name: "Burger King",
    address: "1453 Morton Ave",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    category: "Fast Food",
    rating: 4.0,
    reviewCount: 100,
  },
  {
    imageSrc: "https://upload.wikimedia.org/wikipedia/en/a/ae/Los_Pollos_Hermanos_logo.png",
    name: "Los Pollos Hermanos",
    address: "1234 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    category: "Mexican",
    rating: 3.7,
    reviewCount: 57,
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300",
    name: "Tony's Italian Kitchen",
    address: "456 Little Italy St",
    city: "New York",
    state: "NY",
    zipCode: "10013",
    category: "Italian",
    rating: 4.8,
    reviewCount: 234,
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300",
    name: "Taco Fiesta",
    address: "789 Sunset Blvd",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90028",
    category: "Mexican",
    rating: 4.2,
    reviewCount: 156,
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300",
    name: "Burger Palace",
    address: "321 Main Street",
    city: "Bordertown",
    state: "NY",
    zipCode: "10102",
    category: "Fast Food",
    rating: 3.9,
    reviewCount: 78,
  }
];

function App() {
  const [businesses, setBusinesses] = useState(allBusinesses);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const simulateSearch = (searchData) => {
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filteredBusinesses = [...allBusinesses];
      
      // Filter by search term (name or category)
      if (searchData.term && searchData.term.trim() !== '') {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.name.toLowerCase().includes(searchData.term.toLowerCase()) ||
          business.category.toLowerCase().includes(searchData.term.toLowerCase())
        );
      }
      
      // Filter by location (city or state)
      if (searchData.location && searchData.location.trim() !== '') {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.city.toLowerCase().includes(searchData.location.toLowerCase()) ||
          business.state.toLowerCase().includes(searchData.location.toLowerCase())
        );
      }
      
      // Sort results based on sort option
      switch (searchData.sortBy) {
        case 'rating':
          filteredBusinesses.sort((a, b) => b.rating - a.rating);
          break;
        case 'review_count':
          filteredBusinesses.sort((a, b) => b.reviewCount - a.reviewCount);
          break;
        case 'best_match':
        default:
          // Keep original order for best match
          break;
      }
      
      setBusinesses(filteredBusinesses);
      setIsSearching(false);
      setHasSearched(true);
      
      // Show search feedback
      console.log(`Search completed: Found ${filteredBusinesses.length} results`);
      console.log('Search parameters:', searchData);
    }, 1000); // 1 second delay to simulate API call
  };

  const handleSearch = (searchData) => {
    simulateSearch(searchData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Developed by Brandon Gonzalez</h1>
        <h1>Ravenous - Yelp Clone</h1>
      </header>
      <SearchBar onSearch={handleSearch} isSearching={isSearching} />
      <BusinessList businesses={businesses} isSearching={isSearching} hasSearched={hasSearched} />
    </div>
  );
}

export default App;
