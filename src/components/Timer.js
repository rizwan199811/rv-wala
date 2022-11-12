import React from 'react'
import { useState, useEffect } from 'react';
import { baseURL } from '../config/apiURL'
import { toast, ToastContainer } from 'react-toastify'
import toastOptions from '../config/toast'
import axios from 'axios'
const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
    const resendCode = async (e) => {
        try {
          // myInput.current.click();
          // verificationModal
       
    
          // return
          setLoading(true)
          e.preventDefault()
          let body = {
            email: localStorage.getItem("forgetEmail"),
          }
          const {
            data: { data, token, refreshToken, message },
          } = await axios.post(baseURL + '/user/forgot-password', body)
    
          toast.success(message, toastOptions)
    
          setLoading(false)
        //   toggleVerificationModal()
          // history('/', { replace: true })
          // setTimeout(() => {
           
          // }, 1000)
        } catch ({
          response: {
            data: { message },
          },
        }) {
          toast.error(message, toastOptions)
          setTimeout(() => {
            setLoading(false)
          }, 6000)
        }
      }


    return (
        <div>
        { minutes === 0 && seconds === 0
            ? <button type="submit" className="w-30 mb-3 btn btn-primary" style={{fontSize:'0.7rem'}} onClick={resendCode}>
            Re-send code
          </button>
            : <h4> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h4> 
        }
        </div>
    )
}

export default Timer;