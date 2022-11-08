import { Badge } from '@mui/material'
import Axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { apiKey } from '../../../apiKey'
import { HorizontalLine } from '../../components/horizontalLine/HorizontalLine'
import { Title } from '../../components/title/styles'
import { Link, MenuItems, Container, HeadContainer, MainContainer, Navigations, } from './style'

const ProfileContainer = (props) => {
  useEffect(() => {
    document.title = "Profile"
  }, [])

  Axios.defaults.withCredentials = true;
  const [getUser, setGetUser] = useState([]);
  useLayoutEffect(() => {
    Axios.get(apiKey + "auth/verify-token").then((response1) => {

      if (response1.data.role == 'ADMIN' || response1.data.role == 'STAFF') {
        window.location = '/admin'
      }
      else {
        Axios.get(apiKey + "api/getAllGuest/").then((response2) => {
          console.log(response1.data)
          for (let i = 0; i < response2.data.length; i++) {
            if (response2.data[i].user_id == response1.data.id) {
              setGetUser(response2.data[i]);
            }
          }
        }).catch((err) => {
          console.log(err)
        })
      }

    }).catch((err) => {
      console.log(err)
      window.location = '/login'

    });

  }, []);


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


  return (
    <Container>
      <MainContainer>
        <HeadContainer>
          <Title
            color='white'
            family='Georgia'
            fStyle='normal'
            border='1px solid white'
            padding='10px 40px'
            borderRadius='5px'
            weight='normal'
          >{getUser.length != 0 ? getUser.firstName.toLowerCase() + " " + getUser.lastName.toLowerCase() : ""}</Title>
        </HeadContainer>
        <Navigations>

          <MenuItems><Link active={props.profile == true} href="/client/profile">Profile</Link></MenuItems>
          <MenuItems><Link active={props.book == true} href="/client/bookingInfo">Booking</Link></MenuItems>
          <MenuItems><Link active={props.payment == true} href="/client/paymentInfo">Payments</Link></MenuItems>
          <Badge badgeContent={inbox.length != 0 && props.message != true ? inbox.length : 0} color="warning">
            <MenuItems><Link active={props.message == true} href="/client/messages">Messages</Link></MenuItems>
        </Badge>
      </Navigations>
      <HorizontalLine w='50%'></HorizontalLine>
    </MainContainer>
    </Container >
  )
}

export default ProfileContainer