import React from 'react'
import styled from "styled-components";
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'
import "./TopNavbar.css"

export default function TopNavbar() {

  const TopNavbarContentWrapper = styled.div`
    height: 100%;
    padding: 0px 50px;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <TopNavbarContentWrapper>
      <LeftSection />
      <RightSection />
    </TopNavbarContentWrapper>
  )
}
