import React from 'react';
import { Link } from 'react-router-dom';

const HomeServiceItem = ({icon_name,title, info}) => {
   return (
      <>
         <div className="col-xl-4 col-sm-6">
            <div className="tp-services white-bg mb-30 wow fadeInUp" data-wow-delay=".2s">
               <div className="tp-services-icon">
                  <i className={`flaticon-${icon_name}`}></i>
               </div>
               <div className="tp-services-text fix">
                  <h4 className="tp-services-text-title mb-15 hover-theme-color">
                     <Link to="#projects">{title}</Link></h4>
                  <p className="mb-20">{info}</p>
                  {/* <div className="tp-services-text-link">
                     <Link to="/"><i className="flaticon-enter"></i> Read Details</Link>
                  </div> */}
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeServiceItem;