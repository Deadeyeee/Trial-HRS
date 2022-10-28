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
import ResetPasswordSuccessPage from './client/pages/resetPasswordSuccess/ResetPasswordSuccessPage';
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
import Status from './admin/pages/status/Status';
import Payment from './admin/pages/payment/Payment';
import Guest from './admin/pages/guest/Guest';
import Bookings from './admin/pages/bookings/Bookings';

import UserLogs from './admin/pages/userLogs/UserLogs';
import UserList from './admin/pages/userList/UserList';
import RoomStatus from './admin/pages/roomStatus/RoomStatus';
import Reservation from './admin/pages/reservation/Reservation';
import BookingCartPage from './client/pages/bookingCartPage/BookingCartPage';
import RoomDetails from './admin/pages/roomDetails/RoomDetails';
import BillingSummaryPage from './client/pages/billingSummaryPage/BillingSummaryPage';
import ProfileAdmin from './admin/pages/profile/ProfileAdmin';
import Reports from './admin/pages/Reports/Reports';
import Messages from './admin/pages/messages/Messages';
import Additional from './admin/pages/additional/Additional';
import FrontDashboard from './frontDesk/pages/frontDashboard/FrontDashboard';
import FrontBookings from './frontDesk/pages/frontBookings/FrontBookings';
import FrontPayment from './frontDesk/pages/frontPayment/FrontPayment';
import FrontStatus from './frontDesk/pages/frontStatus/FrontStatus';
import FrontRoomDetails from './frontDesk/pages/frontRoomDetails/FrontRoomDetails';
import FrontRoomStatus from './frontDesk/pages/frontRoomStatus/FrontRoomStatus';
import FrontMessages from './frontDesk/pages/frontMessages/FrontMessages';
import ProfileFront from './frontDesk/pages/frontProfile/ProfileFront';
import FrontReservation from './frontDesk/pages/frontReservation/FrontReservation';
import FrontAdditional from './frontDesk/pages/frontAdditional/FrontAdditional';
import OfficialReceipt from './admin/pages/officialReceipt/OfficialReceipt';
import AcknowledgementReceipt from './admin/pages/acknowledgementReceipt/AcknowledgementReceipt';
import GeneratedReports from './admin/pages/generateReports/GenerateReports';



//frontDesk

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
        <Route path="/newPassword/:id" element={<ConfirmNewPassword />} />
        <Route path="/verifyEmail" element={<VerificationEmail />} />
        <Route path="/resetPasswordSuccess" element={<ResetPasswordSuccessPage />}/>
        <Route path="/booking/room/:id" element={<BookingChildPage />} />
        <Route path="/guestInformation" element={<GuestInfoPage />} />
        <Route path="/booking/confirmation/:id" element={<BookingConfirmationPage />} />
        <Route path="/billingSummary" element={<BillingSummaryPage />} />
        <Route path="/bookingCart" element={<BookingCartPage />} />

        <Route path="/client/profile" element={<Profile />} />
        <Route path="/client/bookingInfo" element={<ClientBookingInfoPage />} />
        <Route path="/client/paymentInfo" element={<ClientPaymentInfoPage />} />
        <Route path="/client/messages" element={<ClientMessagesPage />} />
      

        <Route path="/admin" element={<AdminProfile />} />
        <Route path="/admin/status" element={<Status />} />
        <Route path="/admin/payments" element={<Payment/>} />
        <Route path="/admin/guests" element={<Guest />} />
        <Route path="/admin/booking" element={<Bookings/>}/>
        <Route path="/admin/reservation" element={<Reservation/>}/>
        <Route path="/admin/userLogs" element={<UserLogs />} />
        <Route path="/admin/userList" element={<UserList />} />
        <Route path="/admin/roomStatus" element={<RoomStatus />}/>
        <Route path="/admin/roomDetails" element={<RoomDetails />}/>
        <Route path="/admin/profile" element={<ProfileAdmin />}/>
        <Route path="/admin/messages" element={<Messages />}/>
        <Route path="/admin/report" element={<Reports />}/>
        <Route path="/admin/additionals" element={<Additional />}/>
        
        <Route path="/admin/officialReceipt/:id" element={<OfficialReceipt />}/>
        <Route path="/admin/acknowledgementReceipt/:id" element={<AcknowledgementReceipt />}/>
        <Route path="/admin/generatedReport" element={<GeneratedReports />}/>




        <Route path="/frontdesk" element={<FrontDashboard />} />
        <Route path="/frontdesk/status" element={<FrontStatus />} />
        <Route path="/frontdesk/payments" element={<FrontPayment/>} />
        <Route path="/frontdesk/booking" element={<FrontBookings/>}/>
        <Route path="/frontdesk/reservation" element={<FrontReservation/>}/>
        <Route path="/frontdesk/roomStatus" element={<FrontRoomStatus />}/>
        <Route path="/frontdesk/roomDetails" element={<FrontRoomDetails />}/>
        <Route path="/frontdesk/profile" element={<ProfileFront />}/>
        <Route path="/frontdesk/messages" element={<FrontMessages />}/>
        <Route path="/frontdesk/additionals" element={<FrontAdditional />}/>
        <Route path="*" element={<Error404 />} />

      </Routes>
    </Router>
  );
}

export default App;
