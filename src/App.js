import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//import logo from './logo.svg';
import Home from './components/home';
import Pagar from './components/pagar';
import Navbar from './components/navbar';
import Breakfast from './components/breakfast';
import Hamburger from './components/hamburger';
import Drinks from './components/drinks';
import Complements from './components/complements';
import TotalProducts from './components/total';

import './App.css';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navbar title="icon home" />
        <TotalProducts title="icon home" />
        <Route exact path="/" render={() => <Home title="Hola desde home" /> } />
        <Route path="/pagar" component={Pagar} />
        <Route path="/breakfast" component={Breakfast} />
        <Route path="/hamburger" component={Hamburger} />
        <Route path="/drinks" component={Drinks} />
        <Route path="/complements" component={Complements} />
      {/* </header> */}
    </div>
    </BrowserRouter>
  );
}
export default App;
