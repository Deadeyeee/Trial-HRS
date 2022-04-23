import React from 'react'
import DashboardContainer from '../../containers/frontDashboardContainer/DashboardContainer'
import SideBarNav from '../../containers/frontSideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/frontSideBar/style'
import { Container } from './style'

const FrontDashboard = () => {
  return (
    <Container>
      <ContainerInvisible></ContainerInvisible>
    <SideBarNav dashboard/>
    <DashboardContainer/>
</Container>
  )
}

export default FrontDashboard