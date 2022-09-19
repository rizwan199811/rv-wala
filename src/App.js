import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import {CreateListing} from './pages/CreateListing';
import AfterLoginHeader from './components/AfterLoginHeader';
import ListingRv from './pages/ListingRv';
import SingleDetailRV from './pages/SingleDetailRV';


function App() {
  return (
    <div>
      <Header/>
      {/* <AfterLoginHeader/> */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <LogIn/> } />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/contactus" element={ <Contact/> } />
        <Route path="/listRV" element={ <CreateListing/> } />
        <Route path="/rvs-for-rent" element={ <ListingRv/> } />
        <Route path="/rvs-for-rent/detail" element={ <SingleDetailRV/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
