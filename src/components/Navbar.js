import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/korisnici" className="nav-link">Korisnici</Link></li>
                <li className="nav-item"><Link to="/dodajnovi" className="nav-link">Dodaj novi</Link></li>
            </ul>
            
        </div>
        </nav>
    )
}

export default Navbar
