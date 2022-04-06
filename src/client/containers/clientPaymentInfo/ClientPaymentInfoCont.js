import React from 'react'
import { Container, PhotoBox } from './Styles'
import { Title } from '../../components/title/styles'
import { Button, FormButton } from '../../components/button/styles';
import { Status, StatusContainer } from '../clientBookingInfo/Styles';

const ClientPaymentInfoCont = () => {
    return (
        <Container>
             <Title
                padding='15px 80px 15px 80px'
                bg='#272727'
                family='raleway, sans-serif'
                color='white'
                weight='400'
                size='25px'
                fStyle='Normal'
                margin='50px 0px 10px 0px'
                align='Center'
            >
                Payment Status
            </Title>
            <StatusContainer>
                <Status
                bg='gray'
                >

                </Status>
                <Title
                family='raleway, sans-serif'
                color='#292929'
                weight='700'
                size='24px'
                fStyle='Normal'
                align='Center'
            >
                Pending
            </Title>
            </StatusContainer>
            <Title
                family='poppins, sans-serif'
                weight='700'
                fStyle='Normal'
                size='15px'
                color='#ff4040'
                align='center'
                margin='10px 0px 20px 0px'
            >
                <b>***Please make your deposit. Three days before your Check-In Date to confirm your reservation***</b>
            </Title>
            <Title
                padding='15px 80px 15px 80px'
                bg='#272727'
                family='raleway, sans-serif'
                color='white'
                weight='400'
                size='25px'
                fStyle='Normal'
                margin='50px 0px 10px 0px'
                align='Center'
            >
                Upload Proof of Payment
            </Title>
            <PhotoBox>
                <Title
                    bg='white'
                    family='raleway, sans-serif'
                    color='#BFA698'
                    weight='400'
                    size='25px'
                    fStyle='Normal'

                    align='Center'
                >
                    No Image Uploaded
                </Title>
            </PhotoBox>
            <FormButton
                w='210px'
                h='30px'
                border="none"
                margin='20px auto'
                fontsize='16px'
                type='file'
                textcolor='black'
            >
                
            </FormButton>
            <Button
                whileHover={{ backgroundColor: "#302B20", color: "#A3987D" }}
                w='150px'
                h='40px'
                textcolor='#A3987D'
                fam='raleway'
                weight='-400'
                fontStyle='normal'
                radius="0px"
                border="1px solid #9E9174"
                margin='10px 0px 10px 0px'
                fontsize='16px'
                bg='#F2F2F2'
            >
                Send
            </Button>
            <Title
                family='arial'
                color='black'
                weight='400'
                size='25px'
                fStyle='Italic'
                align='Center'
            >
                or
            </Title>
            <Button
                whileHover={{ backgroundColor: "#302B20", color: "#A3987D" }}
                w='150px'
                h='40px'
                textcolor='#A3987D'
                fam='raleway'
                weight='-400'
                fontStyle='normal'
                radius="0px"
                border="1px solid #9E9174"
                margin='10px 0px 10px 0px'
                fontsize='16px'
                bg='#F2F2F2'
            >
                Email us
            </Button>
           
        </Container>
    )
}

export default ClientPaymentInfoCont