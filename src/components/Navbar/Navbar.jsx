import React from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <span className='text-uppercase   ls-1 fs-20'>book search app</span>
          </Link>
         
        </div>
        </div>
        
         
    </nav>
  )
}

export default Navbar