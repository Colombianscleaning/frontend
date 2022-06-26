import React, { useEffect, useState, useRef, useLayoutEffect }  from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
import HomeSingleProject from '../../../../components/HomeSingleProject/HomeSingleProject';
import axios from 'axios';

SwiperCore.use([Navigation]);
let imgs = []
const Projects = () => {

   const [data, setData] = useState('');

   const urlImages = "https://api.colombianscleaning.com/images"

   useEffect(() => {

      const data = axios.get(urlImages, {
        auth: {
           username: "dsiemail",
           password: "AAAAB3NzaC1yc2EAAAADAQABAAABgQC/zfe/pb+4UgwzEBYOeb9QQ6eG/rBhwLCS4XhZNxQYiB8Fxsut3v7u2isrd6EwuGu8qQo4oZEs1b0x39Nl+E9drOoIq1+7m9vAUmsBCW6omMs+YJHMbq3GPZMCQvrD1M2G34QBlpHeZCmxYMGoNLYybArEPvhg4y+zVJ37D6dnF/346BeNtduuG/Nle1yMHnw7koCntTykYP5qDJ1MaYfpJwuhLYWyu81RcHo+42RbIyMP42JWHxwFfVbrGG1wt4FJ0UU//HVDqzn/L7TsTwxJpMts863EOleGthu2oaK8g4wd/WWkxfLjbUw5PnLxWJrG76pS/6nsNbbpHqAmnl8vJQ+3vZVzcYumWVxkL7EHLroEPvzT1vkY349ZzW1XNcNiEZ/eJPtWY6SyZ1A0fEr1GxSxERnmK4oZSVDgZh2+/w0l5G1y9f8M9q37uv+gKe6Xjk274z3POOpLtZkpErBKlAoMES7pkW5KRWgChSRKaBCUS11SGTR60x530M1cnCU= root@user-ThinkPad-E490"
          }
        } ).then(res => {
          console.log(res)
          setData(res.data.images);
          
        })
  
    },[]);

   for (let i = 0; i<data.length; i++){
      imgs.push(<SwiperSlide>
         <HomeSingleProject project_img_num={data[i]} title="Cleaning Services" />
      </SwiperSlide>)
    }
    
   return (
      <>
         <section className="tp-project-area white-bg position-relative" id="projects">
            <div className="tp-project-shape"></div>
            <div className="tp-project-wrapper grey-bg pt-120 wow fadeInUp" data-wow-delay=".2s">
               <div className="section-title-wrapper text-center mb-55 grey-bg">
                  {/* <h5 className="tp-section-subtitle common-yellow-shape section__sm__title mb-20">Some Completed Works</h5> */}
                  <h2 className="tp-section-title mb-20">Every work is different <br />Every client is special</h2>
               </div>
               <div className="tp-project-active swiper-container ps-4">
                  <Swiper
                     spaceBetween={30}
                     slidesPerView={1}
                     className='swiper-wrapper'
                     autoplay={{ delay: 6000 }}
                     breakpoints={{
                        550: {
                           slidesPerView: 2,
                        },
                        768: {
                           slidesPerView: 2,
                        },
                        1200: {
                           slidesPerView: 3,
                        },
                        1400: {
                           slidesPerView: 3,
                        },
                        1600: {
                           slidesPerView: 4,
                        },
                     }}
                     // onSlideChange={() => console.log('slide change')}
                     // onSwiper={(swiper) => console.log(swiper)}
                  >  
                     {imgs}                     
                   
                  </Swiper>
               </div>
            </div>
         </section>
      </>
   );
};

export default Projects;