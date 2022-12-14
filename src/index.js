import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './helpers/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <BrowserRouter>
 <ScrollToTop />
 <Provider store={store}>
  <App />
  </Provider>
</BrowserRouter>
);

reportWebVitals();
