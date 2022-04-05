import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

// CLIENT
import HomePage from './client/pages/homePage/Home'
import AboutPage from './client/pages/aboutUsPage/About'
import BookingPage from './client/pages/bookingPage/Booking'
import ContactPage from './client/pages/contactPage/Contact'
import FamenitiesPage from './client/pages/famenitiesPage/Famenities'
import RoomPage from './client/pages/roomRatesPage/RoomRates'
import Error404 from './client/pages/404Error/Error404';
import Login from './client/pages/login/Login';
import Register from './client/pages/login/register/Register';
import Registered from './client/pages/login/register/AccountCreated';
import ForgotPasswordPage from './client/pages/login/forgotPasswordPage/ForgotPasswordPage';
import ConfirmNewPassword from './client/pages/login/confirmNewPasswordPage/ConfirmNewPassword';
import VerificationEmail from './client/pages/login/verificationEmailPage/VerificationEmail';
import BookingChildPage from './client/pages/bookingPage/bookingChildPage/BookingChildPage';
import GuestInfoPage from './client/pages/guestInformationPage/GuestInfoPage';
import FAmenitiesContent from './client/pages/famenitiesPage/fAmenitiesChild/FAmenitiesContent';
import BookingConfirmationPage from './client/pages/bookingPage/bookingConfirmationPage/BookingConfirmationPage';
import Profile from './client/pages/profilePage/Profile';
import ClientBookingInfoPage from './client/pages/clientBookingInfoPage/ClientBookingInfoPage';
import ClientPaymentInfoPage from './client/pages/clientPaymentInfoPage/ClientPaymentInfoPage';
import ClientMessagesPage from './client/pages/clientMessagesPage/ClientMessagesPage';





// Admin
import AdminProfile from './admin/pages/dashboard/Dashboard'

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
        <Route path="/facilitiesAmenities/eventsPlace" element={<FAmenitiesContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registered/:id" element={<Registered />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/newPassword" element={<ConfirmNewPassword />} />
        <Route path="/verifyEmail" element={<VerificationEmail />} />
        <Route path="/booking/room" element={<BookingChildPage />} />
        <Route path="/guestInformation" element={<GuestInfoPage />} />
        <Route path="/client/profile" element={<Profile />} />
        <Route path="/booking/confirmation" element={<BookingConfirmationPage />} />
        <Route path="/client/bookingInfo" element={<ClientBookingInfoPage />} />
        <Route path="/client/paymentInfo" element={<ClientPaymentInfoPage />} />
        <Route path="/client/messages" element={<ClientMessagesPage />} />


        <Route path="/admin" element={<AdminProfile />} />
        <Route path="*" element={<Error404 />} />

      </Routes>
    </Router>
  );
}

export default App;
