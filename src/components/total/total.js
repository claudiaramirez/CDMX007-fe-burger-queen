import React from 'react';
import './total.css';

const TotalProducts = (props) =>(
    <div className='total'>
          <ul class="total-description">
            <li className="nav-menu_total"><span class="total-title">Cantidad</span></li>
            <li className="nav-menu_total"><span class="total-title">Producto</span></li>
            <li className="nav-menu_total"> <span class="total-title">Precio</span></li>
         </ul>
         <div className="list-products">
            
         </div>
         <div className="total-products">
            <p>Total<span> $45</span></p>
         </div>
         <div className="buttons-order">
          <a className="btn-cancel">Cancelar</a>
          <a className="btn-send">Confirmar</a>
         </div> 
    </div>
);

export default TotalProducts;