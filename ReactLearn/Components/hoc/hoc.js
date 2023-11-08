import React from 'react'
import Sudent1 from './student1'

import Student2 from './Student2'
const Hoc = () => {
  return (
    <div>
        <h1>HOC</h1>
        <p><b>Higher Order component </b> is a function that takes a compoennt as an argument and return a new component that wraps the original component</p>
        <p>Basically HOC is a technique for re-using component logic</p>


        <Sudent1/>
        <Student2/>

        
    </div>
  )
}

export default Hoc
