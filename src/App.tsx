import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseCounter as useCounter } from './counter.hook'

function App() {

  const counterManager = useCounter()


  return (
    <div className="App">
      <h2>{counterManager.is_loading ? "Loading..." : `Counter: ${counterManager.counter}`}</h2>
      <div className="card">
        <button disabled={counterManager.is_loading} onClick={counterManager.handleIncrement}>
          increment
        </button>
        <button disabled={counterManager.is_loading} onClick={counterManager.handleDecrement}>
          decrement
        </button>
      </div>

    </div>
  )
}

export default App
