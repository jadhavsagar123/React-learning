import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
           <Link className="nav-link active" to="/"> Home </Link>
          </li>
      
      <li className="nav-item">
           <Link className="nav-link active" to="/login"> Login </Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link active" to="/signup"> Signup </Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link active" to="/table"> Table </Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link active" to="/table2"> Table2 </Link>
          </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <form className="d-flex offset-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar

