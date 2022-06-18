import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const HomeHeroSingleSlide = ({ setOpen }) => {
    return (
        <>
            <div className="tp-single-slider tp-slider-height d-flex align-items-center swiper-slide" data-swiper-autoplay="5000" id="home">
                <div className="slide-bg" data-background="assets/img/slider/background.png"></div>
                <div className="slider-img">
                    <img src="assets/img/slider/image.png" className="img-fluid" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-slider-wrapper position-relative">
                                {/* <div className="tp-slider-video-btn play_btn">
                                    <button onClick={() => setOpen(true)} className="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/o4GuSJYSzrY">
                                        <i > <FaPlay className="text-white" /> </i>
                                    </button>
                                </div> */}
                                <div className="tp-slider z-index">

                                    <Fade left>
                                        <h3 className="section__sm__title w-50 mb-35">¡Free Estimates!</h3>
                                    </Fade>

                                    <h2 className="tp-slider-title mb-20">
                                        <Fade right><h1>Q'hubo pues!</h1></Fade>
                                        <Fade right>DON'T HAVE TIME</Fade>
                                        <Fade right>TO CLEAN UP?</Fade>
                                        <Fade top>WE DO IT FOR YOU!</Fade>
                                    </h2>

                                    <div className="tp-slider-btn">
                                        <Fade bottom>
                                            <Link to="#contact" className="theme-btn text-white">
                                                <i className="flaticon-enter"></i> Learn More</Link>
                                        </Fade>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeroSingleSlide;