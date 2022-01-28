import React from 'react'
import { 
  BrowserRouter as Router,
  Route, 
  Link, 
  Navigate   } from 'react-router-dom';

import HomePage from '../pages/homePage/Home'
import AboutPage from '../pages/aboutUsPage/About'
import BookingPage from '../pages/bookingPage/Booking'
import ContactPage from '../pages/contactPage/Contact'
import FamenitiesPage from '../pages/famenitiesPage/Famenities'
import RoomPage from '../pages/roomRatesPage/RoomRates'
import Error404 from '../pages/404Error/Error404';
import Register from '../pages/login/register/Register';

export const routes = () => {
    return (
        <Router>
                <Route exact path="/" components={HomePage}/>
                <Route exact path="/booking" components={BookingPage}/>
                <Route exact path="/contactUs" components={ContactPage}/>
                <Route exact path="/aboutUs" components={AboutPage}/>
                <Route exact path="/roomRate" components={RoomPage}/>
                <Route exact path="/facilitiesAmenities" components={FamenitiesPage}/>
                <Route exact path="/404" components={Error404}/>
                <Route exact path="/register" components={Register}/>
                <Navigate  to="/404"/>
        </Router>
    )
}

export default routes;