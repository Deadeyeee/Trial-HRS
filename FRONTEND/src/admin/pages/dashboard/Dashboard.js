import React from 'react'
import DashboardContainer from '../../containers/dashboardContainer/DashboardContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const Dashboard = () => {
  return (
    <Container>
      <ContainerInvisible></ContainerInvisible>
    <SideBarNav/>
    <DashboardContainer/>
</Container>
  )
}

export default Dashboard