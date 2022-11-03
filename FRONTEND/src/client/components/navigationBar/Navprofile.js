import React,{useEffect, useLayoutEffect, useState} from 'react';
import { Logo, Container, MenuItems, Menu, Link } from './styles';
import logo from '../../images/logo.png';
import { Button } from '../button/styles';
import Axios from 'axios';
import ProfileDrop from '../../containers/profileDrop/ProfileDrop';
import { apiKey } from '../../../apiKey';


export const Navprofile = (props) => {
  

  Axios.defaults.withCredentials = true;
  const [login, setLogin] = useState(true);
  const [dropDown, setdropDown] = useState("flex");
  const [userName, setUserName] = useState("");

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
      // setUserName(response.data.userName.charAt(0).toUpperCase()+ response.data.userName.slice(1));
      
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
           <MenuItems><Link active={props.home == true} href="/">Home</Link></MenuItems>
           <MenuItems><Link active={props.book == true} href="/booking">Booking</Link></MenuItems>
           <MenuItems><Link active={props.facilities == true} href="/facilitiesAmenities">Facilities & Amenities</Link></MenuItems>
           <MenuItems><Link active={props.room == true} href="/roomRate">Rooms & Rates</Link></MenuItems>
           <MenuItems><Link active={props.contact == true} href="/contactUs">Contact</Link></MenuItems>
           <MenuItems><Link active={props.about == true} href="/aboutUs">About Us</Link></MenuItems>
          
       </Menu>
       <image src="logo.png"></image>
          <ProfileDrop
          display={dropDown}
          userName={userName != '' ? userName:''}
          Logout={Logout}
          ></ProfileDrop>
      </Container>
    )
  }

export default Navprofile