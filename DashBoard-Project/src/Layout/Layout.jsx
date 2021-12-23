import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"

import SideNavbar from './SideNavbar/SideNavbar'
import TopNavbar from './TopNavbar/TopNavbar'
import styled from "styled-components";


const TopNavbarContainer = styled.div`
  background: #ffff;
  width: 100%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  position: sticky;
  top: 0; 
  z-index: 100;
`;

const MainContainer = styled.div`
  display: flex;
`;

const SideNavbarContainer = styled.div`
  flex: 1;
  background: #30336b;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const MainPage = styled.main`
  flex: 4;
`;

export default function Layout(prop) {
  return (
    <Router>
      <TopNavbarContainer>
        <TopNavbar />
      </TopNavbarContainer>

      <MainContainer>
        
        <SideNavbarContainer>
          <SideNavbar />
        </SideNavbarContainer>

        <MainPage>
          {prop.children}
        </MainPage>

      </MainContainer>
    </Router>
  )
}
