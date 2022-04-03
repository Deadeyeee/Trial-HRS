import { React, useEffect, useState } from 'react';
import Background from '../../../components/background/Background';
import { Title } from '../../../components/title/styles';
import { Container, RegisterBorder, Image } from './style';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Button } from '../../../components/button/styles';
import Logo from '../../../images/logo.png'


const AccountCreated = () => {

  const [ message, setMessage ] = useState("");
  const { id } = useParams();
  useEffect(() => {
    Axios.get('http://localhost:3001/auth/verify-email-token/' + id).then((res) => {
      if (res.status === 401) {

        window.location.href = '/404';
      }
      Axios.get('http://localhost:3001/api/getUsers/' + res.data.id).then((res) => {
        if (res.data.emailVerified === false) {
          Axios.patch('http://localhost:3001/api/confirmEmail', {
            id: res.data.id,
          }).then((res) => {
            setMessage("You can now login on our page!\n just click the button below to go into our login page.")
          }).catch((err) => {
            console.log(err.res.data);
          });
        }
        else {
          setMessage("You already confirm your email address. You can proceed to Login now.")
        }
      });

    }).catch((err) => {
      window.location.href = '/404';
    });
  });

  return (
    <Container>
      <RegisterBorder>
        <a href='/'> <Image
          whileHover={{ backgroundColor: "#2E2E2E", borderRadius: "5px" }}
          href="/" src={Logo}></Image></a>
        <Title
          size="40px"
        >
          Thanks for signing up.
        </Title>
        <Title
          family="arial"
          size="15px"
          margin="20px;"
          weight="normal"
        >
          {message}
        </Title>
        <Button href="/login"
          w="100px"
          h="50px"
          textcolor="black"
          weight="bold"
        >
          Login
        </Button>
      </RegisterBorder>
      <Background></Background>
    </Container>
  );
};

export default AccountCreated;
