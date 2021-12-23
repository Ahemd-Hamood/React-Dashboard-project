import React from 'react'
import styled from "styled-components";

import StatisticsInfo from './StatisticsInfo/StatisticsInfo'
import SalesChart from './SalesChart/SalesChart'
import Widgets from './Widgets/Widgets';


const HomeContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
`;

export default function Home() {
  return (
    <HomeContainer>

      <StatisticsInfo />
      <SalesChart title="Daily Sales - Analytics" />
      <Widgets />
      <SalesChart title="Best Month Sales" />

    </HomeContainer>
  )
}
