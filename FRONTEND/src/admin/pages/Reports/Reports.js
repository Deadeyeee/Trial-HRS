import React, { useEffect } from 'react'
import { ReportContainer } from '../../containers/reportContainer/ReportContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const Reports = () => {
    useEffect(() => {
        document.title = "Admin | Reports"
      }, [])
    return (
        <Container>
            <ContainerInvisible></ContainerInvisible>
            <SideBarNav report />
            <ReportContainer/>
        </Container>
    )
}

export default Reports