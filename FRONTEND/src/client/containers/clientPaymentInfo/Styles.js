import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

export const PhotoBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    border: 2px solid #BFAA7E;
    margin: 10px 0px 10px 0px;
    height: 400px;
    width: 700px;
`