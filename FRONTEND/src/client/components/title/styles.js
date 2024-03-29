import styled from "styled-components";
import { motion } from "framer-motion";
export const Title = styled(motion.h1)`
font-family: ${(props) => (props.family ? props.family : "'Playfair Display'")};
font-size: ${(props) => (props.size ? props.size : "30px")};
font-weight: ${(props) => (props.weight ? props.weight : "bold")};
font-style: ${(props) => (props.fstyle ? props.fstyle : "italic")};
text-align: ${(props) => (props.align ? props.align : "center")};;
margin: ${(props) => (props.margin ? props.margin : "0px")};
color: ${(props) => (props.color ? props.color : "black")};
border: ${(props) => (props.border ? props.border : "")};
display: ${(props) => (props.display ? props.display : "block")};
letter-spacing: ${(props) => (props.spacing ? props.spacing : "auto")};
padding: ${(props) => (props.padding ? props.padding : "0px")};
align-self: ${(props) => (props.alignSelf ? props.alignSelf : "auto")};
line-height: ${(props) => (props.line ? props.line : "auto")};
opacity: ${(props) => (props.opc ? props.opc : "100%")};
text-shadow:  ${(props) => (props.shadow ? props.shadow : "none")};
width:${(props) => (props.w ? props.w : "auto")};
background-color:${(props) => (props.bg ? props.bg : "none")};
border-radius:${(props) => (props.borderRadius ? props.borderRadius : "none")};
border:${(props) => (props.border ? props.border : "none")};
cursor:${(props) => (props.cursor ? props.cursor : "auto")};
overflow: ${(props) => (props.overflow ? props.overflow : "visible")};
text-overflow: ${(props) => (props.textOverflow ? props.textOverflow : "clip")};
white-space: ${(props) => (props.whiteSpace ? props.whiteSpace : "normal")};
&:hover{
    color: ${(props) => (props.hoverColor ? props.hoverColor : "none")};;
  }


  @media (max-width: 1000px) {
    font-size: ${(props) => (props.size1000 ? props.size1000 : "auto")};
    margin: ${(props) => (props.margin1000 ? props.margin1000 : "0px")};
    
    
      }


  
`;