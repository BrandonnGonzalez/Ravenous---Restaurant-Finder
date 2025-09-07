import React, { useState } from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const getSortByClass = (optionValue) => {
    return sortBy === optionValue ? "active" : "";
  };

  const handleSortByChange = (optionValue) => {
    setSortBy(optionValue);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // used when user clicks "Let's Go" button
  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ term, location, sortBy });
    }
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((label) => {
      const value = sortByOptions[label];
      return (
        <li
          key={value}
          className={getSortByClass(value)}
          onClick={() => handleSortByChange(value)}
        >
          {label}
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={handleTermChange}
        />
        <input placeholder="Where?" value={location} onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
