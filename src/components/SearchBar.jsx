import React, { useState, useEffect, useContext } from 'react';
import { HotelContext } from '../context/hotelContext'; // Justera denna import beroende på var du har din context
import '../styles/SearchBar.css';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredHotels, setFilteredHotels] = useState([]);
    const { hotels, loading, error } = useContext(HotelContext);

    useEffect(() => {
        const searchTerm = searchInput.toLowerCase();
        if (searchTerm) {
            const filtered = hotels.filter(hotel =>
                hotel.name.toLowerCase().includes(searchTerm)
            );
            setFilteredHotels(filtered);
        } else {
            setFilteredHotels(hotels);
        }
    }, [hotels, searchInput]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

        return (
   
        <div className='search-container'>
            <h1>Dynamic search</h1>
            <input
                type="text"
                placeholder="Search hotels"
                value={searchInput}
                onChange={handleChange}
            />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {filteredHotels && filteredHotels.length > 0 ? (
                    filteredHotels.map(hotel => (
                        <li key={hotel.id}>{hotel.name}</li>
                    ))
                ) : (
                    <li>No hotels found</li>
                )}
            </ul>
        </div>
    );
};

export default SearchBar;
