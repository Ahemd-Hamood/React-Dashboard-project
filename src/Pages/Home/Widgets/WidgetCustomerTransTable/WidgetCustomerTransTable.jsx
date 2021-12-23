import React from 'react'
import CustomerTransRowItem from './components/CustomerTransRowItem'
import styled from "styled-components";
import "./WidgetCustomerTransTable.css"

import { CustomerTransactionList } from "../../../../Repository/Repository"

export default function WidgetCustomerTransTable() {

  const WidgetCustomerTransTbl = styled.div`
    flex: 2;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
  `;

  const TransTableContainer = styled.div`
    width: 100%;
    height: 370px;
    overflow-y: auto;
  `;



  const StatusBtn = ({ status }) => {
    return <button className={'statusBtn ' + status}> {status} </button>
  }

  return (
    <WidgetCustomerTransTbl>
      <h3 className='widget-title'>Latest Customer Transactions</h3>
      <TransTableContainer>

        <table className='CustomerTrans-table'>
          <thead>
            <tr className="trans-headers-content">
              <th className="trans-header-title" style={{ width: "35%" }}>Customer</th>
              <th className="trans-header-title" style={{ paddingLeft: "18px" }}>Date</th>
              <th className="trans-header-title">Amount</th>
              <th className="trans-header-title" style={{ width: "30%", textAlign: "center" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* ----------------------------------------------------------- */}
            {
              CustomerTransactionList.map(prop => (
                <CustomerTransRowItem
                  Key={prop.id}
                  customerName={prop.customerName}
                  imgUrl={prop.imgUrl}
                  date={prop.date}
                  amount={prop.amount}
                  statusType={<StatusBtn status={prop.statusType} />}
                />
              ))
            }
          </tbody>
        </table>

      </TransTableContainer>
    </WidgetCustomerTransTbl>
  )
}
