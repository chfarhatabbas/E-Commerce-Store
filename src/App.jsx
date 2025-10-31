import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Routers from './Routers/Routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  )
}

export default App
