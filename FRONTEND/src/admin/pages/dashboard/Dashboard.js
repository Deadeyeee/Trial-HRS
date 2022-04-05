import React from 'react'
import DashboardContainer from '../../containers/dashboardContainer/DashboardContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { Container } from './style'

const Dashboard = () => {
  return (
    <Container>
    <SideBarNav/>
    <DashboardContainer/>
</Container>
  )
}

export default Dashboard