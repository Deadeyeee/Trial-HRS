import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Container = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    width: 100%;
    background-color: #302B20;
    color: white;
    text-align: center;
    
    `;

export const Image = styled.img`
    height: 170px;
    width: 170px;
    padding: 0px 80px;
    border-top: 1px solid white;
    `;

export const Icon = styled(motion.img)`
    height: 50px;
    width: 50px;
    margin: 0px 20px;
    `;

export const Right = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    `;

export const IconDiv = styled.div`
    display: flex;
    margin: 20px 0px;
    justify-content: center;
    align-items: center;
    `;

