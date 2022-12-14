import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify'
import toastOptions from '../config/toast'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yi3uz5q",
        "template_qab0wdc",
        form.current,
        "1wftmcOR52AmWxF7t"
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Message sent", toastOptions)
          // console.log("message sent");
        },
        (error) => {
          // console.log(error.text);
          toast.success("Something went wrong. Try again ", toastOptions)
        }
      );
      e.target.reset()
  };

  return (
    <div>

<section className="contact-page-sec">
        <div className="container pb-5">
          <div className="row py-5">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked" />
                  </div>
                  <div className="contact-info-text">
                    <h2>address</h2>
                    <span>1010 Avenue,Saskatchewan, Canada</span> 
                    {/* <span>Chandigarh , INDIA</span>  */}
                  </div>
                </div>            
              </div>          
            </div>          
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail</h2>
                    <span>contact@rvwala.com</span> 
                  </div>
                </div>            
              </div>                
            </div>                
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone" />
                  </div>
                  <div className="contact-info-text">
                    <h2>Contact</h2>
                    <span>+1-306-241-0969</span>
                  </div>
                </div>            
              </div>          
            </div>          
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form" >
                <h2>Get in Touch</h2> 
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Your Name" name="user_name" />
                      </div>
                    </div>  
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="email" placeholder="E-mail" name="user_email" required />
                      </div>
                    </div>                              
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Phone Number" name="user_phone" />
                      </div>
                    </div>  
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input type="text" placeholder="Subject" name="user_subject" />
                      </div>
                    </div>                
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea placeholder="Write Your Message" name="user_message" />
                      </div>
                    </div>                                                
                    <div className="single-input-fieldsbtn">
                      <input type="submit" defaultValue="Send Now" />
                    </div>                          
                  </div>
                </form>   
              </div>      
            </div>
            <div className="col-md-4">        
              <div className="contact-page-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41280512.80818719!2d-130.25677910546378!3d50.83926625739043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2s!4v1661048499890!5m2!1sen!2s" width="100%" height={370} frameBorder={0} style={{border: 0}} allowFullScreen />
              </div>          
            </div>        
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  )
}

export default Contact;