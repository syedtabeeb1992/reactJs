import React, { useState } from 'react'

const Mainhos = (Studentz) => {

    const HigherorderComponentInner  = () =>{
        const [num, setNum] = useState(0)
        const handleEvent = ()=>{
            setNum(num+10)
        }

        return <Studentz num={num}  handleEvent={handleEvent}/>

    }

  return (
     HigherorderComponentInner
  )
}

export default Mainhos