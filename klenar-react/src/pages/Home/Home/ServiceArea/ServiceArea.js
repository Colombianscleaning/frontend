import React from 'react';
import HomeServiceItem from '../../../../components/HomeServiceItem/HomeServiceItem';

const ServiceArea = () => {
   return (
      <>
         <section className="tp-services-area theme-dark-bg" id="services">
            <div className="tp-custom-container">
               <div className="tp-services-bg grey-bg pt-120 pb-90 z-index">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-lg-8">
                           <div className="tp-section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".1s">
                              <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-25">Our Popular Services</h5>
                              <h2 className="tp-section-title">Our Success Cleaning <br/>Up your Mess</h2>
                           </div>
                        </div>
                     </div>
                     <div className="row">

                        <HomeServiceItem icon_name="pot" title="Kitchens" info="A clean environment is healthier than one left in a messy state, and this is especially true with the kitchen. With ours clean kitchen service is easier to keep everything in its place. It's also less likely to attract rodents or insects"/>

                        <HomeServiceItem icon_name="vacuum-cleaner" title="Vacuuming" info="Our goal when vacuuming is to remove dirt and grime that can damage the carpet fiber and surfaces, to expand the life of it. We seek to maximize the life of the carpet and surfaces as well as maximize its sustainability with our service."/>

                        {/* <HomeServiceItem icon_name="house-cleaning" title="House Cleaning" info=""/> */}

                        <HomeServiceItem icon_name="broom" title="Dusting" info="Dusting is important as it reduces your risk of sickness and allergies. While most types of dust don't cause severe illnesses, they can induce mild allergies and sicknesses. Get rid of allergies and annoying dust with our service."/>

                        <HomeServiceItem icon_name="mop" title="Mopping" info="As such, the germs accumulate and build up quickly, especially during hot weather and flu seasons. With ours mopping service you can keeping your home sanitized. A clean floor translates into a cleaner house, and a clean house means a healthier and happier home"/>

                        <HomeServiceItem icon_name="window" title="Bathrooms" info="We know that a messy bathroom is not good for health. Germs build up over time. Bacteria and viruses can survive on bathroom surfaces for up to a week. Our cleaning service for your bathroom is the best way to reduce the risk of infection and disease."/>

                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ServiceArea;