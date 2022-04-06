
import styled from "styled-components";
import { motion } from "framer-motion";

export const HorizontalLine = styled(motion.div)`
    background-color: ${(props) => (props.bg ? props.bg : "black")};
    height: 1px;
    width:${(props) => (props.w ? props.w : "60%")};
    margin:${(props) => (props.margin ? props.margin : "30px 0px 10px 0px")} ; 
`;