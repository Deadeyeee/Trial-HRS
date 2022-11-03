import React,{useEffect, useLayoutEffect, useState} from 'react';
import { Logo, Container, MenuItems, Menu, Link, HamburgerMenu, MainMenu } from './styles';
import logo from '../../images/logo.png';
import { Button } from '../button/styles';
import Axios from 'axios';
import ProfileDrop from '../../containers/profileDrop/ProfileDrop';
import { apiKey } from '../../../apiKey';


export const Nav = (props) => {
  

  Axios.defaults.withCredentials = true;
  const [login, setLogin] = useState(true);
  const [dropDown, setdropDown] = useState("");
  const [userName, setUserName] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const Logout = () => {
      Axios.delete(apiKey+"auth/Logout").then((response) => {
        
        window.location.reload();
      })
  }

  useLayoutEffect(()=>{
    console.log()
    Axios.defaults.withCredentials = true;
    Axios.get(apiKey+"auth/verify-token").then((response)=>{
      setLogin(false);
      setdropDown("inline-flex")
      Axios.get(apiKey + 'api/getAllGuest').then((result) => {
        setUserName(result.data.filter((obj)=> obj.user.id == response.data.id).map((item)=> item.firstName)[0].charAt(0).toUpperCase() + result.data.filter((obj)=> obj.user.id == response.data.id).map((item)=> item.firstName)[0].slice(1).toLowerCase())
      }).catch((err) => {
        console.log(err)
      });
    }).catch((e) => {
      if(e.response.data === "Unauthorized"){
        setdropDown("none");
      }
    })
},[]);
  
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
          userName={userName != '' ? userName:''}
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