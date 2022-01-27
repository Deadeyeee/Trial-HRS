import React, {useState, useEffect} from 'react'
import { Button } from '../../components/button/styles';
import TextBox from '../../components/textBox/TextBox';
import { Title } from '../../components/title/styles';
import logo from '../../images/logo.png';
import { Container, LoginBorder, Logo, Square, Star } from './style';
import Axios from 'axios';
import Background from '../../components/background/Background';

export const Login = () => {
    Axios.defaults.withCredentials = true;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    const [loginStatus, setLoginStatus] = useState("");


    const checkAccount = () =>{
        Axios.post('http://localhost:3001/login', 
        {
            username: username, 
            password: password,
        }).then((response)=>{
            if(response.data.message){
                setLoginStatus(response.data.message);
            }
            else{
                window.location.href = '/';
            }

            console.log(response.data)
        });
    };

    useEffect(()=>{
        Axios.get("http://localhost:3001/login").then((response)=>{
            if(response.data === "loged"){
                window.location.href = '/';
            }
        })
    });
    

    const variants = {
        visible: { opacity: 1},
        hidden: {opacity: -0.2},
      }
      
    return (
        <div>
            <Container>
            <LoginBorder
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{  duration: 1.5}}
            >

            <a href="/">
                <Logo
                whileHover={{ backgroundColor: "#2E2E2E", borderRadius: "5px" }}
                src={logo} href="/"
                ></Logo>
            
            </a>

            <Title
            margin="0px 0px 20px 0px"
            >Welcome to RM Luxe Hotel</Title>

            <TextBox
            placeholder="Username" type="text" 
            onChange={(e) => {
                setUsername(e.target.value);
            }}
            ></TextBox>
            <TextBox 
            
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            placeholder="Password" type="password"
            radius="0px" 
            ></TextBox>

            <Title
            animate={{ scale:[1, .95, 1] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            size="12px"
            family="arial"
            margin="5px 0px 0px 0px"
            color="red"
            weight="normal"
            >{loginStatus}</Title>

            <Button

            whileHover={{ scale: 1.05,  color: "rgb(255, 0, 0)" }}
            whileTap={{ scale: 1, color: "rgb(220,220,220)"}}
            w='160px' 
            h='30px'
            textcolor='black'
            radius='5px'
            weight='bold'
            border='none'
            align='right'
            >Forgot your password?</Button>

            <Button
            onClick={checkAccount}

            whileHover={{ scale: 1.1, backgroundColor: "#8F805F",
            border: "2px solid #2E2E2E", color: "rgb(255, 255, 255)" }}
            whileTap={{ scale: 1}}
            w='190px' 
            h='30px'
            margin='40px 0 0 0'
            textcolor='black'
            radius='5px'
            weight='bold'
            >Log in</Button>

            <Title
            size="10px"
            margin="20px 0px 10px 0px"
            >OR</Title>

            <Button
            whileHover={{ scale: 1.2, color: "rgb(0,0,255)" }}
            whileTap={{ scale: 1, color: "rgb(220,220,220)"}}
            w='60px' 
            h='30px'
            textcolor='black'
            radius='5px'
            weight='bold'
            border='none'
            >Sign Up</Button>

            </LoginBorder>
            

            {/*FROM THIS POINT WILL BE THE BACKGROUND ANIMATION*/}
            <Background></Background>
        </Container>
        </div>
    )
}


export default Login;