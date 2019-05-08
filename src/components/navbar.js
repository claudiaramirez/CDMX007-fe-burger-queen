import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) =>(
    <div className='nav-container'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <nav>
        <NavLink className="nav-menu_link" to="/"><img alt="logo" /></NavLink>
          <ul class="nav-menu">
            <li><NavLink className="nav-menu_link" activeClassName="activate" exact to="/breakfast">Desayuno</NavLink></li>
            <li><NavLink className="nav-menu_link" activeClassName="activate" to="/hamburger">Hamburguesas</NavLink></li>
            <li><NavLink className="nav-menu_link" activeClassName="activate" to="/drinks">Bebidas</NavLink></li>
            <li><NavLink className="nav-menu_link" activeClassName="activate" to="/complements">Complementos</NavLink></li>
         </ul>
        </nav>
    </div>
);
export default Navbar;