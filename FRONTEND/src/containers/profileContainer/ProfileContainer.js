import React from 'react'
import { Title } from '../../components/title/styles'
import { Link, MenuItems, Container, HeadContainer, MainContainer, Navigations, } from './style'

const ProfileContainer = (props) => {
  return (
    <Container>
        <MainContainer>
            <HeadContainer>
                <Title
                color='white'
                family='georgia'
                fStyle='normal'
                border='1px solid white'
                padding='10px 40px'
                borderRadius='5px'
                weight='normal'
                >Juan Felipe</Title>
            </HeadContainer>
            <Navigations>
            
            <MenuItems><Link active={props.profile == true} href="/">Profile</Link></MenuItems>
           <MenuItems><Link active={props.book == true} href="/booking">Booking</Link></MenuItems>
           <MenuItems><Link active={props.payment == true} href="/facilitiesAmenities">Payments</Link></MenuItems>
           <MenuItems><Link active={props.message == true} href="/roomRate">Messages</Link></MenuItems>
            </Navigations>
        </MainContainer>
    </Container>
  )
}

export default ProfileContainer