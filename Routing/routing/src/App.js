import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Login from './Components/Login'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Table from './Components/Table';
import Table2 from './Components/Table2'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/table" element={<Table/>}/>
    <Route path="/table2" element={<Table2/>}/>
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
