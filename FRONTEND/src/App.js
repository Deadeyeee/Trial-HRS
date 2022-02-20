import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import HomePage from './pages/homePage/Home'
import AboutPage from './pages/aboutUsPage/About'
import BookingPage from './pages/bookingPage/Booking'
import ContactPage from './pages/contactPage/Contact'
import FamenitiesPage from './pages/famenitiesPage/Famenities'
import RoomPage from './pages/roomRatesPage/RoomRates'
import Error404 from './pages/404Error/Error404';
import Login from './pages/login/Login';
import Register from './pages/login/register/Register';
import Registered from './pages/login/register/AccountCreated';
import ForgotPasswordPage from './pages/login/forgotPasswordPage/ForgotPasswordPage';
import ConfirmNewPassword from './pages/login/confirmNewPasswordPage/ConfirmNewPassword';
import VerificationEmail from './pages/login/verificationEmailPage/VerificationEmail';
import BookingChildPage from './pages/bookingChildPage/BookingChildPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/roomRate" element={<RoomPage />} />
        <Route path="/facilitiesAmenities" element={<FamenitiesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registered/:id" element={<Registered />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/newPassword" element={<ConfirmNewPassword />} />
        <Route path="/verifyEmail" element={<VerificationEmail />} />
        <Route path="booking/room" element={<BookingChildPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
