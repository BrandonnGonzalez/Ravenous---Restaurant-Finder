import React from "react";
import "./BusinessList.css";
import Business from "./Business";

const BusinessList = ({ businesses, isSearching, hasSearched }) => {
  if (isSearching) {
    return (
      <div className="BusinessList">
        <div className="loading-message">
          <h3>🔍 Searching for businesses...</h3>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (hasSearched && businesses.length === 0) {
    return (
      <div className="BusinessList">
        <div className="no-results-message">
          <h3>😔 No businesses found</h3>
          <p>Try adjusting your search terms or location.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="BusinessList">
      {hasSearched && (
        <div className="search-results-header">
          <p>Found {businesses.length} business{businesses.length !== 1 ? 'es' : ''}</p>
        </div>
      )}
      {businesses.map((biz) => (
        <Business key={`${biz.name}-${biz.address}`} business={biz} />
      ))}
    </div>
  );
};

export default BusinessList;
