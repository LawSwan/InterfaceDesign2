import { useState } from 'react'
import ClickButton from './components/ClickButton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
    console.log('Button clicked')
  }

  return (
    <main className="app">
      <h1>Button Component Demo</h1>
      <p className="message">You have clicked the button {count} time{count !== 1 ? 's' : ''}.</p>
      <ClickButton onClick={handleClick} />
    </main>
  )
}

export default App
