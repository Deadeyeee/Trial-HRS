import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: none;
    background-color: #CCDBD9;
    overflow: hidden;
    border-radius: 30px;
    flex-direction: column;
    margin:10px;
    height: 550px;
    width: 330px;
    box-shadow: -5px 10px 20px black;
    position:relative;
    `;


export const Exit = styled(motion.button)`
    background-color: transparent;
    border: none;
    cursor: pointer;
    `;

export const ExitImage = styled.img`
    height: 20px;
    width: 20px;`;

export const Head = styled.div`
    background-color: #60553F;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    `;

export const Logo = styled.img`
    border-radius: 100px;
    width: 50px;
    height: 50px;`;

export const headTitle = styled.p`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
    `;

export const Title = styled.h1`
    color: #DFD3B9;
    margin: 0px;
    font-size: 20px;
    font-weight: normal;
    `;

export const Status = styled.h2`
    color: white;
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 1px;
    margin: 5px 0px 0px 0px;
    `;

export const Chat = styled.div`
    width: 100%;
    height: 72%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow-y: scroll;
    overflow-x: hidden;
    `;

export const User = styled.p`
    background-color: #DFD3B9;
    border-radius: 10px;
    display: flex;
    align-self: flex-end;
    text-align: left;
    margin: 10px 20px;
    padding: 10px 20px; 
    max-width: 55%;
    box-shadow: 3px 5px 7px #5B5B5B;
    `;

export const Bot = styled.p`
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-self: flex-start;
    text-align: left;
    margin: 10px 20px;
    padding: 10px 20px; 
    max-width: 55%;
    box-shadow: -2px 5px 7px #5B5B5B;
    `;

export const Query = styled.div`
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    height: 15%;
    `;

export const Message = styled.input`
    background-color: rgba(0, 0, 0, 0);
    outline: 0;
    width: 80%;
    border-width: 0 0 0px;
    border-color: black;
`;

export const SendButton = styled(motion.button)`
    background-color: transparent;
    border: none;
    cursor: pointer;
    `;

export const ButtonImage = styled.img`
    width: ${(props) => (props.w ? props.w : "25px")};
    height: ${(props) => (props.h ? props.h : "25px")};
    `;

export const ContainerParent = styled(motion.div)`
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;
    `;

export const MinChat = styled(motion.div)`
    width: 70px;
    height: 70px;
    border-radius: 100px;
    display: flex;
    margin-right: 10px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    background-color: #DFD3B9;
    overflow: hidden;
    box-shadow: 0px 8px 10px black;
    `;