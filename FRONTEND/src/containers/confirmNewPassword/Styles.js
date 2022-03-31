import styled from "styled-components";
import { motion } from "framer-motion";

export const ChangePasswordNewHolder = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    background-color: white;
    border: 2px solid black;
    border-radius: 5%;
    width: 400px;
    height: 300px;
    margin: 50px;
`;