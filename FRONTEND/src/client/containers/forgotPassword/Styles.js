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
    padding: 10px 0px;
    border-radius: 5%;
    width: 400px;
    height: auto;
    margin: 100px;

    @media (max-width: 1000px) {
        width: 80%;
        height: 50%;
        
      }
    
`;

export const Logo = styled(motion.img)`
    height: 100px;
    width: 100px;
    padding: 10px;
    margin-top: 10px;
    title: RM Luxe Hotel;
    `;