import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// import logo from './logo.svg';
import Home from './views/home';
import Pagar from './components/pagar';
import Navbar from './components/navbar';
import TotalProducts from './components/total';
import Products from './components/products';

import './App.css';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navbar title="icon home" />
        <TotalProducts title="products" />
        {/* <Route exact path="/" render={() => <Home title="Hola desde home" /> } /> */}
        <Route exact path="/" component={Home} />
        <Route path="/pagar" component={Pagar} />
        <Route path="/breakfast" component={Products} />
        <Route path="/hamburger" component={Products} />
        <Route path="/drinks" component={Products} />
        <Route path="/complements" component={Products} /> 
       {/* </header>  */}
    </div>
    </BrowserRouter>
  );
}
export default App;