import React from 'react'
import StatsInfoItem from './components/StatsInfoItem'
import "./StatisticsInfo.css"
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'

let _ArrowUpward = <ArrowUpward className='statIcon' />
let _ArrowDownward = <ArrowDownward className='statIcon negative' />

export default function StatisticsInfo() {
  return (
    <div className='statInfo-container'>
      <StatsInfoItem icon={_ArrowUpward} title="Cost" money="$1,563" rate="-11.5" />
      <StatsInfoItem icon={_ArrowDownward} title="Revenue" money="$2,563" rate="-3.5" />
      <StatsInfoItem icon={_ArrowDownward} title="Sales" money="$5,115" rate="-1.5" />
    </div>
  )
}
