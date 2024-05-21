import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HotelCard.css';

const HotelCard = ({ hotel }) => {
    const navigate = useNavigate();

 const handleBookNow = () => 
 {
    navigate(`/book/${hotel.id}`);
  };

  return (
    <div className="hotel-card">
      {hotel.image ?
      // om bild finns.. visa den
       (<img src={hotel.image} alt={hotel.name} className="hotel-image" /> )
        : // annars "image not available"
         (<div className="no-image">Image not available</div> )}
      <div className="hotel-details">
        <h2 className="hotel-name">{hotel.name}</h2>
        <p className="hotel-location">{hotel.location}</p>
        <p className="hotel-rating">Rating: {hotel.rating}/5</p>
        <p className="hotel-description">{hotel.description}</p>
        <button onClick={handleBookNow} className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default HotelCard;

