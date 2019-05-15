// const Products = (props) =>(
//     <div className='products'>
//         <h2>Productos</h2>
        
//     </div>
// );

// export default Products;
import React, {Component} from 'react';
import './products.css';
class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            // data:[],
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount(){
        fetch('https://burgerqueenmx.firebaseio.com/products.json')
        .then(response => response.json())
        // if hamburger - muestrame sòlo ese pedazo del json
        .then((findresponse) =>{
            // console.log(findresponse);
            this.setState({
                isLoaded: true,
                items: findresponse, 
            })
        });

        // fetch('https://burgerqueenmx.firebaseio.com/products.json')
        // .then((Response) => Response.json())
        // // if hamburger - muestrame sòlo ese pedazo del json
        // .then((findresponse) =>
        // {
        //     console.log(findresponse[0].breakfast);
        //     this.setState({
        //         data:findresponse,
        //     })
        // })


        // fetch ('https://burgerqueenmx.firebaseio.com/products.json')
        //   .then(res => res.json())
        //   .then(res => {
        //     console.log(res);
        //     if (res.success) {
        //       //mensaje correcto
             
        //     }else{
        //     //mensaje de error
        //     }
        //   })
        //   .catch(function() {
        //     alert("JSON NO ENCONTRADO");
        //   });
    }
    render()
    // {
    //     return(
    //         <div>
    //             {
    //                 this.state.data.map((item,key) =>  
    //                 <li key ={key.id}>
    //                     <p>{item.price}</p>
    //                     <p>{item.img}</p>
    //                 </li>    
    //                )   
    //             }
    //         </div>    
    //     )   
    // }
    {
        var { isLoaded, items} = this.state;
        if(!isLoaded){
            return <div>Cargando...</div>
        } else{
            return(
                <div className="Products">
                    
                        {items.map(item =>(
                            // <div key={item.id}>
                            //     product : {item.product} 
                            //     <img src={item.img}/>
                            //     price : {item.price}  
                            // </div>
                            <div class="col s3 m3 l3">
                                <div class="card horizontal">
                                <div class="card-image">
                                    <img src={item.img}/>
                                </div>
                                <div class="card-stacked">
                                    <div class="card-content">
                                        <p>{item.product}</p>
                                        <p>{item.price}</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="#">Agregar</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                   
                     
                </div>    
            );
        }    
    }
}
export default Products;



