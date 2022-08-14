import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Signup from "./Components/Signup";
import Home from './Components/Home';
import Navbar from './Components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
       <Route path="/home" element={<Home />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
      
    </div>
  )
}

export default App
