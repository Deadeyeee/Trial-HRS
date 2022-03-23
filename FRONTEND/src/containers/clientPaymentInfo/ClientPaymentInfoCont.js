import React from 'react'
import { Container, PhotoBox } from './Styles'
import { Title } from '../../components/title/styles'
import { Button } from '../../components/button/styles';

const ClientPaymentInfoCont = () => {
  return (
    <Container>
        <Title
            padding='20px 40px 20px 40px'
            bg='#272727'
            family= 'raleway, sans-serif'
            color='white'
            weight='400'   
            size='35px'
            fStyle='Normal'
            margin='100px 0px 10px 0px'
            align='Center'
        >
            Upload Proof of Payment
        </Title>
        <PhotoBox>
        <Title
            padding='175px 200px 175px 200px'
            bg='white'
            family= 'raleway, sans-serif'
            color='#BFA698'
            weight='400'   
            size='25px'
            fStyle='Normal'
            
            align='Center'
        >
            No Image Uploaded
        </Title>
        </PhotoBox>
        <Button
                whileHover={{ backgroundColor: "#302B20", color: "white" }}
                w='200px'
                h='60px'
                textcolor="white"
                fam='playfair display'
                weight='-400'
                fontStyle='normal'
                radius="0px"
                border="1px solid #8F805F"
                margin='10px 0px 10px 0px'
                fontsize='16px'
                bg='#282626'
            >
                + Choose File
            </Button>
            <Title
            family= 'raleway, sans-serif'
            color='#BFA698'
            weight='400'   
            size='35px'
            fStyle='Italic'
            margin='10px 0px 10px 0px'
            align='Center'
        >
            or
        </Title>
        <Button
                whileHover={{ backgroundColor: "#302B20", color: "#A3987D" }}
                w='200px'
                h='60px'
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
            <Title
            padding='20px 100px 20px 100px'
            bg='#272727'
            family= 'raleway, sans-serif'
            color='white'
            weight='400'   
            size='30px'
            fStyle='Normal'
            margin='50px 0px 10px 0px'
            align='Center'
        >
            Payment Status
        </Title>
        <Title
            padding='20px 40px 20px 40px'
            family= 'raleway, sans-serif'
            color='#292929'
            weight='700'   
            size='24px'
            fStyle='Normal'
            margin='20px 0px 10px 0px'
            align='Center'
        >
            Confirmed
        </Title>
        <Title
            family= 'poppins, sans-serif'
            weight= '700'
            fStyle='Normal'
            size= '15px'
            color= '#ff4040'
            align='center' 
            margin='10px 0px 20px 0px'    
        >
            <b>***Please make your deposit. Three days before youre Check-In Date to confirm your reservation***</b>
        </Title>
    </Container>
  )
}

export default ClientPaymentInfoCont