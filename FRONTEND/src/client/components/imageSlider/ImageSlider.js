import React from 'react'
import Slider from "react-slick";
import { Container, RoomPicture } from './style';
import Background from '../../images/RoomsIMG/premium.jpg'
import './indicator.css'
import { apiKey } from '../../../apiKey';
// import Background from '../../images/RoomsIMG/premium.jpg'
const ImageSlider = (props) => {

    const roomImages = props.roomImages;
    var settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img style={{ width: '50px', height: '50px', objectFit: "cover" }} src={`${apiKey + roomImages[i]}`} />
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

    console.log('roomImages', roomImages)
    roomImages.map((item)=>console.log(item))
    return (

        <div>
            <Slider {...settings}>
                {roomImages != null ?
                    roomImages.map((item) => (
                        <div>
                            <a target='_blank' href={apiKey + item}><RoomPicture src={apiKey + item} /></a>
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

export default ImageSlider