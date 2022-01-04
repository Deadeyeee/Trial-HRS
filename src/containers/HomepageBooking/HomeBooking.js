import React, { useEffect } from 'react';
import { Container, Title } from './styles.js';
import { motion } from "framer-motion";
import DatePicker from '../../components/datePicker/DatePicker.js';
export const HomeBooking = ({title}) => {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
        return (
        <Container
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{  duration: .3, type: "tween", delay: .8 }}
        > 
        <Title>{title}</Title>
        </Container>
    )
}

export default HomeBooking;