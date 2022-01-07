import React from 'react'
import { Button } from '../../components/button/styles';
import TextBox from '../../components/textBox/TextBox';
import { Title } from '../../components/title/styles';
import logo from '../../images/logo.png';
import { Container, LoginBorder, Logo, Square, Star } from './style';
export const Login = () => {
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
            placeholder="User Name" type="text"
            ></TextBox>

            <TextBox 
            placeholder="Password" type="password"
            radius="0px"
            ></TextBox>

            <Title
            size="12px"
            family="arial"
            color="red"
            weight="normal"
            display="none"
            >Incorrect password or username</Title>

            <Button
            whileHover={{ scale: 1.05,  color: "red" }}
            whileTap={{ scale: .9, color: "gray"}}
            w='160px' 
            h='30px'
            textColor='black'
            radius='5px'
            weight='bold'
            border='none'
            align='right'
            >Forgot your password?</Button>

            <Button
            whileHover={{ scale: 1.1, backgroundColor: "#8F805F",
            border: "2px solid #2E2E2E", color: "white" }}
            whileTap={{ scale: 1}}
            w='190px' 
            h='30px'
            margin='40px 0 0 0'
            textColor='black'
            radius='5px'
            weight='bold'
            >Log in</Button>

            <Title
            size="10px"
            margin="20px 0px 10px 0px"
            >OR</Title>

            <Button
            whileHover={{ scale: 1.2, textdecoration: "underline", color: "blue" }}
            whileTap={{ scale: .9, color: "gray"}}
            w='60px' 
            h='30px'
            textColor='black'
            radius='5px'
            weight='bold'
            border='none'
            >Sign Up</Button>

            </LoginBorder>
            

            {/*FROM THIS POINT WILL BE THE BACKGROUND ANIMATION*/}
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            />
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1400, 1400] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1090, 1090] }}
            transition={{ ease: "linear", duration: 13, repeat: Infinity }}
            />
            <Square
            w="20px"
            h="90px"
            color="DeepPink"
            animate={{ y: [-1520, 1000], rotate: [0, 360] }}
            transition={{ ease: "linear", duration: 14, repeat: Infinity }}
            />
            <Star
            h="1px"
            w="1px"
            animate={{ y: [-1200, 1200] }}
            transition={{ ease: "linear", duration: 13, repeat: Infinity }}
            />
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1300, 1300] }}
            transition={{ ease: "linear", duration: 17, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-900, 900] }}
            transition={{ ease: "linear", duration: 19, repeat: Infinity }}
            /><Star
            h="3px"
            w="3px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            />
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1400, 1400] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1090, 1090] }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
            />
            
            <Star
            h="1px"
            w="1px"
            animate={{ y: [-1200, 1200] }}
            transition={{ ease: "linear", duration: 3, repeat: Infinity }}
            />
            <Star
            h="1px"
            w="1px"
            animate={{ y: [-1300, 1300] }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
            />
            <Star
            h="1px"
            w="1px"
            animate={{ y: [-900, 900] }}
            transition={{ ease: "linear", duration: 17, repeat: Infinity }}
            /><Star
            h="3px"
            w="3px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
            />
            <Star
            h="1px"
            w="1px"
            animate={{ y: [-1400, 1400] }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1090, 1090] }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
            />

            <Square
            w="50px"
            h="90px"
            r="50px"
            color="violet"
            animate={{ y: [-1520, 1000], rotate: [0, 360], x:[-500, 500] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            />

            <Star
            h="1px"
            w="1px"
            animate={{ y: [-1200, 1200] }}
            transition={{ ease: "linear", duration: 13, repeat: Infinity }}
            />
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1300, 1300] }}
            transition={{ ease: "linear", duration: 14, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-900, 900] }}
            transition={{ ease: "linear", duration: 13, repeat: Infinity }}
            />
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            />
            <Square
            w="200px"
            h="200px"
            animate={{rotate: [0, 360], x:[-1500, 1000] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            />
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1400, 1400] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1090, 1090] }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            />
            <Square
            w="30px"
            h="20px"
            color="Orange "
            animate={{ y: [1520, -1000], rotate: [0, 360], x:[1500, -900] }}
            transition={{ ease: "linear", duration: 24, repeat: Infinity }}
            />
            <Star
            h="1px"
            w="1px"
            animate={{ y: [-1200, 1200] }}
            transition={{ ease: "linear", duration: 13, repeat: Infinity }}
            />
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1300, 1300] }}
            transition={{ ease: "linear", duration: 16, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-900, 900] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 21, repeat: Infinity }}
            />
            <Star
            h="1px"
            w="1px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 6, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 4, repeat: Infinity }}
            />
            <Square
            w="50px"
            h="90px"
            
            color="cyan"
            animate={{ y: [-2520, 1000], rotate: [0, 360], x: [500, -1000] }}
            transition={{ ease: "linear", duration: 14, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 21, repeat: Infinity }}
            />
            
            <Star
            h="4px"
            w="4px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
            />
            
            <Star
            h="1px"
            w="1px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 17, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 3, repeat: Infinity }}
            />
            <Star
            h="1px"
            w="1px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 7, repeat: Infinity }}
            />
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1300, 1300] }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-900, 900] }}
            transition={{ ease: "linear", duration: 21, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 19, repeat: Infinity }}
            />
            <Star
            h="1px"
            w="1px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 6, repeat: Infinity }}
            />
            <Square
            r="100px"
            animate={{ y: [-1000, 1000], rotate: [0, 90] }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            />
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            />
            
            <Star
            h="2px"
            w="2px"
            animate={{ y: [-1000, 1000] }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
            />
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1220, 1000] }}
            transition={{ ease: "linear", duration: 12, repeat: Infinity }}
            />
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1520, 1000] }}
            transition={{ ease: "linear", duration: 17, repeat: Infinity }}
            />
            <Square
            
            color="yellow"
            animate={{ y: [-1520, 1000], rotate: [0, 360] }}
            transition={{ ease: "linear", duration: 17, repeat: Infinity }}
            />
            <Star
            h="3px"
            w="3px"
            animate={{ y: [-1620, 1000] }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
            />
        </Container>
        </div>
    )
}


export default Login;