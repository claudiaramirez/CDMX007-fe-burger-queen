import React from 'react';
const TotalProducts = (props) =>(
    <div className='total'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <ul class="nav-menu">
            <li className="nav-menu_total">Cantidad</li>
            <li className="nav-menu_total">Producto</li>
            <li className="nav-menu_total">Precio</li>
         </ul>
         <p>Total<span>$45</span></p>
         <a href="#">Cancelar</a>
         <a href="#">Confirmar orden</a>
    </div>
);

export default TotalProducts;