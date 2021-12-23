import React from 'react'
import styled from "styled-components";
import WidgetEmployeeList from './WidgetEmployeeList/WidgetEmployeeList';
import WidgetCustomerTransTable from './WidgetCustomerTransTable/WidgetCustomerTransTable';

const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;

export default function Widgets() {
  return (
    <HomeWidgets>
       <WidgetEmployeeList />
       <WidgetCustomerTransTable />
    </HomeWidgets>
  )
}
