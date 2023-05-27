import React from "react";
import "./Header.css";
import {NavLink, Route, Routes} from 'react-router-dom'
function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <h1>ALEN KALAČ</h1>
        </div>
        <div className="header-links">
                <li className='nav-li'><NavLink className='nav-link' activeClassName={({isActive}) => (isActive ? 'active' : '')} to = "/">Home</NavLink></li>    {/* same page - first page */ }
                <li className='nav-li'><NavLink className='nav-link' to= "/about">About</NavLink></li>   {/* short description about me */ }
                <li className='nav-li'><NavLink className='nav-link' to= "/works">Works</NavLink></li>   {/* my project */ }
                <li className='nav-li'><NavLink className='nav-link' to= "/contact">Contact</NavLink></li> {/* like a footer section */ }
        </div>
      </header>
    </>
  );
}

export default Header;
