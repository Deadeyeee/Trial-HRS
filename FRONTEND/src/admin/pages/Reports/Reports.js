import axios from 'axios'
import React, { useEffect } from 'react'
import { apiKey } from '../../../apiKey'
import { ReportContainer } from '../../containers/reportContainer/ReportContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const Reports = () => {
    useEffect(() => {
        document.title = "Admin | Reports"
    }, [])
    useEffect(() => {
        axios.get(apiKey + "auth/verify-token").then((result) => {
            if (result.data.role != 'ADMIN') {
                window.location.href = '/admin/dashboard'
            }
        }).catch((err) => {
            window.location.href = '/'
        });

        
    }, [])
    return (
        <Container>
            <ContainerInvisible></ContainerInvisible>
            <SideBarNav report />
            <ReportContainer />
        </Container>
    )
}

export default Reports