import React from 'react'
import { Link } from 'react-router-dom'
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
          <Link to="/" className="nav-link active" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link  to="/listRV" className="nav-link">
          list my rv
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/rvs-for-rent" className="nav-link" >
          Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactus" className="nav-link" >
          Contact
          </Link>
        </li>

 
      </ul>
      {
   !token ? (<ul className="navbar-nav ms-auto mb-2 mb-lg-0">

   <li className="nav-item">
     <Link to="/login" className="nav-link log" href="#">
    Login
     </Link>
   </li>
   <li className="nav-item">
     <Link to="/signup" className="nav-link reg" href="#">
    Sign up
     </Link>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="#">
   
     </a>
   </li>


 </ul>):(
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

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
                <a className="dropdown-item" href="#">
                    Settings
                </a>
            </li>
            <li>
                <Link to="/" className="dropdown-item" href="#" onClick={Logout}>
                    Logout
                </Link>
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