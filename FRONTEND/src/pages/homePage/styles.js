import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-width: 100%;
    align-items: center;
`;

export const ChangePasswordHolder = styled(motion.div)`
    background-color: white;
    border: 2px solid black;
    width: 400px;
    height: 200px;
    margin: 100px;
    align-items: center;
`;

export const ChangePasswordNewHolder = styled(motion.div)`
    background-color: white;
    border: 2px solid black;
    width: 400px;
    height: 300px;
    margin: 50px;
    align-items: center;
`;

export const EmailVerificationHolder = styled(motion.div)`
    background-color: white;
    border: 2px solid black;
    width: 400px;
    height: 275px;
    margin: 50px;
    align-items: center;
`;

export const EmailVerificationPhoto = styled(motion.div)`
    background-color: lightblue;
    border: 2px solid black;
    width: 40px;
    height: 20px;
    margin: 20px 0px 0px 185px;
    
`;