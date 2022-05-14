import React, { useState } from 'react';
import { useForm } from '../../../../hooks/useForm';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CtaArea = () => {

   const [serviceName, setServiceName] = useState("");
   const [concurrency, setConcurrency] = useState("");
   const [{name, phoneNumber, email}, handleInputChange, reset] = useForm({
      name: '',
      phoneNumber: '',
      email: '', 
  })

   const url = process.env.REACT_APP_API

   const handleChangeServiceName = (event) => {
      setServiceName(event.target.value)
   }

   const handleChangeConcurrency = (event) => {
      setConcurrency(event.target.value)
   }

   const handleEmail = (e) => {
      e.preventDefault();
      
      const receiver_email = process.env.REACT_APP_RECEIVER_EMAIL

      const message = `You have a new notification from your web site <br/> <br/> The information is: <br/> <br/> Name: ${name} <br/>Email: ${email} <br/>Phone number: ${phoneNumber} <br/>Service: ${serviceName} <br/>Concurrency: ${concurrency}`

      const data = { receiver_email, message }

      axios.post(url, data, {
         auth: {
            username: process.env.REACT_APP_USER_EMAIL,
            password: process.env.REACT_APP_PASSWORD_EMAIL
         }
      } ).then(res => {
         console.log(res.data)
         toast.info('This information has been sent')
      })

      setServiceName('')
      setConcurrency('')
      e.target.reset();
    }

   return (
      <>
         <section className="tp-appoint-cta-area yellow-dark-bg pt-80 pb-65" id="contact">
            <ToastContainer />
            <div className="container">
               <form onSubmit={ handleEmail }>
                  <div className="row align-items-center custom-mar-20">
                     <div className="col-xl-2 col-lg-12 custom-pad-20">
                        <div className="tp-appoint wow fadeInUp" data-wow-delay=".1s">
                           <h4 className="">Online <br/> Appointment </h4>
                        </div>
                     </div>
                     <div className="col-xl-8 col-lg-9 custom-pad-20">
                        <div className="row align-items-center custom-mar-20">
                           <div className="col-lg-4 custom-pad-20">
                              <div className="tp-appoint wow fadeInUp" data-wow-delay=".3s">
                                 <input type="text" placeholder="Full Name" name="name" onChange={ handleInputChange }/>
                              </div>
                           </div>
                           <div className="col-lg-4 custom-pad-20">
                              <div className="tp-appoint wow fadeInUp" data-wow-delay=".5s">
                                 <input type="text" placeholder="Phone Number" name="phoneNumber" onChange={ handleInputChange }/>
                              </div>
                           </div>
                           <div className="col-lg-4 custom-pad-20">
                              <div className="tp-appoint wow fadeInUp" data-wow-delay=".5s">
                                 <input type="text" placeholder="Email" name="email" onChange={ handleInputChange }/>
                              </div>
                           </div>
                           <div className="col-lg-4 custom-pad-20">
                              <div className="tp-appoint select-field-arrow wow fadeInUp" data-wow-delay=".7s">
                                 <select value={serviceName} onChange={handleChangeServiceName}>
                                    <option value="">Service Name</option>
                                    <option value="Commercial Service">Commercial Service</option>
                                    <option value="Residential Service">Residential Service</option>
                                    <option value="Industrial Service">Industrial Service</option>
                                 </select>
                              </div>
                           </div>
                           <div className="col-lg-4 custom-pad-20">
                              <div className="tp-appoint select-field-arrow wow fadeInUp" data-wow-delay=".7s">
                                 <select value={concurrency} onChange={handleChangeConcurrency}>
                                    <option value="">Concurrency</option>
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Bi- Weekl">Bi- Weekly</option>
                                    <option value="OR- Monthy">OR- Monthy</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-3 custom-pad-20">
                        <div className="tp-appoint text-end wow fadeInUp" data-wow-delay=".9s">
                           <button type="submit" className="theme-btn text-white">
                              <i className="flaticon-enter"></i> Submit Now</button>
                        </div>
                     </div>

                  </div>
               </form>
            </div>
         </section>
      </>
   );
};

export default CtaArea;