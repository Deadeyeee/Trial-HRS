import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled.h1`
font-family: 'Playfair Display', serif;
font-size: 66px;
font-weight: normal;
text-align: center;
margin-bottom: 800px;
`;

export const Container = styled(motion.div)`
display: flex;
align-items: center;
justify-content: center;
position: static;
`;