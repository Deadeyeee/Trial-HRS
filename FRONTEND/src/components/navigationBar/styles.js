import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`  
    background: #2E2E2E;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    width: 100%;
    `;

export const Menu = styled.ul`
    margin: 0;
    padding: 0;
    `;

export const MenuItems = styled.li`
    display: inline;
    margin: 0px 5px;
    `;

export const Link = styled.a`
    color: ${props => props.active ? "#8F805F" : "#E1DACA"};
    border-top: ${props => props.active ? "0.5px solid white" : "none"};
    padding: 10px 12px;
    text-decoration: none;
    font-family: Georgia;
    ${MenuItems}:hover &{
        color: #8F805F;
    }
    `;

export const Logo = styled.img`
    height: 150px;
    width: 150px ;
    display: inline;
    vertical-align:middle;
    `;
 