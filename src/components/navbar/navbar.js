//import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import fire from '../../config/Fire';
import React, { Component } from 'react';

// const Navbar = (props) =>(
//     <header className='header'>
//         <div  className="logo">
//           <NavLink  to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>
//         </div>
//         <nav>
//             <div className="menu">
//               <ul className="items">
//                 <li className="item-menu"><NavLink className="nav-menu_link" activeClassName="activate" exact to="/breakfast">Desayuno</NavLink></li>
//                 <li className="item-menu"><NavLink className="nav-menu_link" activeClassName="activate" to="/hamburger">Hamburguesas</NavLink></li>
//                 <li className="item-menu"><NavLink className="nav-menu_link" activeClassName="activate" to="/drinks">Bebidas</NavLink></li>
//                 <li className="item-menu"><NavLink className="nav-menu_link" activeClassName="activate" to="/complements">Complementos</NavLink></li>
//               </ul>
//             </div>
//         </nav> 
//     </header>
// );

// export default Navbar;

class Navbar extends Component {
  constructor(props) {
      super(props);
      this.logout = this.logout.bind(this);
  }
  logout() {
      fire.auth().signOut();
  }
  render() {
      return (
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
                 <li className="item-menu"><NavLink className="nav-menu_link logout"> <a onClick={this.logout}>Cerrar Sesión</a></NavLink></li>                   
                 
               </ul>
             </div>
         </nav> 
     </header>
      )
  }
}

export default Navbar;