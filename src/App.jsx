import React from 'react'
import { Stopwatch } from './Stopwatch';
import { useStopwatch } from './Stopwatch';
import { useState } from 'react';
import timerIcon from "../src/assets/timer.svg"
import "./App.css"


const App = () => {
  //Custom Hook
  const [watch, setWatch] = useStopwatch()

  const handleIncrease = () => {
    watch.start(setWatch)
  }

  const handlePause = () => {
    watch.stop()
  }

  const handleReset = () => {
    watch.reset(setWatch)
  }
  return (
    <div className='container'>
<div className='timer-container'>
      <div className='timer-header'>
        <img src={timerIcon} className='timer-icon' alt="" />
        <div>Timer</div>
      </div>
        <div className='timer-display'>
          {
          watch.getTime()
      }
        </div>
      <div className='button-group'>
        <button onClick={handleIncrease} className='start'>Start</button>
        <button onClick={handlePause} className='pause'>Pause</button>
        <button onClick={handleReset} className='reset'>Reset</button>
      </div>
    </div>
    </div>
    
  )
}

export default App