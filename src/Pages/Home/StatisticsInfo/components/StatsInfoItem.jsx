import React from 'react'

export default function StatsInfoItem({ icon, title, money, rate }) {
  return (
    <div className="statInfo-item-container">
      <h3 className='statInfo-title'> {title} </h3>
      <div className="statInfo-money-content">
        <span className="money-text">{money}</span>
        <span className="Rate-text-content">
          {rate} {icon}
        </span>
      </div>
      <h3 className="statInfo-sub">
        Compared to Last Month
      </h3>
    </div>
  )
}
