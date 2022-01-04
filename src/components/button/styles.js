import styled from 'styled-components'
import { motion } from "framer-motion";

export const Button = styled(motion.a)`
    background-color: ${(props) => (props.bg ? props.bg : "transparent")};
    color: ${(props) => (props.textColor ? props.textColor : "#F2F2F2")};
    width: ${(props) => (props.w ? props.w : "10px")};
    height: ${(props) => (props.h ? props.h : "5px")};
    font-style: italic; 
    cursor:pointer;
    text-align:center;
    padding: 0px 5px;
    border-radius: 3px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #8F805F;
    `;