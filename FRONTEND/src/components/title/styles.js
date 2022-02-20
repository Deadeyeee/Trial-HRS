import styled from "styled-components";
import { motion } from "framer-motion";
export const Title = styled(motion.h1)`
font-family: ${(props) => (props.family ? props.family : "'Playfair Display', serif")};
font-size: ${(props) => (props.size ? props.size : "30px")};
font-weight: ${(props) => (props.weight ? props.weight : "bold")};
font-style: ${(props) => (props.fStyle ? props.fStyle : "italic")};
text-align: ${(props) => (props.align ? props.align : "center")};;
margin: ${(props) => (props.margin ? props.margin : "0px")};
color: ${(props) => (props.color ? props.color : "black")};
display: ${(props) => (props.display ? props.display : "block")};
letter-spacing: ${(props) => (props.spacing ? props.spacing : "1px")};
padding: ${(props) => (props.padding ? props.padding : "0px")};
align-self: ${(props) => (props.alignSelf ? props.alignSelf : "auto")};
line-height: ${(props) =>(props.line ? props.line : "auto")};
opacity: ${(props) => (props.opc ? props.opc : "100%")};
text-shadow:  ${(props) => (props.shadow ? props.shadow : "none")};
width:${(props) => (props.w ? props.w : "auto")}
`;