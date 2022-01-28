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

export const NameContainer = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    background-color: transparent;
    width: 330px;
    overflow: hidden;
`;
export const RegisterBorder = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 490px;
    height: 650px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    position: absolute;
    z-index: 1;
    overflow: hidden;
    box-shadow: -5px 10px 5px black;
`;