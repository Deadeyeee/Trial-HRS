import styled from "styled-components";
import { motion } from "framer-motion";


export const ContainerGlobal = styled(motion.div)`
    display: ${(props) => (props.display ? props.display : "flex")};
	height: ${(props) => (props.h ? props.h : "auto")};
    width: ${(props) => (props.w ? props.w : "auto")};
    position: ${(props) => (props.position ? props.position : "static")};
    flex-direction: ${(props) => (props.direction ? props.direction : "row")};
    padding: ${(props) => (props.padding ? props.padding : "0px")};
    gap: ${(props) => (props.gap ? props.gap : "0px")};
    margin: ${(props) => (props.margin ? props.margin : "0px")};
    align-items: ${(props) => (props.align ? props.align : "flex-start")};
    justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
    background-color: ${(props) => (props.bg ? props.bg : "none")};
    box-shadow:${(props) => (props.shadow ? props.shadow : "none")};
    overflow:${(props) => (props.overflow ? props.overflow : "hidden")};
    border-radius:${(props) => (props.radius ? props.radius : ".5rem")};
    flex-grow:${(props) => (props.grow ? props.grow : "0")};
    border:${(props) => (props.border ? props.border : "none")};
  z-index: ${(props) => (props.index ? props.index : "none")};
    position: ${props => props.active ? "absolute" : "static"};
  top: ${props => props.active ? "0" : "auto"};
  left: ${props => props.active ? "0" : "auto"};
  /* bring your own prefixes */
`;