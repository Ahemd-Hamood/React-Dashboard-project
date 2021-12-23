import React from 'react'

import SimpleChartComp from '../../components/SimpleChart/SimpleChartComp';
import {SalesData} from "../../../Repository/Repository"

export default function SalesChart({title}) {


  return (
    <SimpleChartComp title={title} data={SalesData} dataKey="sales" enableGrid />
  )
}
