import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from '../app/slice/AuthSlice'
import { useRef } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const profile = useSelector((state) => state.profile.image)
  const Logout = () => {
    localStorage.clear()
    dispatch(setToken(''))
  }

  const navButton = useRef(null)
  const linksContainerRef = useRef(null)

  function collapseNav() {
    navButton.current.classList.add('collapsed')
    linksContainerRef.current.classList.remove('show')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://rvwala.com/wp-content/uploads/2022/06/cropped-Untitled-design-3.png" />
          </a>
          <button
            ref={navButton}
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
          <div
            ref={linksContainerRef}
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link "
                  aria-current="page"
                  href="#"
                  onClick={collapseNav}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/listRV"
                  className="nav-link"
                  onClick={collapseNav}
                >
                  list my rv
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/rvs-for-rent"
                  className="nav-link"
                  onClick={collapseNav}
                >
                  Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact-us"
                  className="nav-link"
                  onClick={collapseNav}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item" onClick={collapseNav}>
                <NavLink to="/about-us" className="nav-link">
                  About Us
                </NavLink>
              </li>
            </ul>
            {!token ? (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link log"
                    onClick={collapseNav}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/signup"
                    className="nav-link reg"
                    onClick={collapseNav}
                  >
                    Sign up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link"></a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <li className="nav-item m-auto">
                  <NavLink to="#" className="nav-link dasboard-btn">
                    Go to Dashboard
                  </NavLink>
                </li> */}
                <div className="dropdown header-profile-dropdown">
                  <button
                    className="dropdown-toggle header-profile-dropdown"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={profile} />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink
                        to="/account-settings"
                        className="dropdown-item"
                        onClick={collapseNav}
                      >
                        Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/booking"
                        className="dropdown-item"
                        onClick={collapseNav}
                      >
                        Bookings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="dropdown-item"
                        href="#"
                        onClick={Logout}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
