import React, {useEffect, useRef} from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import AboutArea from './AboutArea/AboutArea';
import BannerArea from './BannerArea/BannerArea';
import Blogs from './Blogs/Blogs';
import ChoseArea from './ChoseArea/ChoseArea';
import CtaArea from './CtaArea/CtaArea';
import FactArea from './FactArea/FactArea';
import HeroSection from './HeroSection/HeroSection';
import PricingArea from './PricingArea/PricingArea';
import ProgressArea from './ProgressArea/ProgressArea';
import Projects from './Projects/Projects';
import ServiceArea from './ServiceArea/ServiceArea';
import axios from 'axios';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {

   const urlImages = "https://api.colombianscleaning.com/images";

   const isMountedRef = useRef(false);

   const chargeData = () => {

      return isMountedRef.current = false;

      // const data = axios.get(urlImages, {
      //    auth: {
      //       username: "dsiemail",
      //       password: "AAAAB3NzaC1yc2EAAAADAQABAAABgQC/zfe/pb+4UgwzEBYOeb9QQ6eG/rBhwLCS4XhZNxQYiB8Fxsut3v7u2isrd6EwuGu8qQo4oZEs1b0x39Nl+E9drOoIq1+7m9vAUmsBCW6omMs+YJHMbq3GPZMCQvrD1M2G34QBlpHeZCmxYMGoNLYybArEPvhg4y+zVJ37D6dnF/346BeNtduuG/Nle1yMHnw7koCntTykYP5qDJ1MaYfpJwuhLYWyu81RcHo+42RbIyMP42JWHxwFfVbrGG1wt4FJ0UU//HVDqzn/L7TsTwxJpMts863EOleGthu2oaK8g4wd/WWkxfLjbUw5PnLxWJrG76pS/6nsNbbpHqAmnl8vJQ+3vZVzcYumWVxkL7EHLroEPvzT1vkY349ZzW1XNcNiEZ/eJPtWY6SyZ1A0fEr1GxSxERnmK4oZSVDgZh2+/w0l5G1y9f8M9q37uv+gKe6Xjk274z3POOpLtZkpErBKlAoMES7pkW5KRWgChSRKaBCUS11SGTR60x530M1cnCU= root@user-ThinkPad-E490"
      //    }
      // } ).then(res => {
      
      //    return res.data
      // })

      // console.log(data);
   }

   return (
      <div>

         {
            (isMountedRef === false) 
               ? 
                  chargeData() 
               :  (<div>
                     <Navigation/> 
                     <HeroSection />
                     <CtaArea />
                     <Projects />
                     <BannerArea />
                     <ServiceArea />
                     <FactArea />
                     <AboutArea />
                     {/* <ChoseArea /> */}
                     {/* <PricingArea /> */}
                     {/* <Testimonial /> */}
                     {/* <ProgressArea /> */}
                     {/* <Blogs /> */}
                     <Footer/>
               
                  </div>)
         }
      </div>
      
   );
};

export default Home;