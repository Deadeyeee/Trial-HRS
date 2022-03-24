import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 1200px;
`;

export const MainContainer = styled(motion.div)`
    display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 1200px;
  min-width: 1200px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 0px 10px gray;
`;

export const HeadContainer = styled(motion.div)`
   display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  width: 100%;
  background-color: #302B20;
`;

export const Navigations = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const MenuItems = styled.li`
    display: inline;
    margin: 0px 5px;
    `;

export const Link = styled.a`
    color: ${props => props.active ? "#8F805F" : "#2E2E2E"};
    border-bottom: ${props => props.active ? "5px solid #DFD3B9" : "none"};
    padding: 0px 12px;
    padding-bottom: 10px;
    text-decoration: none;
    font-family: arial;
    font-weight: bold;
    ${MenuItems}:hover &{
        color: #8F805F;
        border-bottom: 1px solid #2E2E2E;
    }
    `;