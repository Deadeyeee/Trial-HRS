import React, { useState, useEffect, useRef } from 'react';
import Background from '../../../components/background/Background';
import { Container, NameContainer, RegisterBorder, RegistrationForm, Logo } from './style';
import { Title } from '../../../components/title/styles'
import { TextInput } from '../../../components/textBox/style'
import { Button, FormButton } from '../../../components/button/styles';
import Axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

export const Register = () => {
  let passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let letters = /^[A-Za-z]+$/;
  let phoneNumberValidation = /^(09|\+639)\d{9}$/;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [creationStatusUsername, setCreationStatusUsername] = useState("");
  const [creationStatusEmail, setCreationStatusEmail] = useState("");
  const [creationStatusNumber, setCreationStatusNumber] = useState("");
  const [creationStatusName, setCreationStatusName] = useState("");
  const [creationStatus, setCreationStatus] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
  const userNameref = useRef(null);
  const emailref = useRef(null);
  const phoneNumber = useRef(null);
  const passwordref = useRef(null);
  const nameRef = useRef(null);
  let formatNumber;
  const creatAccount = (e) => {

    e.preventDefault();
    // console.log(number.slice(0, 3))
    // console.log(number.slice(3,12))
    if (number.slice(0, 3) == "+63") {

      formatNumber = number.replace("+63", "0");

    }
    if (!letters.test(firstName) || !letters.test(lastName)) {
      setCreationStatusName("Invalid name. Please type letters only.");
      setCreationStatusEmail("");
      setCreationStatusUsername("");
      setCreationStatusNumber("");
      setCreationStatus("");
      nameRef.current.focus();
      nameRef.current.select();

    }
    else if (!phoneNumberValidation.test(number)) {
      setCreationStatusName("");
      setCreationStatusEmail("");
      setCreationStatusUsername("");
      setCreationStatusNumber("Mobile number is invalid. Please follow the correct format provided.");
      setCreationStatus("");
      phoneNumber.current.focus();
      phoneNumber.current.select();
    }
    else {
      if (!passwordValidation.test(password)) {
        setPasswordValid("Password must have a minimum of eight characters, at least one letter and one number.");
        setCreationStatusEmail("");
        setCreationStatusUsername("");
        setCreationStatusNumber("");
        setCreationStatus("");
        setCreationStatusName("");
        nameRef.current.focus();
        nameRef.current.select();
      }
      else {
        
        setPasswordValid("");
        if (password == confirmPassword) {
          Axios.post('http://localhost:3001/api/addUser', {
            userName: userName.toLowerCase(),
            email: email.toLowerCase(),
            contactNumber: formatNumber,
            password: password,
          }).then((response) => {
            localStorage.setItem('id', response.data.account.id);
            localStorage.setItem('email', response.data.account.email);
            localStorage.setItem('userName', response.data.account.userName);
            Axios.post('http://localhost:3001/api/addGuest', {
              firstName: firstName.toLowerCase(),
              lastName: lastName.toLowerCase(),
              user_id: response.data.account.id,
            }).then((response) => {
              setCreationStatus("Account created successfuly");
              console.log(response.data);
              console.log(creationStatus);
              // window.location.href = '/verifyEmail';

            }).catch((error) => {
              console.log(error.response.data)
            });
          }).catch((err) => {
            console.log(err.response.data)

            if (err.response.data == "Username already in use!") {
              setCreationStatusUsername("Username already in use!");
              setCreationStatusEmail("");
              setPasswordMatch("");
              setCreationStatus("");
              setCreationStatusName("");
              setCreationStatusNumber("");
              userNameref.current.focus();
              userNameref.current.select();
            }
            else {
              if (err.response.data == "Email address already in use!") {
                setCreationStatusEmail("Email address already in use!");
                setCreationStatusUsername("");
                setPasswordMatch("");
                setCreationStatus("");
                setCreationStatusName("");
                setCreationStatusNumber("");
                emailref.current.focus();
                emailref.current.select();
              }
              else {
                if (err.response.data == "Phone number already in use") {
                  setCreationStatusEmail("");
                  setCreationStatusUsername("");
                  setCreationStatusNumber("Phone number already in use");
                  setPasswordMatch("");
                  setCreationStatusName("");
                  setCreationStatus("");
                  phoneNumber.current.focus();
                  phoneNumber.current.select();
                }
              }
            }

          });
        }
        else {
          setPasswordMatch("Password does not match, please try again.");
          setCreationStatusEmail("");
          setCreationStatusUsername("");
          setCreationStatusNumber("");
          setCreationStatus("");
          passwordref.current.focus();
          passwordref.current.select();

        }
      }
    }
  }
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: -0.2 },
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/auth/verify-token").then((response) => {
      if (response.status === 200) {
        window.location.href = '/';
      }
    });
  }, []);
  return (
    <Container>
      <RegisterBorder
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1.5 }}
      >
        <RegistrationForm onSubmit={creatAccount}
          height="100%"
          width="100%"
        >

          <Title
            margin="0px 0px 20px 0px"
            size="4vh"
            weight="normal"
          >Create your account</Title>
          <NameContainer>
            <TextInput
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="&#xf2bb;  First name"
              family="FontAwesome"
              type="text"
              widthFocus="0px"
              width='50%'
              indent='10px'
              margins="15px 0px"
              border="0 0 1px"
              padding="5px 0px"
              radiusFocus="0px"
              onkeydown="return /[a-z]/i.test(event.key)"
              ref={nameRef}
              required></TextInput>
            <TextInput
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="&#xf2bb;  Last name"
              family="FontAwesome"
              type="text"
              widthFocus="0px"
              width='50%'
              indent='10px'
              margins="15px 0px"
              border="0 0 1px"
              padding="5px 0px"
              radiusFocus="0px"
              required></TextInput>
          </NameContainer>
          <Title
            animate={{ scale: [1, .95, 1] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            size="12px"
            family="arial"
            margin="5px 0px 0px 0px"
            color="red"
            weight="normal"

          >{creationStatusName}</Title>
          <TextInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="&#xf0e0;  Email"
            family="FontAwesome"
            type="email"
            ref={emailref}
            widthFocus="0px"
            padding="5px 0px"
            width='100%'
            indent='10px'
            margins="15px 0px"
            radiusFocus="0px"
            border="0 0 1px"
            required></TextInput>
          <Title
            animate={{ scale: [1, .95, 1] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            size="12px"
            family="arial"
            margin="5px 0px 0px 0px"
            color="red"
            weight="normal"

          >{creationStatusEmail}</Title>
          <TextInput
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="&#xf007;  Username"
            family="FontAwesome"
            type="text"
            widthFocus="0px"
            margins="15px 0px"
            width='100%'
            border="0 0 1px"
            indent='10px'
            padding="5px 0px"
            radiusFocus="0px"
            ref={userNameref}
            required></TextInput>
          <Title
            animate={{ scale: [1, .95, 1] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            size="12px"
            family="arial"
            margin="5px 0px 0px 0px"
            color="red"
            weight="normal"

          >{creationStatusUsername}</Title>

          <TextInput
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            placeholder="&#xf095;  Phone number"
            title="input valid contact number"
            family="FontAwesome"
            type="text"
            ref={phoneNumber}
            widthFocus="0px"
            padding="5px 0px"
            indent='10px'
            margins="15px 0px 0px 0px"
            radiusFocus="0px"
            width='100%'
            border="0 0 1px"
            required></TextInput>

          <Title
            size="10px"
            family="arial"
            margin="5px 0px 15px 0px"
            color="gray"
            w='100%'
            weight="normal"
            align='left'
          >
            e.g. 09123456789 or +639123456789
          </Title>
          <Title
            animate={{ scale: [1, .95, 1] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            size="12px"
            family="arial"
            margin="5px 0px 0px 0px"
            color="red"
            weight="normal"

          >{creationStatusNumber}</Title>
          <TextInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="&#xf023;  Password"
            family="FontAwesome"
            type="password"
            padding="5px 0px"
            widthFocus="0px"
            indent='10px'
            margins="15px 0px 5px 0px"
            radiusFocus="0px"
            width="100%"
            border="0 0 1px"
            required></TextInput>
          <Title
            size="1.2vh"
            family="arial"
            margin="5px 0px 15px 0px"
            color="red"
            w='100%'
            weight="normal"
            align='left'
          >
            {passwordValid}
          </Title>
          {/* <Title
            animate={{ scale: [1, .95, 1] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            size="12px"
            family="arial"
            margin="5px 0px 0px 0px"
            color="red"
            weight="normal"

          >{passwordValid}</Title> */}
          <TextInput
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="&#xf023;  Confirm password"
            family="FontAwesome"
            type="password"
            widthFocus="0px"
            margins="15px 0px"
            border="0 0 1px"
            padding="5px 0px"
            indent='10px'
            width="100%"
            radiusFocus="0px"
            ref={passwordref}
            required></TextInput>
          <Title
            animate={{ scale: [1, .95, 1] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            size="12px"
            family="arial"
            margin="0px 0px 0px 0px"
            color="red"
            weight="normal"

          >{passwordMatch}</Title>

          <Button
            display="none"
          ></Button>

          <FormButton
            whileHover={{ scale: 1.1, color: "rgb(255, 255, 255)" }}
            whileTap={{ scale: 1.05, backgroundColor: "#8F805F" }}
            type="submit"
            w='290px'
            h='30px'
            margin='10px 0 0 0'
            textcolor='white'
            radius='5px'
            weight='bold'
            bg="green"
            border='none'
            padding='5px 5px'
            value="Create account"
          ></FormButton>

          <Title
            size="10px"
            margin="20px 0px 10px 0px"
          >OR</Title>

          <Button
            whileHover={{ scale: 1.2, color: "rgb(0,0,255)" }}
            whileTap={{ scale: 1, color: "rgb(220,220,220)" }}
            w='60px'
            h='30px'
            textcolor='black'
            radius='5px'
            weight='bold'
            border='none'
            href='/login'
          >Log in</Button>

        </RegistrationForm>
      </RegisterBorder>
      <Background></Background>
    </Container>
  );
};


export default Register;