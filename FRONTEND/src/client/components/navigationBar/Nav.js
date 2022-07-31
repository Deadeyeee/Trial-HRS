import React,{useEffect, useLayoutEffect, useState} from 'react';
import { Logo, Container, MenuItems, Menu, Link, HamburgerMenu, MainMenu } from './styles';
import logo from '../../images/logo.png';
import { Button } from '../button/styles';
import Axios from 'axios';
import ProfileDrop from '../../containers/profileDrop/ProfileDrop';


export const Nav = (props) => {
  

  const [login, setLogin] = useState(true);
  const [dropDown, setdropDown] = useState("");
  const [userName, setUserName] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const Logout = () => {
      Axios.delete("http://localhost:3001/auth/Logout").then((response) => {
        
        window.location.reload();
      })
  }

  useLayoutEffect(()=>{
    console.log()
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/auth/verify-token").then((response)=>{
      setLogin(false);
      setdropDown("inline-flex")
      setUserName(response.data.userName.charAt(0).toUpperCase()+ response.data.userName.slice(1));
      
    }).catch((e) => {
      if(e.response.data === "Unauthorized"){
        setdropDown("none");
      }
    })
});
  
  const variants = {
    visible: { y: 0, opacity:1 },
    hidden: { y: -150, opacity: 0 },
  }

    return (
      <Container>
           <Menu>
           <Logo src={logo}/>
           <HamburgerMenu onClick={
             ()=> setIsOpen(!isOpen)
           }>
             <span/>
             <span/>
             <span/>
           </HamburgerMenu>
           <MainMenu isOpen={isOpen}
           
           >
             
           <MenuItems><Link active={props.home == true} href="/">Home</Link></MenuItems>
           <MenuItems><Link active={props.book == true} href="/booking">Booking</Link></MenuItems>
           <MenuItems><Link active={props.facilities == true} href="/facilitiesAmenities">Facilities & Amenities</Link></MenuItems>
           <MenuItems><Link active={props.room == true} href="/roomRate">Rooms & Rates</Link></MenuItems>
           <MenuItems><Link active={props.contact == true} href="/contactUs">Contact</Link></MenuItems>
           <MenuItems><Link active={props.about == true} href="/aboutUs">About Us</Link></MenuItems>

           <ProfileDrop
          display={dropDown}
          userName={userName}
          Logout={Logout}
          ></ProfileDrop>
           <Button href="/login"
           display={login ? "inline-flex": "none"}
           w='90px' 
           h='30px'
           style={{ scale: .9}}
           whileHover={{ scale: 1, backgroundColor: "#8F805F",
           border: "1px solid white", rotate: [0, 5, -5, 0, ], }}
           whileTap={{ scale: .9}}
           transition={{ duration: .2 }}
           >Log in</Button>
       <image src="logo.png"></image>
           </MainMenu>
          
       </Menu>
         
      </Container>
    )
  }

export default Nav