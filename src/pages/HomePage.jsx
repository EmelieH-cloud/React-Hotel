import React, { useContext} from 'react';
import HotelCard from '../components/HotelCard';
import { HotelContext } from '../context/hotelContext';

function HomePage() {

    // Hämta hotellen med useContext
    const { hotels, loading, error } = useContext(HotelContext);
    // Genom att använda destrukturering med måsvingarna {} plockas dessa specifika värden från objektet direkt
    // och tilldelar dem till separata variabler med samma namn.

    // om det inte returnerades någon hotels-lista, utvärderas nedan if-satser. 
    if (loading) 
     {
     return <div>Loading...</div>;
     }

     if (error) 
    {
    return <div>Error: {error}</div>;
    }

   

  // Renderingsvy: displaya alla hotell med hjälp av HotelCard-komponenten. 
    return ( <>
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    
    
    </> );
}

export default HomePage;