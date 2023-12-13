import React from 'react'
import Closures from './closures/Closures'
import EventLoop from './eventloop/EventLoop'
import Promises from './promise/Promises'
import Hoisting from './hoisting/Hoisting'
import Asyncawait from './asyncawait/Asyncawait'
import Playground from '../react/Playground'
import Currying from './currying/Currying'
import Throttling from './throttling/Throttling'
import Debouncing from '../debouncing/Debouncing'

const JavascriptMain = () => {
  return (
    <div className="">
      <h1>JAVASCRIPTs</h1>
        <Closures/>
        <EventLoop/>
        <Promises/>
        <Hoisting/>
        <Asyncawait/>
        <Playground/>
        <Currying/>
        <Throttling/>
        <Debouncing/>
    </div>
  )
}

export default JavascriptMain