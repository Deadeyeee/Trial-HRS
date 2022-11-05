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

export const HorizontalLineSmall = styled(motion.div)`
    background-color: black;
    height: 1px;
    width: 10%;
    margin: 30px 0px 30px 23px; 
    position: relative;

`;

export const FlexboxContainerMain = styled(motion.div)`
    display: flex;
    margin-bottom: 35px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }

`;
export const FlexboxContainer1 = styled(motion.div)`    
    align-items: column;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
    
`

export const FlexboxContainer2 = styled(motion.div)`
    align-items: column;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }
`;

export const FlexboxItem1 = styled(motion.div)`
    width: 500px;
    height: 300px;
    margin: 20px 20px 0px 20px;

    @media (max-width: 1000px) {
        width: 100%;
        height: 100%;
      }

`;

export const FlexboxItem2 = styled(motion.div)`
    width: 300px;
    height: 300px;
    margin: 0px 20px 20px 20px;
    
`;
export const FlexboxPhoto = styled(motion.div)`
    width: 220px;
    height: 500px;
    margin: 0px 20px 20px 20px;
    background-image: url(${(props) => (props.link ? props.link : null)});
    background-size: cover;
    background-position: right;

    
`;

export const FlexboxTitle = styled(motion.div)`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin:0px 0px 0px 2%
`;

export const ContentContainer = styled(motion.div)`
    display: flex-start;

    @media (max-width: 1000px) {
        width: 90%;
        height: 50%;
      }
`;

export const FlexboxTitleContainer = styled(motion.div)`
    display: flex-start;
    width: 100%;
`;