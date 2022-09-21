import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import logo from '../../images/logo.png';
import { Title } from "../../components/title/styles"
import { Button, FormButton } from "../../components/button/styles"
import {  ResetPasswordSuccessHolder, ResetPasswordSuccessPhoto, Logo } from "./Styles"

const ResetPasswordSuccessCont = () => {
  return (
    <ResetPasswordSuccessHolder>   
            <a href="/">
                <Logo
                src={logo}
                ></Logo>

            </a>
        <Title
                family='Playfair Display'
                weight='100'
                margin='0px 0px 0px 0px'
                fStyle='Bold'
                w='450px'
            >
                Reset password success!
            </Title>
            <FormButton
                whileHover={{
                    scale: 1.1, backgroundColor: "#8F805F",
                    border: "2px solid #2E2E2E", color: "rgb(255, 255, 255)"
                    }}
                whileTap={{ scale: 1 }}
                type="submit"
                w='190px'
                h='30px'
                margin='20px 0 30px 0'
                textcolor='black'
                radius='5px'
                weight='bold'
                value='Continue'
                onClick={()=>{window.location.href=''}}
            ></FormButton>
    </ResetPasswordSuccessHolder>
  )
}

export default ResetPasswordSuccessCont