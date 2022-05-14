import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { FaMapMarkerAlt, FaEnvelopeOpen,FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {
   return (
      <>
         <footer className="theme-dark-bg">
            {/* <div className="tp-footer-subscribe-area-two position-relative pt-100">
               <div className="container">
                  <div className="tp-footer-subscribe-bg-two theme-yellow-bg pt-30 pb-20 z-index pl-60 pr-60">
                     <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-4">
                           <div className="tp-footer-subscribe">
                              <h3 className="tp-footer-subscribe-title">Subscribe Our Newsletter</h3>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-8">
                           <div className="tp-footer-subscribe-form">
                              <form action="/" className="p-0">
                                 <div className="tp-footer-subscribe-form-field mb-10">
                                    <input type="text" placeholder="Email Address"/>
                                       <i ><FaPaperPlane/></i>
                                 </div>
                                 <div className="tp-footer-subscribe-form-btn mb-10">
                                    <button type="submit" className="theme-btn text-white"><i className="flaticon-enter"></i> Subscribe</button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
            <div className="tp-footer-area-two pt-80 pb-50">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-4 col-sm-6">
                        <div className="tp-footer-widget footer-col-1 mb-30 wow fadeInUp" data-wow-delay=".3s">
                           <div className="tp-footer-info">
                              <div className="tp-footer-info-logo mb-35">
                                 <Link to="/"><img src="assets/img/logo/logo-clean.png" className="img-fluid" alt="img not found"/></Link>
                              </div>
                              <h4 className="mb-15"><a href="tel:1(631)336-4327">+1 (631) 336 - 4327</a></h4>
                              <h6 className="mb-15"> <i > <FaEnvelopeOpen/> </i><a href="mailto:colombianscleaning@gmail.com">colombianscleaning@gmail.com</a></h6>
                              <h6 className="mb-20"> <i> <FaMapMarkerAlt /> </i> Long Island, New York</h6>
                              <div className="tp-footer-info-social">
                                 <a href="https://www.facebook.com/Colombians-Cleaning-102273695261516/?ref=pages_you_manage"><i><FaFacebookF className='icon' /> </i></a>
                                 {/* <a href="/"><i><BsTwitter className='icon' /> </i></a> */}
                                 <a href="https://www.instagram.com/colombians_cleaning/"><i><BsInstagram className='icon' /> </i></a>
                                 {/* <a href="/"><i><AiOutlineGoogle className='icon' /> </i></a> */}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-sm-6">
                        <div className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp" data-wow-delay=".6s">
                           <h4 className="tp-footer-widget-title mb-35">Our Services</h4>
                           <ul>
                              <li><a href="#services">Kitchen Cleaning</a></li>
                              <li><a href="#services">Vacuum Cleaning</a></li>
                              <li><a href="#services">House Cleaning</a></li>
                              <li><a href="#services">Office Cleaning</a></li>
                              <li><a href="#services">Mop Cleaning</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-4 col-sm-6">
                        <div className="tp-footer-widget footer-col-3 mb-30 wow fadeInUp" data-wow-delay=".9s">
                           <h4 className="tp-footer-widget-title mb-35">Recent News</h4>
                           <div className="tp-footer-news">
                              <div className="tp-footer-news-single mb-15">
                                 <h6><Link to="/">Orci magna pede, quisque sociis integer litora netus</Link></h6>
                                 <span>Jun 02, 2021</span>
                              </div>
                              <div className="tp-footer-news-single">
                                 <h6><Link to="/">Congue morbi elit dictumst socio sit mauris congue sed.</Link></h6>
                                 <span>Jun 02, 2021</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget footer-col-4 mb-30 wow fadeInUp" data-wow-delay="1.2s">
                           <h4 className="tp-footer-widget-title mb-40">Instagram</h4>
                           <div className="tp-footer-insta">
                              <a href="/">
                                 <img src="assets/img/footer/footer-insta-1.jpg" className="img-fluid" alt="img not found"/>
                                 </a>
                              <a href="/">
                                 <img src="assets/img/footer/footer-insta-2.jpg" className="img-fluid" alt="img not found"/>
                                 </a>
                              <a href="/">
                                 <img src="assets/img/footer/footer-insta-3.jpg" className="img-fluid" alt="img not found"/>
                                 </a>
                              <a href="/">
                                 <img src="assets/img/footer/footer-insta-4.jpg" className="img-fluid" alt="img not found"/>
                                 </a>
                              <a href="/">
                                 <img src="assets/img/footer/footer-insta-5.jpg" className="img-fluid" alt="img not found"/>
                                 </a>
                              <a href="/">
                                 <img src="assets/img/footer/footer-insta-6.jpg" className="img-fluid" alt="img not found"/>
                                 </a>
                           </div>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
            <div className="tp-copyright-area-two theme-dark-bg z-index pt-30 pb-30">
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-copyright tp-copyright-two text-center">
                           <p className="m-0">Copyright ©2022 <span>Theme_pure</span> All Rights Reserved Copyright <span>Theme_pure</span> <a href="https://dsinno.io/">By Design Systems</a>  </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;