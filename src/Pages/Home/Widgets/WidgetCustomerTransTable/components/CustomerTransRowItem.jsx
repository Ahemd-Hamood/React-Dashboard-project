import React from 'react'


export default function CustomerTransRowItem({ customerName, imgUrl, date, amount, statusType }) {
  return (
    <tr className="trans-tbl-row">
      <td className="trans-CustomerName-column">
        <img className='trans-customer-img' src={`/img/Employees/${imgUrl}`} alt="" />
        <span className="trans-customer-Name">{customerName}</span>
      </td>
      <td className="trans-Date-column"> {date} </td>
      <td className="trans-Amount-column">{amount}</td>
      <td className="trans-status-column">
         {statusType}
      </td>
    </tr>
  )
}
