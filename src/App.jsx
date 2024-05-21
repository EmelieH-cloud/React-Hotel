import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HotelProvider } from './context/hotelContext';
import HomePage from './pages/HomePage';
import HotelPage from './pages/HotelPage';
import BookingPage from './pages/BookingPage';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import './App.css';


const App = () => (
  <HotelProvider>
    <Router>
      <Navbar />  {/* Navbar måste ligga inuti Router eftersom den använder sig av routing-funktionen Link */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
         <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="/book/:id" element={<BookingPage />} />
      </Routes>
    </Router>
        <SearchBar/>
  </HotelProvider>
);

export default App;
