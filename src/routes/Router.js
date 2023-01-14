import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login.js";
import {  useSelector } from 'react-redux';
import {EditRV} from "../pages/RV/EditRV"
/****Layouts*****/
const FullLayout = lazy(() => import("../components/layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const RVrequest = lazy(() => import("../pages/RV/Rvrequest.js"));
const RVDetails = lazy(() => import("../pages/RV/RvDetails.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Fleet = lazy(() => import("../views/Fleet"));
const Bookings = lazy(() => import("../pages/Booking"));
const BookingsDetails = lazy(() => import("../pages/BookingDetails"));
const Blogs = lazy(() => import("../pages/Blog/Blog"));
const AddBlog = lazy(() => import("../pages/Blog/AddBlog"));
const ViewBlog = lazy(() => import("../pages/Blog/ViewBlogs"));
const RVlistings = lazy(() => import("../pages/RV/RVlisting"));
const NotFound = lazy(() => import("../components/NotFound"));


/*****Routes******/

// const ThemeRoutes = [
//   {
//     path: "/",
//     element: <FullLayout />,
//     children: [
//       { path: "/", element: <Navigate to="/starter" /> },
//       { path: "/starter", exact: true, element: <Starter /> },
//       { path: "/about", exact: true, element: <About /> },
//       { path: "/alerts", exact: true, element: <Alerts /> },
//       { path: "/badges", exact: true, element: <Badges /> },
//       { path: "/buttons", exact: true, element: <Buttons /> },
//       { path: "/cards", exact: true, element: <Cards /> },
//       { path: "/grid", exact: true, element: <Grid /> },
//       { path: "/table", exact: true, element: <Tables /> },
//       { path: "/forms", exact: true, element: <Forms /> },
//       { path: "/rv-request", exact: true, element: <RVrequest /> },
//       { path: "/rv-request/details", exact: true, element: <RVDetails /> },
//       { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
//     ],
//   },
// ];

// export default ThemeRoutes;




const Router = () => {
  console.log("called")  
  const user =localStorage.user ? JSON.parse(localStorage.user) :{}
  const token = useSelector((state) => state.auth.token);
  const ThemeRoutes = token? [
    {
      path: "/",
      element: <FullLayout />,
      children: [
        { path: "/", element: <Navigate to={user.role=="admin"?"rvs":"/rv-request"} replace ={true}/> },
        { path: "/starter", exact: true , element: <Starter /> },
        { path: "/about", exact: true, element: <About /> },
        { path: "/alerts", exact: true, element: <Alerts /> },
        { path: "/badges", exact: true, element: <Badges /> },
        { path: "/buttons", exact: true, element: <Buttons /> },
        { path: "/cards", exact: true, element: <Cards /> },
        { path: "/grid", exact: true, element: <Grid /> },
        { path: "/table", exact: true, element: <Tables /> },
        { path: "/forms", exact: true, element: <Forms /> },
        { path: "/rv-request", exact: true, element: <RVrequest /> },
        { path: "/rv-request/:id", exact: true, element: <RVDetails /> },
        { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
        { path: "/fleet", exact: true, element: <Fleet /> },
        { path: "/bookings", exact: true, element: <Bookings /> },
        { path: "/booking-details/:id", exact: true, element: <BookingsDetails /> },
        { path: "/blogs", exact: true, element: <Blogs /> },
        { path: "/blogs/add-new-blog", exact: true, element: <AddBlog /> },
        { path: "/blogs/:id", exact: true, element: <ViewBlog /> },
        { path: "/blogs/edit/:id", exact: true, element: <AddBlog /> },
        { path: "/rvs", exact: true, element: <RVlistings /> },
        { path: "/rvlisting/edit/:id", exact: true, element: <EditRV /> },
        { path: "/rvlisting/view/:id", exact: true, element: <RVDetails /> },
        { path: "*", exact: true, element: <NotFound /> },

      ],
    },
  ]:[
    {
      path: "/",
      exact:true,
      element: <Login />
    }
  ];
  return ThemeRoutes
}

export default Router
