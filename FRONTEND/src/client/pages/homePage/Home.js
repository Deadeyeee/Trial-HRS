import React, { useState, useEffect } from 'react'
import { ChangePasswordNewHolder, Container, EmailVerificationHolder, EmailVerificationPhoto } from './styles'
import NavigationBar from '../../components/navigationBar/Nav';
import BookingHome from '../../containers/HomepageBooking/HomeBooking';
import Footer from '../../components/footer/Footer'
import ChatBot from '../../components/chatBot/ChatBot';
import { Title } from '../../components/title/styles';
import { TextInput } from '../../components/textBox/style';
import { Button } from '../../components/button/styles';
import LightBox from '../../containers/lightBox/LightBox';
export const Home = () => {
    const [lightBox, setLightBox] = useState("");

    useEffect(() => {
        setLightBox("flex")

        if (window.localStorage.getItem('lightbox') != null) {
            if (Date.parse(new Date) - parseInt(window.localStorage.getItem('lightbox')) >= (20 *60000)) {
                setLightBox("flex")
                window.localStorage.setItem('lightbox', Date.parse(new Date()))
            }
            else {
                setLightBox("none")

            }
        } else {
            setLightBox("flex")
            window.localStorage.setItem('lightbox', Date.parse(new Date()))
        }
    }, []);

    const close = () => {
        setLightBox("none")
    }


    return (
        <Container>
            <LightBox
                display={lightBox}
                onClick={close}
            ></LightBox>
            <NavigationBar home />
            <BookingHome title="Book Now!" ></BookingHome>

            <Footer />
        </Container >
    )
}


export default Home;