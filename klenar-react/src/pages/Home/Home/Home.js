import React, {useEffect, useRef, useLayoutEffect} from 'react';
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
   return (
      <div>
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
      </div>
      
   );
};

export default Home;