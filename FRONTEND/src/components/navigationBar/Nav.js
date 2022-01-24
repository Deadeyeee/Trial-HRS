import React,{useEffect, useState} from 'react';
import { Logo, Container, MenuItems, Menu, Link } from './styles';
import logo from '../../images/logo.png';
import { Button } from '../button/styles';
import Axios from 'axios';
import ProfileDrop from '../../containers/profileDrop/ProfileDrop';


export const Nav = (props) => {
  
  Axios.defaults.withCredentials = true;

  const [login, setLogin] = useState("");
  const [dropDown, setdropDown] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/login").then((response)=>{
      console.log(response.data);
        if(response.data != "not loged"){
            setLogin("none");
            setUserName(response.data)

        }
        else{
          setdropDown("none");
        }
        console.log(response.data)
    })
});
  
  const variants = {
    visible: { y: 0, opacity:1 },
    hidden: { y: -150, opacity: 0 },
  }

    return (
      <Container
       initial="hidden"
       animate="visible"
       variants={variants}
       transition={{  duration: .8, type: "tween"  }}
      >
           <Menu>
           <Logo src={logo}/>
           <MenuItems><Link active={props.home == true} href="/">Home</Link></MenuItems>
           <MenuItems><Link active={props.book == true} href="/booking">Booking</Link></MenuItems>
           <MenuItems><Link active={props.facilities == true} href="/facilitiesAmenities">Facilities & Amenities</Link></MenuItems>
           <MenuItems><Link active={props.room == true} href="/roomRate">Rooms & Rates</Link></MenuItems>
           <MenuItems><Link active={props.contact == true} href="/contactUs">Contact</Link></MenuItems>
           <MenuItems><Link active={props.about == true} href="/aboutUs">About Us</Link></MenuItems>
          
          <ProfileDrop
          display={dropDown}
          ></ProfileDrop>
           <Button href="/login"
           display={login}
           w='90px' 
           h='30px'
           style={{ scale: .9}}
           whileHover={{ scale: 1, backgroundColor: "#8F805F",
           border: "1px solid white", rotate: [0, 10, -10, 0, ], }}
           whileTap={{ scale: .7}}
           transition={{ duration: .4 }}
           >Log in</Button>
       </Menu>
       <image src="logo.png"></image>
      </Container>
    )
  }

export default Nav