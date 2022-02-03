import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HorizontalLine = styled(motion.div)`
    background-color: black;
    height: 1px;
    width: 40%;
    margin: 20px 0px; 
`;

export const VerticalLine = styled(motion.div)`
    background-color: black;
    height: 250px;
    width: 1px;
    margin: 20px 0px; 
`;

export const FlexboxContainerMain = styled(motion.div)`
    display: flex;

`;
export const FlexboxContainer1 = styled(motion.div)`    
    align-items: column;
    height: auto;
    
`

export const FlexboxContainer2 = styled(motion.div)`
    align-items: column;
    
`;

export const FlexboxItem1 = styled(motion.div)`
    width: 300px;
    height: 300px;
    margin: 20px 20px 0px 20px;

`;

export const FlexboxItem2 = styled(motion.div)`
    width: 300px;
    height: 300px;
    margin: 0px 20px 20px 75px;
    
`;

export const FlexboxTitle = styled(motion.div)`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin:0px 0px 0px 2%
`;

export const ContentContainer = styled(motion.div)`
    display: flex-start;
    height: auto;
    margin: 50px 0px 200px 0px;

`;

export const FlexboxTitleContainer = styled(motion.div)`
    display: flex-start;
    width: 100%;
`;