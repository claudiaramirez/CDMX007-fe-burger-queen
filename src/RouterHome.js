import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './views/home';
import Pagar from './views/pagar';
import Navbar from './components/navbar/navbar';
//import TotalProducts from './components/total/total';
import Products from './components/products/products';



import './App.css';
function App() {
  return (
    <BrowserRouter>
        <Navbar title="icon home" />
        <Route path="/pagar" component={Pagar} />
        <Route exact path="/breakfast" component={Products} />
        <Route path="/hamburger" component={Products} />
        <Route path="/drinks" component={Products} />
        <Route path="/complements" component={Products} /> 
        <Route path="/" component={Navbar} />
        {/* <TotalProducts title="products" /> */}
    </BrowserRouter>
  );
}
export default App;