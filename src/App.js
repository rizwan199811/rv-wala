import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes,Navigate} from 'react-router-dom'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import { CreateListing } from './pages/RV/CreateListing'
import ListingRv from './pages/ListingRv'
import {SingleDetailContainer} from './pages/RV/SingleRV/SingleDetailContainer'
import {  useSelector } from 'react-redux';
import AddDetails from './pages/AddDetails'
import Checkout from './pages/Checkout/CheckoutContainer'
function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking-details" element={<AddDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        {token && (
          <>
            <Route path="/contactus" element={<Contact />} />
            <Route path="/listRV" element={<CreateListing />} />
            <Route path="/rvs-for-rent" element={<ListingRv />} />
            <Route path="/rvs-for-rent/detail/:id" element={<SingleDetailContainer />} />
          </>
        )}

        {!token &&  (
         <> 
         <Route
          path="*"
          element={<Navigate to="/login" replace />}
         />
         <Route path="/rvs-for-rent" element={<ListingRv />} />
         </>
        )}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
