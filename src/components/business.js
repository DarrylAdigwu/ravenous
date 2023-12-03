import React from "react";

const restraunts = {
    name: "Hideout",
    address: "12345 S North Avenue",
    city: "Newark",
    state: "CA",
    zipcode: "92345",
    category: "Nigerian",
    rating: 5.0,
    reviewCount: 90
};

const Business = (company) => {
  return (
    <div>

      <img
        src=""
        alt=""
      />

      <h2 className="name">{restraunts.name}</h2>

      <div className="location">
        <p className="address">{restraunts.address}</p>
        <p className="city">{restraunts.city}</p>
        <p className="state">{restraunts.state}</p>
        <p className="zipcode">{restraunts.zipcode}</p>
      </div>

      <div className="description">
        <h3 className="category">{restraunts.category}</h3>
        <p className="rating">{restraunts.rating} stars</p>
        <p className="review-count">{restraunts.reviewCount} reviews</p>
      </div>

    </div>
  )
};

export default Business;