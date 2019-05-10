import React from 'react';
import './total.css';
const TotalProducts = (props) =>(
    <div className='total'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <ul class="total-description">
            <li className="nav-menu_total"><span class="total-title">Cantidad</span></li>
            <li className="nav-menu_total"><span class="total-title">Producto</span></li>
            <li className="nav-menu_total"> <span class="total-title">Precio</span></li>
         </ul>
         <p>Total<span>$45</span></p>
         <div class="buttons-order">
          <a class="btn">Cancelar</a>
          <a class="waves-effect waves-light btn">Confirmar</a>
         </div>
        
        
    </div>
);

export default TotalProducts;