import { Button, Nav, NavItem } from 'reactstrap'
import { Link, useLocation } from 'react-router-dom'
import user1 from '../../assets/images/users/user4.jpg'
import probg from '../../assets/images/bg/download.jpg'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import toastOptions from '../../config/toast'
import axios from 'axios'
import { baseURL } from '../../config/apiURL'

// const navigation = [
//   {
//     title: "Dashboard",
//     href: "/starter",
//     icon: "bi bi-speedometer2",
//   },
//   {
//     title: "RV Request",
//     href: "/rv-request",
//     icon: "bi bi-speedometer2",
//   },
//   {
//     title: "Bookings",
//     href: "/bookings",
//     icon: "bi bi-speedometer2",
//   }
// ];


// const navigation = [
//   {
//     title: "Dashboard",
//     href: "/starter",
//     icon: "bi bi-speedometer2",
//   },
//   {
//     title: "RV Request",
//     href: "/rv-request",
//     icon: "bi bi-speedometer2",
//   },
//   {
//     title: "Bookings",
//     href: "/bookings",
//     icon: "bi bi-speedometer2",
//   },
//   {
//     title: "Blogs",
//     href: "/blogs",
//     icon: "bi bi-speedometer2",
//   },
//   // {
//   //   title: "Alert",
//   //   href: "/alerts",
//   //   icon: "bi bi-bell",
//   // },
//   // {
//   //   title: "Badges",
//   //   href: "/badges",
//   //   icon: "bi bi-patch-check",
//   // },
//   // {
//   //   title: "Buttons",
//   //   href: "/buttons",
//   //   icon: "bi bi-hdd-stack",
//   // },
//   // {
//   //   title: "Cards",
//   //   href: "/cards",
//   //   icon: "bi bi-card-text",
//   // },
//   // {
//   //   title: "Grid",
//   //   href: "/grid",
//   //   icon: "bi bi-columns",
//   // },
//   // {
//   //   title: "Table",
//   //   href: "/table",
//   //   icon: "bi bi-layout-split",
//   // },
//   // {
//   //   title: "Forms",
//   //   href: "/forms",
//   //   icon: "bi bi-textarea-resize",
//   // },
//   // {
//   //   title: "Breadcrumbs",
//   //   href: "/breadcrumbs",
//   //   icon: "bi bi-link",
//   // },
//   // {
//   //   title: "About",
//   //   href: "/about",
//   //   icon: "bi bi-people",
//   // },
// ];

const Sidebar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false)
  const [loading, setLoading] = useState(false)
  const [permissions, setPermissions] = useState([])
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) :{}
  useEffect(() => {
    document.getElementById('sidebarArea').classList.toggle('showSidebar')
  }, [toggleSideBar])

  const fetchPermissions = async () => {
    try {
      setLoading(true)
      let headers = {
        Authorization: localStorage.getItem('token'),
      }
      const {
        data: { data },
      } = await axios.get(baseURL + '/user', { headers })
      console.log({ data })
      setPermissions(data.permissions || [])

      setLoading(false)
    } catch ({
      response: {
        data: { message },
      },
    }) {
      console.log({ message })
      toast.error(message, toastOptions)
    }
  }
  useEffect(() => {
    if(localStorage.getItem('token')){
      fetchPermissions()
    }
    return () => {
      setPermissions([]); // This worked for me
    };
  }, [])

  const showMobilemenu = () => {
    setToggleSideBar(!toggleSideBar)
    // document.getElementById("sidebarArea").classList.toggle("showSidebar");
  }
  let location = useLocation()

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{
          background: `url(${user.image && user.image || "https://rvwala.com/wp-content/uploads/2022/06/cropped-Untitled-design-3.png"}) no-repeat`,
          backgroundPosition: 'center',
        }}
      >
        <div className="p-3 d-flex">
          <img src={user1} alt="user" width="50" className="rounded-circle" />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">{user.fullname}</div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {permissions.length > 0 &&
            permissions.map((navi, index) => {
              console.log({ navi })
              return (
                <NavItem key={index} className="sidenav-bg">
                  <Link
                    to={navi.href}
                    className={
                      location.pathname === navi.href
                        ? 'active nav-link py-3'
                        : 'nav-link text-secondary py-3'
                    }
                  >
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </Link>
                </NavItem>
              )
            })}
          {/* <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://wrappixel.com/templates/materialpro-react-admin/?ref=33"
          >
            Upgrade To Pro
          </Button> */}
        </Nav>
      </div>
    </div>
  )
}

export default Sidebar