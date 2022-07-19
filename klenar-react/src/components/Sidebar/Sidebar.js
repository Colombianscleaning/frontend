import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import Collapsible from 'react-collapsible';

const Sidebar = ({ show, handleClose }) => {
   const Home = <NavLink to="#home">Home</NavLink>
   const Contact = <NavLink to="#contact">Pages </NavLink>
   const Services = <NavLink to="#services">Services </NavLink>
   const Works = <NavLink to="#projects">Projects</NavLink>
   const Blog = <NavLink to="/blogSidebar">Blog</NavLink>
   return (
      <>

         <div className='side__bar'>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
               <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
               </Offcanvas.Header>
               <Offcanvas.Body>


                  <Collapsible trigger={Home} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                  </Collapsible>

                  <Collapsible trigger={Contact} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     {/* <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/">About</NavLink></li>
                        <li><NavLink to="/">Appointment</NavLink></li>
                        <li><NavLink to="/">Pricing</NavLink></li>
                        <li><NavLink to="/">Team</NavLink></li>
                        <li><NavLink to="/">Team Details</NavLink></li>
                        <li><NavLink to="/">Faq</NavLink></li>
                     </ul> */}
                  </Collapsible>

                  <Collapsible trigger={Works} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     {/* <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/">Projects</NavLink></li>
                        <li><NavLink to="/">Projects Details</NavLink></li>
                     </ul> */}
                  </Collapsible>

                  <Collapsible trigger={Services} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     {/* <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/">Services</NavLink></li>
                        <li><NavLink to="/">Services Details</NavLink></li>
                     </ul> */}
                  </Collapsible>


                  {/* <Collapsible trigger={Blog} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/">Blog Sidebar</NavLink></li>
                        <li><NavLink to="/">Blog Details</NavLink></li>
                     </ul>
                  </Collapsible>

                  <div className='contact_nav text-white font-bold'>
                     <NavLink className="font-bold" to="/contact">Contact</NavLink>
                  </div> */}

                  <div className="fix">
                     <div className="side-info">
                        <div className="side-info-content">
                           <div className="tp-mobile-menu"></div>
                           <div className="contact-infos mb-30">
                              <div className="contact-list mb-30">
                                 <h4>Contact Info</h4>
                                 <ul>
                                    <li><i className="flaticon-pin"></i>Long Island, NY</li>
                                    <li><i className="flaticon-email"></i><a href="info@colombianscleaning.com">info@colombianscleaning.com</a></li>
                                    <li><i className="flaticon-phone-call"></i><a href="tel:1(631)336-4327">+1 (631) 336 - 4327</a></li>
                                 </ul>
                                 <div className="sidebar__menu--social">
                                    <a className="text-white" href="https://www.facebook.com/Colombians-Cleaning-102273695261516/?ref=pages_you_manage"><i><FaFacebookF className='icon' /> </i></a>
                                    {/* <a className="text-white" href="/"><i><BsTwitter className='icon' /> </i></a> */}
                                    <a className="text-white" href="https://www.instagram.com/colombians_cleaning/"><i><BsInstagram className='icon' /> </i></a>
                                    {/* <a className="text-white" href="/"><i><AiOutlineGoogle className='icon' /> </i></a> */}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;