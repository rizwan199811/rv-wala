import * as Yup from "yup";

export const paymentSchema = Yup.object({
  card_name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string().min(10).max(11).required("Please enter your phone number"),
  country: Yup.string().required("Please enter your county"),
  postal_code: Yup.string().required("Please enter your postal code"),
  state: Yup.string().required("Please enter your state"),
  city: Yup.string().required("Please enter your city"),
  address: Yup.string().required("Please enter your address"),
  company_name: Yup.string(),
    cardNumber: Yup.string()
    .label('Card number')
    .max(16)
    .required(),
  cvc: Yup.string()
    .label('CVC')
    .min(3)
    .max(4)
    .required(),
//   nameOnCard: Yup.string()
//     .label('Name on card')
//     .required(),
  expiryMonth: Yup.string()
    .label('Expiry month')
    .min(2)
    .max(2)
    .required(),
  expiryYear: Yup.string()
    .label('Expiry year')
    .min(4)
    .max(4)
    .required(),
});