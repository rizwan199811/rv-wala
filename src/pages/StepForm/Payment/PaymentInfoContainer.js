import { Elements } from '@stripe/react-stripe-js'
import React,{useEffect,useState} from 'react'
import {PaymentInfo} from './PaymentInfo.js'
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
// import { baseURL } from '../../config/apiURL';

const stripePromise = loadStripe('pk_test_51ISVyOC4CGAQHYFqRQs7JEgltf9VyUc5HqAsoo0pO4Z8RKEmHGzUlXvrwkDMWZnKdsFfwMA3sxUji0pgto0astwx004pMWVAeU');
const PaymentInfoContainer = ({  nextStep,
  prevStep,
  handleCheck,
  handleChange,
}) => {
        return (
            <Elements stripe={stripePromise}  >
            <PaymentInfo      nextStep={nextStep}
                      prevStep={prevStep}
                      handleCheck={handleCheck}
                      handleChange={handleChange}/>
            </Elements>
          )
      

}

export default PaymentInfoContainer