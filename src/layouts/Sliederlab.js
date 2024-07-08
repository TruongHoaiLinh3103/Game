import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IMGDATA } from "../story/IMGDATA";
import "../styles/slider.scss";
import CharacterLQ from '../components/CharacterLQ';
import CharacterGI from '../components/CharacterGI';

const Sliederlab = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
    <>
        <div className="slider-container">
            <Slider {...settings}>
                {IMGDATA.map((item) => {
                    return(
                        <div key={item.id} className='slider-banner'>
                            <img src={item.img} alt="banner"/>
                        </div>
                    )
                })}
            </Slider>
        </div>
        <CharacterLQ/>
        <CharacterGI/>
    </>
    );
};

export default Sliederlab;