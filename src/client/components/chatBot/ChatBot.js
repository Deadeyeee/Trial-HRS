import React, {useState} from 'react'
import {MinChat,ContainerParent, Exit, ExitImage, Container, Head, headTitle,Title, Logo, Status, Chat, User, Bot, Query, Message,ButtonImage, SendButton } from './styles';
import logo from '../../images/logo2.png';
import Send from '../../icons/send.svg';
import ExitLogo from '../../icons/exit.svg';
import Chats from '../../icons/chat.svg';


export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const iconVariants = {
        opened: {
            clipPath: `circle(0% at 100% 100%`,
            transition: {
                type: "spring",
                stiffness: 50,
                restDelta: 1
              },
        },
        closed: {
            display: "flex",
            clipPath: `circle(150% at 100% 100%)`,
            transition: {
                type: "spring",
                stiffness: 50,
                restDelta: 1
              },
        }
    };

    const iconVariants2 = {
        opened: {
            display: "none",
            scale: 0,
        },
        closed: {
            display: "flex",
            scale: 1,
        }
    };


    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    return (
        <ContainerParent
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{  duration: .5, delay: 1.2 }}
        >
            <Container
            initial={false}
            variants={iconVariants}
            animate={isOpen ? "closed": "opened"}
            
            >
            <Head>
                <Logo src={logo}></Logo>
                <headTitle>
                    <Title>RM Luxe Hotel</Title>
                    <Status>We'll reply as soon as we can.</Status>
                </headTitle>
                <Exit
                initial={false}
                onClick={() => setIsOpen(state => !state)}
                variants={iconVariants}
                >
                    <ExitImage src={ExitLogo}></ExitImage>
                </Exit>
            </Head>
            <Chat>
                <User>This is a heading This is a heading</User>
                <Bot>This is a heading This is a heading</Bot>
            </Chat>
            <Query>
                <Message placeholder="Type your message..." type="text"></Message>
                <SendButton><ButtonImage src={Send}></ButtonImage></SendButton>
            </Query>
        </Container>
        <MinChat 
        initial={false}
        onClick={() => setIsOpen(state => !state)}
        variants={iconVariants2}
        animate={isOpen ? "opened": "closed"}
        >
            <ButtonImage src={Chats} h="30px" w="30px"></ButtonImage>
        </MinChat>
        </ContainerParent>
    )
}


export default ChatBot;