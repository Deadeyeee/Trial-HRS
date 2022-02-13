import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: -25;
`;

export const PhotoHolder = styled(motion.div)`
    background-color: gray;
    border: 1px solid black;
    width: 100%;
    height: 383px;
`;

export const TitleHolder = styled(motion.div)`
    background-color: black;
    width: 100%
    height: auto;
    opacity: 55%;
`;
export const HorizontalLine = styled(motion.div)`
    background-color: black;
    height: 1px;
    width: 40%;
    margin: 20px 0px; 
    align: center;
`;

