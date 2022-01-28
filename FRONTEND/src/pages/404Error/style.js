import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2E2E2E;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    clip-path: circle(0.0% at 50% 50%)
`;

export const Logo = styled(motion.img)`
    height: 300px;
    width: 300px;
    `;
 