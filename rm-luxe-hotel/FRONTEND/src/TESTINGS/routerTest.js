import React from 'react';
import { Link } from 'react-router-dom';


export const routerTest = () => {
    return (
        <div>
            <h1>TANGINA MO</h1>
            <Link to="/">Home</Link>
           <Link to="/booking">Booking</Link>
           <Link to="/facilitiesAmenities">Facilities & Amenities</Link>
           <Link to="/roomRate">Rooms & Rates</Link>
           <Link to="/contactUs">Contact</Link>
           <Link to="/aboutUs">About Us</Link>
        </div>
    )
}

export default routerTest;