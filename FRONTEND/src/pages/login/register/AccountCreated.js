import {React, useEffect} from 'react';
import Background from '../../../components/background/Background';
import { Title } from '../../../components/title/styles';
import { Container, RegisterBorder, Image} from './style';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Button } from '../../../components/button/styles';
import Logo from '../../../images/logo.png'

const AccountCreated = () => {
  const {id} = useParams();
  useEffect(()=>{
  Axios.patch('http://localhost:3001/api/confirmEmail/'+ id , );
  });

  return( 
      <Container>
        <RegisterBorder>
       <a href='/'> <Image
        whileHover={{ backgroundColor: "#2E2E2E", borderRadius: "5px" }}
        href="/" src={Logo}></Image></a>
        <Title
        size = "40px"
        >
          Thanks for signing up.
        </Title>
        <Title
        family="arial"
        size = "15px"
        margin = "20px;"
        weight = "normal"
        >
          You can now login on our page!<br></br> just click the button below to go into our login page.
        </Title>
        <Button
        w="100px"
        h="50px"
        textcolor = "black"
        weight = "bold"
        >
          Login
        </Button>
        </RegisterBorder>
        <Background></Background>
      </Container>
    );
};

export default AccountCreated;
