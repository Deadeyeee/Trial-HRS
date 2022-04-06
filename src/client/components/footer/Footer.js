import React from 'react'
import { Container, Image, Icon, Right, IconDiv } from './styles';
import { motion } from "framer-motion";
import Logo from '../../images/logo.png';
import facebookIcon from '../../icons/facebook.svg';
import instagramIcon from '../../icons/instagram.svg';
import twitterIcon from '../../icons/twitter.svg';
export const Footer = () => {
    return (
        <Container>
            <Right>
                <IconDiv>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", mass: 1, stiffness: 200, duration: .5, delay: .5}}
                >

                <a href="https://www.w3schools.com">
                    <Icon
                    style={{ scale: .9}}
                    whileHover={{ scale: 1, rotate: [0, 20, -20, 0, ], }}
                    whileTap={{ scale: .7}}
                    transition={{ duration: .2 }}
                    src={facebookIcon}></Icon>

                </a>
                <a href="https://www.w3schools.com">
                    <Icon 
                    style={{ scale: .9}}
                    whileHover={{ scale: 1, rotate: [0, 20, -20, 0, ], }}
                    whileTap={{ scale: .7}}
                    transition={{ duration: .2 }}
                    src={instagramIcon}></Icon>

                </a>
                <a href="https://www.w3schools.com">
                    <Icon 
                    style={{ scale: .9}}
                    whileHover={{ scale: 1, rotate: [0, 20, -20, 0, ], }}
                    whileTap={{ scale: .7}}
                    transition={{ duration: .2 }}
                    src={twitterIcon}></Icon>

                </a>
                </motion.div>
                </IconDiv>

                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .5}}
                >
                <Image src={Logo}></Image>
                
                </motion.div>
            </Right>
        </Container>
    )
}

export default Footer;