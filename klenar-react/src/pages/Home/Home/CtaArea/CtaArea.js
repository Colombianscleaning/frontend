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

   const url = "https://api.colombianscleaning.com/"

   const handleChangeServiceName = (event) => {
      setServiceName(event.target.value)
   }

   const handleChangeConcurrency = (event) => {
      setConcurrency(event.target.value)
   }

   const handleEmail = (e) => {
      e.preventDefault();
      
      const receiver_email = "colombianscleaning@gmail.com"

      const message = `You have a new notification from your web site <br/> <br/> The information is: <br/> <br/> Name: ${name} <br/>Email: ${email} <br/>Phone number: ${phoneNumber} <br/>Service: ${serviceName} <br/>Concurrency: ${concurrency}`

      const dataClean = { receiver_email, message }

      axios.post(url, dataClean, {
         auth: {
            username: "dsiemail",
            password: "AAAAB3NzaC1yc2EAAAADAQABAAABgQC/zfe/pb+4UgwzEBYOeb9QQ6eG/rBhwLCS4XhZNxQYiB8Fxsut3v7u2isrd6EwuGu8qQo4oZEs1b0x39Nl+E9drOoIq1+7m9vAUmsBCW6omMs+YJHMbq3GPZMCQvrD1M2G34QBlpHeZCmxYMGoNLYybArEPvhg4y+zVJ37D6dnF/346BeNtduuG/Nle1yMHnw7koCntTykYP5qDJ1MaYfpJwuhLYWyu81RcHo+42RbIyMP42JWHxwFfVbrGG1wt4FJ0UU//HVDqzn/L7TsTwxJpMts863EOleGthu2oaK8g4wd/WWkxfLjbUw5PnLxWJrG76pS/6nsNbbpHqAmnl8vJQ+3vZVzcYumWVxkL7EHLroEPvzT1vkY349ZzW1XNcNiEZ/eJPtWY6SyZ1A0fEr1GxSxERnmK4oZSVDgZh2+/w0l5G1y9f8M9q37uv+gKe6Xjk274z3POOpLtZkpErBKlAoMES7pkW5KRWgChSRKaBCUS11SGTR60x530M1cnCU= root@user-ThinkPad-E490"
         }
      } ).then(res => {
         console.log(res.data)
         toast.info('This information has been sent')
      })

      const receiver_email_user = email;

      const message_user = `Your data have been send to colombianscleaning! <br/> <br/> The information is: <br/> <br/> Name: ${name} <br/>Email: ${email} <br/>Phone number: ${phoneNumber} <br/>Service: ${serviceName} <br/>Concurrency: ${concurrency}`

      const data_clean_user = { receiver_email_user, message_user }


      axios.post(url, data_clean_user, {
         auth: {
            username: "dsiemail",
            password: "AAAAB3NzaC1yc2EAAAADAQABAAABgQC/zfe/pb+4UgwzEBYOeb9QQ6eG/rBhwLCS4XhZNxQYiB8Fxsut3v7u2isrd6EwuGu8qQo4oZEs1b0x39Nl+E9drOoIq1+7m9vAUmsBCW6omMs+YJHMbq3GPZMCQvrD1M2G34QBlpHeZCmxYMGoNLYybArEPvhg4y+zVJ37D6dnF/346BeNtduuG/Nle1yMHnw7koCntTykYP5qDJ1MaYfpJwuhLYWyu81RcHo+42RbIyMP42JWHxwFfVbrGG1wt4FJ0UU//HVDqzn/L7TsTwxJpMts863EOleGthu2oaK8g4wd/WWkxfLjbUw5PnLxWJrG76pS/6nsNbbpHqAmnl8vJQ+3vZVzcYumWVxkL7EHLroEPvzT1vkY349ZzW1XNcNiEZ/eJPtWY6SyZ1A0fEr1GxSxERnmK4oZSVDgZh2+/w0l5G1y9f8M9q37uv+gKe6Xjk274z3POOpLtZkpErBKlAoMES7pkW5KRWgChSRKaBCUS11SGTR60x530M1cnCU= root@user-ThinkPad-E490"
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
                                 <input type="text" placeholder="Full Name" name="name" onChange={ handleInputChange } required/>
                              </div>
                           </div>
                           <div className="col-lg-4 custom-pad-20">
                              <div className="tp-appoint wow fadeInUp" data-wow-delay=".5s">
                                 <input type="text" placeholder="Phone Number" name="phoneNumber" onChange={ handleInputChange } required/>
                              </div>
                           </div>
                           <div className="col-lg-4 custom-pad-20">
                              <div className="tp-appoint wow fadeInUp" data-wow-delay=".5s">
                                 <input type="text" placeholder="Email" name="email" onChange={ handleInputChange } required/>
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