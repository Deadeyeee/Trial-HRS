import React from 'react'
import Slider from "react-slick";
import { Container, RoomPicture } from './style';
import Background from '../../images/RoomsIMG/premium.jpg'
import './indicator.css'
// import Background from '../../images/RoomsIMG/premium.jpg'
const ImageSlider = (fetchImages) => {

    var settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img style={{width: '50px', height: '50px', objectFit: "cover"}} src={`${Background}`} />
                </a>
            );
        },

        dotsClass: "slick-dots slick-thumb custom-indicator",
        dots: true,
        className: "slider",
        arrows: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        adaptiveHeight: true,
        pauseOnHover: true,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
    };

    return (

        <div>
            <Slider {...settings}>
                <div>
                    <RoomPicture src={Background} />
                </div>
                <div>
                    <RoomPicture src={Background} />
                </div>
                <div>
                    <RoomPicture src={Background} />
                </div>
                <div>
                    <RoomPicture src={Background} />
                </div>
                <div>
                    <RoomPicture src={Background} />
                </div>
                <div>
                    <RoomPicture src={Background} />
                </div>
                <div>
                    <RoomPicture src={Background} />
                </div>
                <div>
                    <RoomPicture src={Background} />
                </div>
                <div>
                    <RoomPicture src={Background} />
                </div>
            </Slider>
        </div>
    )
}

export default ImageSlider