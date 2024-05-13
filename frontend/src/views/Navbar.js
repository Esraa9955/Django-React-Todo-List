import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="h">
        <img
          style={{ width: 100, height: 40, objectFit: "contain" }}
          src="https://i.imgur.com/juL1aAc.png"
          alt=""
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="h">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="h">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="h">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled">Disabled</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar
