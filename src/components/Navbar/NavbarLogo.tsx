import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLogo = () => {
  return (
    <div className="navbar-logo">
        <Link to="/collections">
            <h4>NetworkDetector</h4>
        </Link>
    </div>
  )
}

export default NavbarLogo