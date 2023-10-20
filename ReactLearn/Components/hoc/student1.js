import React, { useState } from 'react'

import Mainhos from './Mainhos'

const  Sudent1 = (props) => {

  console.log("PROPS", props);

  return (
    <div> 
        <h3>{props.num}</h3>
        <button onClick={props.handleEvent}> count increasedd </button>
    </div>
  )
}

export default  Mainhos(Sudent1)