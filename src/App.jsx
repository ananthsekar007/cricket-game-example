import { useState } from 'react'
import './App.css'
import CricketComponent from './components/CricketComponent/CricketComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CricketComponent />
  )
}

export default App
