import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
        <ul className="navbar-menu_lists">
            <li><Link to="/account"><FontAwesomeIcon icon={faUser} /></Link></li>
            <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
        </ul>
    </div>
  )
}

export default NavbarMenu