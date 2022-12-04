import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes, Navigate } from 'react-router-dom'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import { CreateListing } from './pages/RV/CreateListing'
import ListingRv from './pages/ListingRv'
import { SingleDetailContainer } from './pages/RV/SingleRV/SingleDetailContainer'
import { useSelector } from 'react-redux'
import AddDetails from './pages/RV/AddDetails'
import Checkout from './pages/Checkout/CheckoutContainer'
import Setting from './pages/Setting'
import VerificationCode from './components/Modals/ResetPassword/VerificationCode'
import CancellationPolicy from './pages/CancellationPolicy'
import Booking from './pages/Booking'
import RVforSale from './pages/RVforSale'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AboutUs from './pages/AboutUs'
import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'
process.env.GENERATE_SOURCEMAP = 'false'
function App() {
  const token = useSelector((state) => state.auth.token)

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking-details" element={<AddDetails />} />
        <Route path="/account-settings" element={<Setting />} />
        <Route path="/checkout" element={<Checkout />} />
        {token && (
          <>
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/listRV" element={<CreateListing />} />
            <Route path="/rvs-for-rent" element={<ListingRv />} />
            <Route path="/rvs-for-rent/detail/:id" element={<SingleDetailContainer />} />
            <Route path="/verification-code" element={<VerificationCode />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/rv-for-sale" element={<RVforSale />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
         
          </>
        )}

        {!token && (
          <>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/rvs-for-rent" element={<ListingRv />} />
            {/* <Route path="/rvs-for-rent/detail/:id" element={<SingleDetailContainer />} /> */}
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
