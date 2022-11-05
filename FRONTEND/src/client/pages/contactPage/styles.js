import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }
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
    margin: 20px 50px; 

    @media (max-width: 1000px) {
        width: 100%;
        height: 80%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }
`;

export const FlexboxContainerMain = styled(motion.div)`
    display: flex;
    width: auto;
    overflow: hidden;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }


`;
export const FlexboxContainer1 = styled(motion.div)`    
    align-items: column;
    height: auto;
    
`

export const FlexboxContainer2 = styled(motion.div)`
    align-items: column;

    
`;

export const FlexboxItem1 = styled(motion.div)`
    width: Auto;
    height: 300px;

`;

export const FlexboxItem2 = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    
`;

export const FlexboxTitle = styled(motion.div)`
    display: flex;
    width: auto;
    justify-content: flex-start;
    margin:0px 0px 0px 2%;
`;

export const ContentContainer = styled(motion.div)`
    display: flex-start;
    height: auto;
    width: auto;
    margin: 50px 0px 200px 0px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }

`;

export const FlexboxTitleContainer = styled(motion.div)`
    display: flex-start;
    width: 100%;
`;


export const MapContainer = styled(motion.div)`
    display: flex;
    height: 500px;
    position: relative;
    width: 100%;
    overflow: hidden;
`;