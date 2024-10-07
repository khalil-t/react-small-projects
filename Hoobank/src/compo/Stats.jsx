import React from 'react'
import "./Stats.css"
import { stats } from "../constant";
const Stats = () => {
  return (
    <div className='all'>


{
 stats.map((stats)=>{

return(
<div className={stats.id=="stats-2" ? "letousp" : "letous"}>

<p className='subtitle'>
{stats.value}
</p>
<h1 className='title'>
{stats.title}
</h1>
</div>

)
 }) 
}


    </div>
  )
}

export default Stats