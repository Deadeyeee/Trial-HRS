import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled(motion.div)`
    display: ${(props) =>(props.display ? props.display : "none")};
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const TitleCap = styled(motion.div)`
width: 90px;
overflow: hidden;`;


export const Container = styled(motion.div)`
    display: flex;
    width: 150px;
    height: 30px;
    align-items: center;
    justify-content: center;
    color: white;
    padding-left: 10px;
    padding-bottom: 5px;
    vertical-align:middle;
    border-left: 1px solid gray;
    cursor: pointer;
`;
export const DropContainer = styled(motion.div)`
    display: ${(props) =>(props.display ? props.display : "flex")};
    width: 150px;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #E1DACA;
    border-radius: 5px;
    position: absolute;
    margin-top: 320px;
    box-shadow: 2px 5px 5px black;
    padding-right: 10px;
`;

export const Menu = styled(motion.a)`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    cursor: pointer;
    padding: 5px 0px;
    &:hover{
        background-color: "#8F805F";
        border-radius: "3px"
    }
`;

export const ProfilePicture = styled(motion.img)`
    height: 25px;
    width: 25px;
    border: 1px solid #8F805F;
    vertical-align:middle;
    border-radius: 360px;
    margin-right:10px;
    `;

export const DropDown = styled(motion.img)`
    height: 20px;
    width: 20px;
    filter: invert(90%);
    margin-left: auto;
`;