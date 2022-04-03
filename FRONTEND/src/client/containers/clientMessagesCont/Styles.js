import styled from "styled-components";
import { motion } from "framer-motion";


export const OptionContainer = styled(motion.div)`
  display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
`;

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0px 50px 0px;
    
    
`;

export const MainContainer = styled(motion.div)`
    display: ${(props) => (props.display ? props.display : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 75%;
    background-color: #DFD3B9;
    border: 2px solid #8B8B8B;
    height: ${(props) => (props.height ? props.height : "500px")};;
`;

export const MessagesContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 500px;
    width: 100%;
    gap: 10px 0px;
    overflow-y: auto;
    
`
export const Messages = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
    width: 100%;
`


export const MessagesContent = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => (props.bg ? props.bg : "#f2f2f2")};
    width: 100%;
    cursor: pointer;
`

export const MessagesTitleContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #272727;
    width: 100%;
`
