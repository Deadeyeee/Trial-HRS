import styled from "styled-components";
import { motion } from "framer-motion";



export const Container = styled(motion.div)`
    display: flex;
    height: 100vh;
    justify-content: space-around;
    background-color: #2E2E2E;
    align-items: center;
    overflow: hidden;
`;



export const LoginBorder = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 490px;
    height: 600px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    position: absolute;
    z-index: 1;
    overflow: hidden;
    box-shadow: -5px 10px 5px black;
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

export const Logo = styled(motion.img)`
    height: 150px;
    width: 150px;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #8F805F;
    border-radius: 50px;
    `;
 