import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';

/*
HotelProvider separerar fetch-logiken från presentationen. HotelProvider är ansvarig
för att hämta hotelldata och tillhandahålla den via context, medan komponenter som HomePage 
bara behöver konsumera den data som tillhandahålls av HotelProvider.
*/

export const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const { data: hotels, loading, error } = useFetch('http://localhost:3000/hotels');

  return (
    <HotelContext.Provider value={{ hotels, loading, error }}>
      {children}
    </HotelContext.Provider>
  );
};
