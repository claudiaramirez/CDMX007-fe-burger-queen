//import React from 'react';
import './products.css';
// const Products = (props) =>(
//     <div className='products'>
//         <h2>Productos</h2>
        
//     </div>
// );

// export default Products;

// fetch("http://localhost:3000/videos/1" ) 
//  .then( ( response ) => { 
//     console.log( response.json() ) 
//  } )
//  .then( (video) => { 
//     console.log( video ) 
//  } );

import React, {Component} from 'react';
class Products extends Component{
    constructor()
    {
        super();
        this.state={
            data:[],
        }
    }
    componentDidMount(){
        // fetch('./burger-queen.json')
        // .then((Response) => Response.json())
        // .then((findresponse) =>
        // {
        //     console.log(findresponse);

        // })
        fetch ('./burger-queen.json')
          .then(res => res.json())
          .then(res => {
            console.log(res);
            if (res.success) {
              //mensaje correcto
             
            }else{
            //mensaje de error
            }
          })
          .catch(function() {
            alert("Can't connect to backend try latter");
          });
       
    }
    render()
    {
        return(
            <div>
                {
                    this.state.data.map((dynamicData,i) =>
                    <div>
                        
                    </div>
                    )
                }
            </div>
        )
    }
}
export default Products;



