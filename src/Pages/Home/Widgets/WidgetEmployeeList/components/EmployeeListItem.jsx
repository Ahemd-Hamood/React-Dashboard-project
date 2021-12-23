import React from 'react'

import { Visibility } from '@material-ui/icons';

export default function EmployeeListItem({ EmployeeName, EmployeeTitle, imgUrl }) {
  return (
    <li className="Employee-list-item">
      <img src={`/img/Employees/${imgUrl}`} alt="" className="Employee-image" />
      <section className="Employee-content-info">
        <p className="Employee-name"> {EmployeeName} </p>
        <p className="Employee-title"> {EmployeeTitle} </p>
      </section>
      <button className="ItemBtn">
        <Visibility className="icon" />
        View Info
      </button>
    </li>
  )
}
