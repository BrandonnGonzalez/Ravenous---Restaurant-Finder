import React from "react";
import "./BusinessList.css";
import Business from "./Business";

const businesses = [
  {
    imageSrc:
      "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
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
    imageSrc:
      "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/6398f26cb77dc209f3628aeb_Whopper.png",
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
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/a/ae/Los_Pollos_Hermanos_logo.png",
    name: "Los Pollos Hermanos",
    address: "1234 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    category: "Mexican",
    rating: 3.7,
    reviewCount: 57,
  },
];

const BusinessList = () => {
  return (
    <div className="BusinessList">
      {businesses.map((biz) => (
        <Business key={`${biz.name}-${biz.address}`} business={biz} />
      ))}
    </div>
  );
};

export default BusinessList;
