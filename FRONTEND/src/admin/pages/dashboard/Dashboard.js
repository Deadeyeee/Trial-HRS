import React, { useEffect } from 'react'
import DashboardContainer from '../../containers/dashboardContainer/DashboardContainer'
import SideBarNav from '../../containers/sideBar/SideBarNav'
import { ContainerInvisible } from '../../containers/sideBar/style'
import { Container } from './style'

const Dashboard = () => {
  useEffect(() => {
    document.title = "Admin | Dashboard"
  }, [])
  return (
    <Container>
      <ContainerInvisible></ContainerInvisible>
    <SideBarNav dashboard/>
    <DashboardContainer/>
</Container>
  )
}

export default Dashboard