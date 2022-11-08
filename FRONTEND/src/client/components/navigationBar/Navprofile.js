import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Logo, Container, MenuItems, Menu, Link, HamburgerMenu, MainMenu } from './styles';

import logo from '../../images/logo.png';
import { Button } from '../button/styles';
import Axios from 'axios';
import ProfileDrop from '../../containers/profileDrop/ProfileDrop';
import { apiKey } from '../../../apiKey';
import { Badge } from '@mui/material';


export const Navprofile = (props) => {


  Axios.defaults.withCredentials = true;
  const [login, setLogin] = useState(true);
  const [dropDown, setdropDown] = useState("flex");
  const [userName, setUserName] = useState("");

  const Logout = () => {
    Axios.delete(apiKey + "auth/Logout").then((response) => {
      window.location.reload();
    })
  }
  const [isOpen, setIsOpen] = useState(false);


  const [userInformation, setUserInformation] = useState([])
  const [inbox, setInbox] = useState([])
  const [messagesDb, setMessagesDb] = useState([])

  useEffect(() => {
    Axios.get(apiKey + 'auth/verify-token').then((result) => {
      Axios.get(apiKey + 'api/getAllGuest').then((guest) => {
        guest.data.map((item) => {
          if (result.data.id == item.user_id) {

            setUserInformation(item)
            Axios.get(apiKey + 'api/getAllDeleteConversation').then((deletedConversaiton) => {
              Axios.get(apiKey + 'api/getAllMessage').then((messageResult) => {
                setMessagesDb(messageResult.data.filter((obj1) => deletedConversaiton.data.filter((obj2) => obj2.message_id == obj1.id && obj2.delete_conversation_to == item.id).map((item) => item.message_id).includes(obj1.id) == false))

                Axios.get(apiKey + 'api/getAllConversation').then((result) => {
                  console.log("TEST1 :", result.data
                    .filter((obj) => obj.from_guest_id == item.id || obj.to_guest_id == item.id)
                    .filter((item2) => (
                      messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message_to_guest_id == item.id
                    )))
                  console.log("TEST2 :", result.data
                    .filter((obj) => obj.from_guest_id == item.id || obj.to_guest_id == item.id)
                    .filter((item2) => (
                      messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message_to_guest_id != item.id
                    )))
                  setInbox(result.data
                    .filter((obj) => obj.from_guest_id == item.id || obj.to_guest_id == item.id)
                    .filter((item2) => (
                      messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].message_to_guest_id == item.id
                      &&
                      messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].status == false
                      &&
                      deletedConversaiton.data.filter((obj1) => obj1.delete_conversation_to == item.id).map((obj2) => obj2.message_id)
                        .includes(
                          messageResult.data.filter((obj) => obj.conversation_id == item2.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0].id
                        ) == false
                    )))

                }).catch((err) => {
                  console.log(err)

                });
              }).catch((err) => {
                console.log(err)

              });
            }).catch((err) => {
              console.log(err)

            });

          }
        })
        console.log(guest.data)
      }).catch((err) => {
        console.log(err)

      });
    }).catch((err) => {
      console.log(err)
    });
  }, [])


  useLayoutEffect(() => {
    console.log()
    Axios.defaults.withCredentials = true;
    Axios.get(apiKey + "auth/verify-token").then((response) => {
      setLogin(false);
      setdropDown("inline-flex")
      // setUserName(response.data.userName.charAt(0).toUpperCase()+ response.data.userName.slice(1));

      Axios.get(apiKey + 'api/getAllGuest').then((result) => {
        setUserName(result.data.filter((obj) => obj.user.id == response.data.id).map((item) => item.firstName)[0].charAt(0).toUpperCase() + result.data.filter((obj) => obj.user.id == response.data.id).map((item) => item.firstName)[0].slice(1).toLowerCase())
      }).catch((err) => {
        console.log(err)
      });
    }).catch((e) => {
      if (e.response.data === "Unauthorized") {
        setdropDown("none");
      }
    })
  }, []);

  const variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -150, opacity: 0 },
  }

  return (
    <Container>
      <Menu>
        <Logo src={logo} />

        <HamburgerMenu onClick={
          () => setIsOpen(!isOpen)
        }>
          <span />
          <span />
          <span />
        </HamburgerMenu>

        <MainMenu isOpen={isOpen}

        >
          <MenuItems><Link active={props.home == true} href="/">Home</Link></MenuItems>
          <MenuItems><Link active={props.book == true} href="/booking">Booking</Link></MenuItems>
          <MenuItems><Link active={props.facilities == true} href="/facilitiesAmenities">Facilities & Amenities</Link></MenuItems>
          <MenuItems><Link active={props.room == true} href="/roomRate">Rooms & Rates</Link></MenuItems>
          <MenuItems><Link active={props.contact == true} href="/contactUs">Contact</Link></MenuItems>
          <MenuItems><Link active={props.about == true} href="/aboutUs">About Us</Link></MenuItems>

          <image src="logo.png"></image>
          <Badge badgeContent={inbox.length != 0 ? inbox.length : 0} color="warning">
            <ProfileDrop
              display={dropDown}
              userName={userName != '' ? userName : ''}
              Logout={Logout}
            ></ProfileDrop>
          </Badge>

          
        </MainMenu>
      </Menu>
    </Container >
  )
}

export default Navprofile