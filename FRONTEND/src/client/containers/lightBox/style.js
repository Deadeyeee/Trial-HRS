import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    background-color: white;
    z-index: 3;
`;


export const Announcement = styled(motion.div)`
    height: 70%;
    width: 90%;
    overflow: hidden;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;
export const AnnouncementConent = styled(motion.img)`
    height: 100%;
    width: auto;
    @media (max-width: 1000px) {
        height: auto;
        width: 100%;
    }
`;

export const Background = styled(motion.div)`
    display: ${(props) => (props.display ? props.display : "none")};
    background-color: #8f805fa1;
    height: 100%;
    width: 100%;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    
`;

export const TitleBar = styled(motion.div)`
    display: flex;
    margin-bottom: auto;
    width: 100%;
    height: 90px;
    background-color: #2E2E2E;
    justify-content: center;
    align-items: center;
    `

