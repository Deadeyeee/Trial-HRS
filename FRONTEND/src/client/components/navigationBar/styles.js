import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../../viewports";

export const Container = styled(motion.div)`  
    background: #2E2E2E;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 2;
    @media (max-width: 1000px) {
    position: static;
    width: 100vw;
    padding-bottom: 20px;
  }
    `;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: left;
  cursor: pointer;
  span{
      height: 2px;
      width: 25px;
      margin: 2px;
      background-color: #E1DACA;

  }
  @media (max-width: 1000px) {
      display: flex;
  }
`;

export const Menu = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
      
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

    `;

export const MenuItems = styled.li`
    display: inline;
    margin: 0px 5px;
    

    @media (max-width: 1000px) {
        display: flex;
    }
    `;


export const MainMenu = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        display: ${({isOpen}) => (isOpen ?  "flex" : "none")};
        flex-direction: column;

        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-top:2rem;
        
    }
`;

export const Link = styled.a`
    color: ${props => props.active ? "#8F805F" : "#E1DACA"};
    border-top: ${props => props.active ? "0.5px solid white" : "none"};
    padding: 0px 12px;
    padding-top: 10px;
    text-decoration: none;
    font-family: Times New Roman;
    font-size: 17px;
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
 