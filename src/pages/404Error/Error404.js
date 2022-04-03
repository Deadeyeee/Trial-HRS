import React, {useEffect} from 'react'
import { Button } from '../../components/button/styles';
import { Title } from '../../components/title/styles';
import { Container } from './style'
import logo from '../../images/logo.png';
import {Logo} from './style'

export const Error404 = () => {
    useEffect(() => {
        document.title = "404 Error"
      }, [])
    return (
        <Container
        initial="hidden"
        animate={{clipPath: `circle(150% at 50% 50%)`}}
        transition={{ ease: "linear", duration: 2}}
        >
                <Logo
                src={logo}
                ></Logo>
            
            <Title
            animate={{scale:[1, .95, 1] }}
            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
            family="'Dongle', sans-serif;"
            line="200px"
            color="#f2f2f2"
            padding="0px 0px"
            size="300px"
            >404 ERROR</Title>
            <Title
            family="Courier New"
            size="15px"
            weight="normal"
            margin="30px 0px"
            color="#f2f2f2"
            >404 ERROR : We couldn't find the page you were looking for.</Title>
            <Button
            whileHover={{ borderRadius: "20px", backgroundColor:"#8F805F" }}
            whileTap={{ color: "rgb(000,999,000)"}}
            index="1"
            w="300px"
            h="80px"
            href="/"
            >Go back to home</Button>
        </Container>
    )
}


export default Error404;