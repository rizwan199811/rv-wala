import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const parseJwt = (token) => {
  try {
    console.log(atob(token.split(".")[1]))
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  let location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("token");

    if (user) {
      const decodedJwt = parseJwt(user);
      console.log({now:Date.now().toString().length,expiry:decodedJwt.iat.toString().length+3})
      console.log({now:Date.now(),expiry:decodedJwt.iat*1000})

      console.log(Date.now() > decodedJwt.iat*1000,decodedJwt.iat*1000 - Date.now(),"jwt")
      let now =new Date();
      if (now.getTime() > decodedJwt.exp*1000) {
        props.logOut();
      }
     
    }
  }, [location, props]);

  return ;
};

export default AuthVerify;