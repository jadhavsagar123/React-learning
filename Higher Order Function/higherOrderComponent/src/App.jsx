import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Login from './Components/Login'
import Home from './Components/Home'
import {
  Routes,
  Route,
} from "react-router-dom";
import ProtectedRoute from './Components/PrivateRoute'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route
            exact
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
    {/* <Route path="/home" element={<Home/>}/> */}
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
