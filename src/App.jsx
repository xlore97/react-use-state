import { useState } from 'react'
import './App.css'
import languages from './components/languages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Learn Web Development</h1>

        <div className="buttons">

        </div>
        <div className="card">

        </div>
      </div>

    </>
  )
}

export default App
