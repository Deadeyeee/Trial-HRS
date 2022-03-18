import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0px 0px 0px;
    
`;

export const MessagesContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #DFD3B9;
    margin: 0px 0px 50px 0px;
    width: 45%;
    
`
export const Messages = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid #8B8B8B;
    background-color: #F2F2F2;
    width: 100%;
`


export const MessagesContent = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid #8B8B8B;
    background-color: #F2F2F2;
    margin: 0px 0px 30px 0px;
    width: 100%;
`

export const MessagesTitleContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #272727;
    border: 2px solid #272727;
    width: 100%;
`