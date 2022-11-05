import React from 'react'
import Slider from "react-slick";
import { Container, RoomPicture } from './style';
import F1 from '../../images/FamenitiesIMG/f1.jpg'
import F2 from '../../images/FamenitiesIMG/f2.jpg'
import F3 from '../../images/FamenitiesIMG/f3.jpg'
import F4 from '../../images/FamenitiesIMG/f4.jpg'
import F5 from '../../images/FamenitiesIMG/f5.jpg'
import F6 from '../../images/FamenitiesIMG/f6.jpg'
import F7 from '../../images/FamenitiesIMG/f7.jpg'
import F8 from '../../images/FamenitiesIMG/f8.jpg'

import './indicator.css'
import { apiKey } from '../../../apiKey';
// import Background from '../../images/RoomsIMG/premium.jpg'
const ImageSlider2 = (props) => {

    const roomImages = [
        F1,
        F2,
        F3,
        F4,
        F5,
        F6,
        F7,
        F8,      
    ];
    var settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img style={{ width: '50px', height: '50px', objectFit: "cover", }} src={`${roomImages[i]}`} />
                </a>
            );
        },

        dotsClass: "slick-dots slick-thumb custom-indicator",
        dots: true,
        className: "slider",
        arrows: false,
        prevArrow: null,
        nextArrow: null,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        adaptiveHeight: true,
        pauseOnHover: true,
        slidesToScroll: 1,
        autoplay: true,
        // centerMode: true,
    };

    // console.log('roomImages', roomImages)
    // roomImages.map((item)=>console.log(item))
    return (

        <div>
            <Slider {...settings}>
                {roomImages != null ?
                    roomImages.map((item) => (
                        <div>
                            <a target='_blank' href={item}><RoomPicture src={item} /></a>
                        </div>
                    ))
                    : ''}
                {/* <div>
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
                </div> */}
            </Slider>
        </div>
    )
}

export default ImageSlider2