import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = (props) =>(
    <header className='header'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <nav>
          <div class="nav-wrapper">
          <NavLink className="" to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>
            <ul  id="nav-mobile" class="right hide-on-med-and-down nav-menu" >
              <li><NavLink className="nav-menu_link" activeClassName="activate" exact to="/breakfast">Desayuno</NavLink></li>
              <li><NavLink className="nav-menu_link" activeClassName="activate" to="/hamburger">Hamburguesas</NavLink></li>
              <li><NavLink className="nav-menu_link" activeClassName="activate" to="/drinks">Bebidas</NavLink></li>
              <li><NavLink className="nav-menu_link" activeClassName="activate" to="/complements">Complementos</NavLink></li>
            </ul>
          </div>
        </nav> 
    </header>
);
export default Navbar;