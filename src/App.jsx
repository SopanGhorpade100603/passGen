import { useState } from 'react'
import './App.css'
import PasswordGenerator from './assets/PasswordGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <PasswordGenerator />
   </>
  )
}

export default App
