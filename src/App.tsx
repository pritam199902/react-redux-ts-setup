import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseCounter as useCounter } from './counter.hook'

function App() {

  const counterManager = useCounter()


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>{counterManager.is_loading ? "Loading..." : "My App"}</h2>
      <div className="card">
        <button disabled={counterManager.is_loading} onClick={counterManager.handleIncrement}>
          count is {counterManager.counter}
        </button>

      </div>

    </div>
  )
}

export default App
