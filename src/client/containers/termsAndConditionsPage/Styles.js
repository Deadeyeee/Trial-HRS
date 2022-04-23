import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 20px 0px;
   
`;

export const HorizontalLine = styled(motion.div)`
    background-color: black;
    width: 500px;
    height: 1.5px;
    margin: 30px 0px 10px 0px;
`;


export const TermsAndConditionsContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 97%;
`;

export const TermsAndConditionsContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    margin: 10px 30px;
`;

export const ButtonHolder = styled(motion.div)`
    display: flex;
    flex-direction: Row;
    margin-bottom: 150px;
`;