import styled from "styled-components";
import { motion } from "framer-motion";


export const EmailVerificationHolder = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    background-color: white;
    border: 2px solid black;
    border-radius: 5%;
    width: 400px;
    height: auto;
    margin: 50px;
    padding: 0px 15px;
`;

export const EmailVerificationPhoto = styled(motion.div)`
    background-color: lightblue;
    border: 2px solid black;
    width: 40px;
    height: 20px;
    
`;

export const Logo = styled(motion.img)`
    height: 100px;
    width: 100px;
    padding: 10px;
    margin-top: 20px;
    title: RM Luxe Hotel;
    `;