import { useState } from 'react'
import './App.css'
import MainPage from './page/MainPage/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage></MainPage>
    </>
  )
}

export default App
