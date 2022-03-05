import styled from 'styled-components'
import { motion } from "framer-motion";

export const Button = styled(motion.a)`
    background-color: ${(props) => (props.bg ? props.bg : "transparent")};
    font-family: ${(props) => (props.fam ? props.fam : "auto")};
    color: ${(props) => (props.textcolor ? props.textcolor : "#F2F2F2")};
    margin: ${(props) => (props.margin ? props.margin : "0px")};
    width: ${(props) => (props.w ? props.w : "10px")};
    height: ${(props) => (props.h ? props.h : "5px")};
    font-weight: ${(props) => (props.weight ? props.weight : "normal")};
    font-style: ${(props) => (props.fontStyle ? props.fontStyle : "italic")};
    cursor:pointer;
    text-align:${(props) => (props.align ? props.align : "center")};
    padding: ${(props) => (props.padding ? props.padding : "0px 5px")};
    border-radius: ${(props) => (props.radius ? props.radius : "3px")};
    display: ${(props) => (props.display ? props.display : "inline-flex")};;
    align-items: center;
    justify-content: center;
    border: ${(props) => (props.border ? props.border : "2px solid #8F805F")};
    z-index: ${(props) => (props.index ? props.index : "auto")};
    font-size : ${(props) => (props.fontsize ? props.fontsize : "auto")};
    `;


export const FormButton = styled(motion.input)`
background-color: ${(props) => (props.bg ? props.bg : "transparent")};
color: ${(props) => (props.textcolor ? props.textcolor : "#F2F2F2")};
margin: ${(props) => (props.margin ? props.margin : "0px")};
width: ${(props) => (props.w ? props.w : "10px")};
height: ${(props) => (props.h ? props.h : "5px")};
font-weight: ${(props) => (props.weight ? props.weight : "normal")};
font-style: ${(props) => (props.fontStyle ? props.fontStyle : "italic")}; 
cursor:pointer;
text-align:${(props) => (props.align ? props.align : "center")};
padding: ${(props) => (props.padding ? props.padding : "0px 5px")};
border-radius: ${(props) => (props.radius ? props.radius : "3px")};
display: ${(props) => (props.display ? props.display : "inline-flex")};
align-items: center;
font-size : ${(props) => (props.fontsize ? props.fontsize : "auto")};
justify-content: center;
border: ${(props) => (props.border ? props.border : "2px solid #8F805F")};
z-index: ${(props) => (props.index ? props.index : "auto")};
`;