import React, { useState } from 'react'

import Mainhos from './Mainhos'
const Student2 = (props) => {
return (
  <div> 
      <h3>{props.num}</h3>
      <button onClick={props.handleEvent}> count increase </button>
  </div>
)
}

export default Mainhos(Student2)