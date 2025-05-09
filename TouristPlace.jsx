import React from 'react';

const TouristPlace = ({ placeName, desc, img, whenToVisit, ratings, price }) => {
  const priceCategory = price < 12000 ? 'Cheaper' : 'Expensive';
  const visitHighlightClass =
    whenToVisit === 'Summer' ? 'bg-yellow-300' : 'bg-blue-200';

  return (
    <div className="flex justify-center bg-gray-100 py-4">
      <div className="border border-gray-300 w-80 p-4 rounded-lg bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-2">{placeName}</h2>
        <img
          src={img}
          alt={placeName}
          className="w-full h-44 object-cover rounded-md mb-2"
        />
        <p className="text-sm mb-2">{desc}</p>
        <p className="text-sm mb-1">
          <strong>Ratings:</strong> {ratings}
        </p>
        <p className="text-sm mb-2">
          <strong>Price:</strong> ₹{price} - <span>{priceCategory}</span>
        </p>
        <span
          className={`text-sm px-2 py-1 rounded ${visitHighlightClass}`}
        >
          Best to visit in: {whenToVisit}
        </span>
      </div>
    </div>
  );
};

export default TouristPlace;
