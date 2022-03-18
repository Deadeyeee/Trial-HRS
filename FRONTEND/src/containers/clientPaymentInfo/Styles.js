import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PhotoBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    border: 2px solid #BFAA7E;
    margin: 40px 0px 20px 0px
`