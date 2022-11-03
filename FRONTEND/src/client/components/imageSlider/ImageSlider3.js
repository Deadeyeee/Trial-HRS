import React from 'react'
import Slider from "react-slick";
import { Container, RoomPicture } from './style';
import C1 from '../../images/FamenitiesIMG/c1.jpg'
import C2 from '../../images/FamenitiesIMG/c2.jpg'
import C3 from '../../images/FamenitiesIMG/c3.jpg'
import C4 from '../../images/FamenitiesIMG/c4.jpg'
import C5 from '../../images/FamenitiesIMG/c5.jpg'
import C6 from '../../images/FamenitiesIMG/c6.jpg'
import C7 from '../../images/FamenitiesIMG/c7.jpg'
import C8 from '../../images/FamenitiesIMG/c8.jpg'

import './indicator.css'
import { apiKey } from '../../../apiKey';
// import Background from '../../images/RoomsIMG/premium.jpg'
const ImageSlider3 = (props) => {

    const roomImages = [
        C1,
        C2,
        C3,
        C4,
        C5,
        C6,
        C7,
        C8,      
    ];
    var settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img style={{ width: '50px', height: '50px', objectFit: "cover" }} src={`${roomImages[i]}`} />
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

export default ImageSlider3