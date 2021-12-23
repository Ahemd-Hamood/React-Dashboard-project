import React from 'react'
import "./SimpleChartComp.css"
import { LineChart, Line, XAxis ,CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function SimpleChartComp({ title, data, dataKey, enableGrid }) {
  return (
    <div className='lineChart-container'>

      <h2 className="lineChart-title">
        {title}
      </h2>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#30336b' />
          {/* ## Print each name from data Jan, Feb, .. on X axis and color them using stroke ## */}
          {/* <YAxis dataKey="amount" stroke='#636e72' />  */}
          {/* ## Print each amount data 1000, 2000, .. on y axis and color them using stroke ## */}
          <Line type="monotone" dataKey={dataKey} stroke='#30336b' />
          <Tooltip />
          {/* <Legend /> */}
          {enableGrid && <CartesianGrid stroke='#b2bec3' strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}
