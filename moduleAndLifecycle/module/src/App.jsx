import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './compnents/Header'
import Footer from './compnents/Footer'
import Displaybook from './compnents/Displaybook'
import Displayproduct from './compnents/Displayproduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Header/>
<Displayproduct/>
{/* <Displaybook/> */}
<Footer/>
      
    </div>
  )
}

export default App
