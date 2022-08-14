import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  let [value, setValue] = useState(0)
  let [name, setName] = useState("sagar")
  let [inp, setInp] = useState("")
  



function increment(){
value++
setValue(value)
}

function Decrement(){
  value--
  setValue(value) 
}

function incrementBy10(){
  value+=10
  setValue(value)
  }
  
  function DecrementBy10(){
    value-=10
    setValue(value) 
  }

  function toUpper(){
   name= name.toUpperCase()
    setName(name)
  }

   function getInputValue(event) {


const inp=event.target.value
setInp(inp)
  }

  function toUpper1(){
    inp=inp.toUpperCase()
setInp(inp)
   }
 


 

  return (
    <div className="App">
        <h1>{value}</h1>
        <h1>{name}</h1>
        <h1>{inp}</h1>
     <button onClick={increment}>increment</button>
  <button onClick={Decrement}>Decrement</button>
  <button onClick={incrementBy10}>incrementBy10</button>
  <button onClick={DecrementBy10}>DecrementBy10</button>
        <input type="text" onChange={getInputValue} />
  <button onClick={toUpper}>toUpper</button>
  <button onClick={toUpper1}>toUpper1</button>
    </div>
  )
}

export default App
