import React, { useEffect, useState } from 'react'
import VerificationEmailCont from '../../../containers/verificationEmail/VerificationEmailCont'
import { Container } from '../style'
import Background from '../../../components/background/Background'
import Axios from 'axios'

function VerificationEmail() {

    const [seconds, setSeconds] = useState(localStorage.getItem('timerEmail'));
    var timer;
    const [sent, setSent] = useState(false);

    useEffect(() => {
        if (seconds != 0) {
            setSent(true);
        }
        timer = setInterval(() => {
            setSeconds(seconds - 1);
            localStorage.setItem('timerEmail', seconds);
            if (seconds === 0) {
                clearInterval(timer);
            }
        }, 1000)
        if (seconds === 0 || seconds < 0) {
            localStorage.removeItem('timerEmail');
            clearInterval(timer);
            setSent(false);
        }
        return () => clearInterval(timer);
    })

    useEffect(() => {


        Axios.get('http://localhost:3001/api/getUsers/' + localStorage.getItem('id')).then((res) => {
            if (res.data == "") {

                localStorage.removeItem('id');
                localStorage.removeItem('userName');
                localStorage.removeItem('email');
                window.location = "/login"
            }
            if (res.data.emailVerified === true) {

                localStorage.removeItem('id');
                localStorage.removeItem('userName');
                localStorage.removeItem('email');
                window.location = "/login"
            }
            if (localStorage.getItem('id') == null) {
                window.location = "/login"
            }
            if (localStorage.getItem('timerEmail') == null) {
                Axios.post('http://localhost:3001/api/resendEmail', {
                    id: localStorage.getItem('id'),
                    email: localStorage.getItem('email'),
                    userName: localStorage.getItem('userName')
                }).then((res) => {
                    console.log(res.data);
                    localStorage.setItem('timerEmail', 60);
                    setSeconds(localStorage.getItem('timerEmail'));
                    setSent(true);
                }).catch((err) => {
                    console.log(err.res.data);
                });
            }
            console.log(res.data)
        }).catch((err) => {

            console.log(err.res.data)
        })
    }, [])
    const resend = () => {
        if (localStorage.getItem('id') == null) {
            localStorage.removeItem('id');
            localStorage.removeItem('userName');
            localStorage.removeItem('email');
            window.location = "/login"
        }
        Axios.post('http://localhost:3001/api/resendEmail', {
            id: localStorage.getItem('id'),
            email: localStorage.getItem('email'),
            userName: localStorage.getItem('userName')
        }).then((res) => {
            console.log(res.data);
            localStorage.setItem('timerEmail', 60);
            setSeconds(localStorage.getItem('timerEmail'));
            setSent(true);
        }).catch((err) => {
            console.log(err.res.data);
        });
    }
    return (
        <div>
            <Container>
                <VerificationEmailCont
                    whileHover={sent ? 'none' : {
                        scale: 1.1, backgroundColor: "#8F805F",
                        border: "2px solid #2E2E2E", color: "rgb(255, 255, 255)"
                    }}
                    onClick={resend}
                    title={sent ? 'Please wait to Resend' : 'Resend verification email'}
                    value={sent ? seconds : 'Resend verification email'}
                    disabled={sent ? true : false}
                >
                </VerificationEmailCont>
                <Background></Background>
            </Container>
        </div>
    )
}

export default VerificationEmail