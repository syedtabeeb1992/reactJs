import React from 'react'
import Closures from './closures/Closures'
import EventLoop from './eventloop/EventLoop'
import Promises from './promise/Promises'
import Hoisting from './hoisting/Hoisting'
import Asyncawait from './asyncawait/Asyncawait'

const JavascriptMain = () => {
  return (
    <div className="">
      <h1>JAVASCRIPT</h1>
        <Closures/>
        <EventLoop/>
        <Promises/>
        <Hoisting/>
        <Asyncawait/>
    </div>
  )
}

export default JavascriptMain