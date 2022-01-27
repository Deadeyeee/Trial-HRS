import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.div)`
    display: flex;
    height: 100vh;
    justify-content: space-around;
    background-color: #2E2E2E;
    align-items: center;
    overflow: hidden;
    width: 100vw;
`;

export const Star = styled(motion.div)`
    width: ${(props) => (props.w ? props.w : "1px")};
    height: ${(props) => (props.h ? props.h : "1px")};
    background-color: white;
    border-radius: 100px;
`;

export const Square = styled(motion.div)`
    width: ${(props) => (props.w ? props.w : "50px")};
    height: ${(props) => (props.h ? props.h : "50px")};
    background: none;
    border-radius: ${(props) => (props.r ? props.r : "1px")};
    border: 1px solid;
    border-color: ${(props) => (props.color ? props.color : "white")};
`;
