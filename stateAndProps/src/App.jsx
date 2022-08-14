import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './compnents/Header'
import SignUp from './compnents/SignUp'
import SignIn from './compnents/SignIn'
import Footer from './compnents/Footer'
import Datadisplay from './compnents/Datadisplay'


function App() {
  const [dataArray, setdataArray] = useState([
    {
    "_id": "6293848795dedf6e1a1dce75",
    "picture": "http://placehold.it/32x32",
    "name": "Lindsey Bridges",
    "gender": "female",
    "company": "ZOGAK"
    },
    {
    "_id": "629384876bbbebcde45b956d",
    "picture": "http://placehold.it/32x32",
    "name": "Alberta Cline",
    "gender": "female",
    "company": "EXTRO"
    },
    {
    "_id": "62938487cce8d5c0ea5f11af",
    "picture": "http://placehold.it/32x32",
    "name": "Latasha Leach",
    "gender": "female",
    "company": "GEOFORMA"
    },
    {
    "_id": "62938487fc7766c6f45efcc9",
    "picture": "http://placehold.it/32x32",
    "name": "Velez Bailey",
    "gender": "male",
    "company": "PHARMEX"
    },
    {
    "_id": "629384874fbf62a5d442077e",
    "picture": "http://placehold.it/32x32",
    "name": "Gaines Massey",
    "gender": "male",
    "company": "FROLIX"
    },
    {
    "_id": "6293848765025215e26586a5",
    "picture": "http://placehold.it/32x32",
    "name": "Weaver Zimmerman",
    "gender": "male",
    "company": "ACLIMA"
    },
    {
    "_id": "62938487a47a5a34f5f7aedc",
    "picture": "http://placehold.it/32x32",
    "name": "Nadia Brennan",
    "gender": "female",
    "company": "GEEKOLA"
    }
    ])

  return (
    <div>
    <Datadisplay array={dataArray}/>
    </div>
 
  )
}

export default App
