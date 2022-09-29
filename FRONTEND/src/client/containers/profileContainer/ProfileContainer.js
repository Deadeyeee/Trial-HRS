import Axios from 'axios'
import React, { useEffect, useLayoutEffect } from 'react'
import { HorizontalLine } from '../../components/horizontalLine/HorizontalLine'
import { Title } from '../../components/title/styles'
import { Link, MenuItems, Container, HeadContainer, MainContainer, Navigations, } from './style'

const ProfileContainer = (props) => {
  useEffect(() => {
    document.title = "Profile"
  }, [])

  useLayoutEffect(() => {
    Axios.get("http://localhost:3001/auth/verify-token").then((response1) => {
      console.log(response1.data.id)
      
      Axios.get("http://localhost:3001/api/getAllGuest/").then((response2) =>{
        console.log(response1.data)
        for (let i = 0; i < response2.data.length; i++) {
          if (response2.data[i].user_id == response1.data.id) {}
        }
      }).catch((err)=>{
        console.log(err)
      })
    }).catch((err)=>{
      console.log(err)
    });
}, );
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
                >Pedro Juan</Title>
            </HeadContainer>
            <Navigations>
            
            <MenuItems><Link active={props.profile == true} href="/client/profile">Profile</Link></MenuItems>
           <MenuItems><Link active={props.book == true} href="/client/bookingInfo">Booking</Link></MenuItems>
           <MenuItems><Link active={props.payment == true} href="/client/paymentInfo">Payments</Link></MenuItems>
           <MenuItems><Link active={props.message == true} href="/client/messages">Messages</Link></MenuItems>
            </Navigations>
            <HorizontalLine w='50%'></HorizontalLine>
        </MainContainer>
    </Container>
  )
}

export default ProfileContainer