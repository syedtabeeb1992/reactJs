import React from 'react'
import Closures from './closures/Closures'
import EventLoop from './eventloop/EventLoop'
import Promises from './promise/Promises'
import Hoisting from './hoisting/Hoisting'
import Asyncawait from './asyncawait/Asyncawait'
import Playground from '../react/Playground'

const JavascriptMain = () => {
  return (
    <div className="">
      <h1>JAVASCRIPT</h1>
        <Closures/>
        <EventLoop/>
        <Promises/>
        <Hoisting/>
        <Asyncawait/>
        <Playground/>
    </div>
  )
}

export default JavascriptMain