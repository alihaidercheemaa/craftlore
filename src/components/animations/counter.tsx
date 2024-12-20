'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'


type CounterProps = {
  counterValues: { name: string, value: number }[]
}


export const Counter = ({counterValues}:CounterProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,  
  })

  return (
    <div ref={ref} className="grid grid-cols-4 gap-10">
      {inView && counterValues.map((value, index) => (
        <div className="col-span-4 lg:col-span-1 lg:container grid justify-center text-center" key={index}>
          <CountUp end={value.value} className="text-secondary font-montserrat text-2xl" />
          <p className="text-primary font-montserrat text-2xl">{value.name}</p>
        </div>
      ))}
    </div>
  )
}
