import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/slider.scss";
import CharacterLQ from '../components/CharacterLQ';
import CharacterGI from '../components/CharacterGI';
import { AOV } from '../story/AOV';

const Sliederlab = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
    <div className='slider-page' style={{paddingTop: "60px"}}>
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    {AOV.map((item) => {
                        return(
                            <div key={item.id} className='slider-banner'>
                                <img src={item.poster} alt="banner"/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <CharacterLQ/>
        </div>
        <CharacterGI/>
    </div>
    );
};

export default Sliederlab;