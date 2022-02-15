import styled from "styled-components";
import { motion } from "framer-motion";

export const ChangePasswordHolder = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    background-color: white;
    border: 2px solid black;
    width: 400px;
    height: 200px;
    margin: 100px;
    
`;