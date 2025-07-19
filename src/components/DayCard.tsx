// import React from 'react'
import TimeCard from './TimeCard'

const DayCard = ({data}:any) => {
    const {day,activities} = data;

  return (
    <div className="mt-5">
      <h2 className="font-medium text-lg">Day {day}</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {activities.map((timeData:any) => {
            return <TimeCard timeData={timeData}/>
        })}

       
       

     
      </div>
    </div>
  )
}

export default DayCard