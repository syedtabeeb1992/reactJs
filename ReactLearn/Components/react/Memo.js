import React, { useState } from 'react'

const Memo = () => {

    const [counter1, setCounter1] = useState(0);

    const fastUpdate = () => {
            setCounter1(counter1+1)
    };

  return (
    <div>

        <button onClick={fastUpdate}>Fast updasstes {counter1}</button>
    </div>
  )
}

export default Memo