import React from 'react'
import styled from "styled-components";
import "./WidgetEmployeeList.css" 
import EmployeeListItem from "./components/EmployeeListItem.jsx"

import { EmployeeList } from "../../../../Repository/Repository"


export default function WidgetEmployeeList() {

  const WidgetEmployeeListContainer = styled.div`
    flex: 1.0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    padding-right: 5px;
    margin-right: 25px;
  `;

  return (
    <WidgetEmployeeListContainer>
      <h3 className='widget-title'>New Joined Employees</h3>
      <div className='Employees-list'>
        <ul className="Employees-list-content">
          {
            EmployeeList.map(prop => (
              <EmployeeListItem
                Key={prop.id}
                EmployeeName={prop.EmployeeName}
                EmployeeTitle={prop.EmployeeTitle}
                imgUrl={prop.imgUrl}
              />
            ))
          }
        </ul>
      </div>
    </WidgetEmployeeListContainer>
  )
}




