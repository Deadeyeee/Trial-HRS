import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    
`;

export const FlexboxContainer = styled(motion.div)`
    flex-direction: column;
    align-items: center;
`;

export const FlexboxContentMain = styled(motion.div)`
    display: flex;
    height: auto;
    
    
`;

export const FlexboxMainPhotoLeft = styled(motion.div)`
    width: 3250px;
    height: 250px;
    margin: 60px 20px 20px 250px;
    border: 3px solid black;
    background-color: gray;
`;

export const FlexboxMainPhotoRight = styled(motion.div)`
    width: 3250px;
    height: 250px;
    margin: 30px 250px 20px 20px;
    border: 3px solid black;
    background-color: gray;
`;

export const FlexboxContent = styled(motion.div)`
    display: column;
    align-items: left;
    margin: 0px 0px 50px 0px;
    
`;

export const HorizontalLineShortRight = styled(motion.div)`
    background-color: black;
    height: 0.5px;
    width: 40%;
    margin: 10px 0px; 
`;

export const HorizontalLineShortLeft = styled(motion.div)`
    background-color: black;
    height: 0.5px;
    width: 40%;
    margin: 10px 0px 0px 498px; 
`;

