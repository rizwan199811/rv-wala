import React from 'react'
import {  NavLink } from 'react-router-dom'
import {  useSelector,useDispatch } from 'react-redux';
import { setToken } from '../app/slice/AuthSlice';

const Header = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile.image);
  const Logout =()=>{
    localStorage.clear();
    dispatch(setToken(''))
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">

    <a className="navbar-brand" href="#">
    <img src='https://rvwala.com/wp-content/uploads/2022/06/cropped-Untitled-design-3.png'/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page" href="#">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/listRV" className="nav-link">
          list my rv
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/rvs-for-rent" className="nav-link" >
          Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact-us" className="nav-link" >
          Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about-us" className="nav-link" >
          About Us
          </NavLink>
        </li>

 
      </ul>
      {
   !token ? (<ul className="navbar-nav ms-auto mb-2 mb-lg-0">

   <li className="nav-item">
     <NavLink to="/login" className="nav-link log">
    Login
     </NavLink>
   </li>
   <li className="nav-item">
     <NavLink to="/signup" className="nav-link reg">
    Sign up
     </NavLink>
   </li>
   <li className="nav-item">
     <a className="nav-link">
   
     </a>
   </li>


 </ul>):(
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
 {/* <li className="nav-item m-auto">
     <NavLink to="#" className="nav-link dasboard-btn">
    Dashboard
     </NavLink>
   </li> */}
    <div className="dropdown header-profile-dropdown">
        <button
            className="dropdown-toggle header-profile-dropdown"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
     <img src={profile}/>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
                <NavLink to="/account-settings" className="dropdown-item" >
                    Settings
                </NavLink>
            </li>
            <li>
                <NavLink to="/booking" className="dropdown-item" >
                    Bookings
                </NavLink>
            </li>
            <li>
                <NavLink to="/" className="dropdown-item" href="#" onClick={Logout}>
                    Logout
                </NavLink>
            </li>
        </ul>
    </div>



</ul>
 )
      }
   
 
 
    </div>
  </div>
</nav>

    </>
  )
}

export default Header