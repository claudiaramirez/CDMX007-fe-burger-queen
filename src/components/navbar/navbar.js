import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar = (props) =>(
    <header className='header'>
        <div  className="logo">
          <NavLink  to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>
        </div>
        <nav>
            <div className="menu">
              <ul className="items">
                <li className="item-menu"><NavLink className="nav-menu_link" activeClassName="activate" exact to="/breakfast">Desayuno</NavLink></li>
                <li className="item-menu"><NavLink className="nav-menu_link" activeClassName="activate" to="/hamburger">Hamburguesas</NavLink></li>
                <li className="item-menu"><NavLink className="nav-menu_link" activeClassName="activate" to="/drinks">Bebidas</NavLink></li>
                <li className="item-menu"><NavLink className="nav-menu_link" activeClassName="activate" to="/complements">Complementos</NavLink></li>
              </ul>
            </div>
        </nav> 
    </header>
);
export default Navbar;