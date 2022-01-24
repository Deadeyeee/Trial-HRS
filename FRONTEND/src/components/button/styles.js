import styled from 'styled-components'
import { motion } from "framer-motion";

export const Button = styled(motion.a)`
    background-color: ${(props) => (props.bg ? props.bg : "transparent")};
    color: ${(props) => (props.textcolor ? props.textcolor : "#F2F2F2")};
    margin: ${(props) => (props.margin ? props.margin : "0px")};
    width: ${(props) => (props.w ? props.w : "10px")};
    height: ${(props) => (props.h ? props.h : "5px")};
    font-weight: ${(props) => (props.weight ? props.weight : "normal")};
    font-style: italic; 
    cursor:pointer;
    text-align:${(props) => (props.align ? props.align : "center")};
    padding: 0px 5px;
    border-radius: ${(props) => (props.radius ? props.radius : "3px")};
    display: ${(props) => (props.display ? props.display : "inline-flex")};;
    align-items: center;
    justify-content: center;
    border: ${(props) => (props.border ? props.border : "2px solid #8F805F")};
    `;