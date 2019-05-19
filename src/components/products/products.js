import React, {Component} from 'react';
import './products.css';
import RouterHome from '../../RouterHome';
import {Route} from 'react-router-dom';
import TotalProducts from '../total/total';

class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
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
    }

    // componentWillUpdate(nextProps, nextState){
    //     localStorage.setItem('items' , JSON.stringify(nextState.items));
    //     localStorage.setItem('itemsDate' , Date.now());

    // }
     
    //   handleClick = (e) =>{ 
    //     e.preventDefault(); 
    //     console.log(this.state.items);        
    //     console.log(this.state.items[e])      
    //     // this.setState({inputTerms: e.target.checked})  
    //   }





    render()
    {
        // const productComponents = items.map((item) => (
        //     <Products
        //       key={'product-' + products.id}
        //       id={products.id}
              
        //     />
        //   ));

        var { isLoaded, items} = this.state;
        if(!isLoaded){
            return <div>Cargando...</div>
        } 
        else if(window.location.href.includes('breakfast')){
            return(
                <div className="products">
                    {items.filter(item => item.type === "breakfast").map((item,i) => 
                        <button class="card-main" key={i} id={item.id} onClick={this.handleClick} >
                            <div class="card-image">
                                <div className="border-img">
                                    <img className="img"  src={item.img}/>
                                </div>
                            </div>
                            <div class="card-content">
                                <p className="item_product">{item.product}</p>
                                <p className="item_price">{item.price}</p>
                            </div>
                       </button> 
                       
                    )}     
                </div>
                // {productComponents}
            );
        }else if(window.location.href.includes('hamburger')){
            return(
                <div className="products">
                    {items.filter(item => item.type === "hamburguer").map(item => 
                        <button class="card-main">
                            <div class="card-image">
                                <div className="border-img">
                                    <img className="img"  src={item.img}/>
                                </div>
                            </div>
                            <div class="card-content">
                                <p className="item_product">{item.product}</p>
                                <p className="item_price">{item.price}</p>
                            </div>
                       </button> 
                    )}       
                </div>    
            );
        }else if(window.location.href.includes('drinks')){
            return(
                <div className="products">
                    {items.filter(item => item.type === "drinks").map(item => 
                        <button class="card-main">
                            <div class="card-image">
                                <div className="border-img">
                                    <img className="img"  src={item.img}/>
                                </div>
                            </div>
                            <div class="card-content">
                                <p className="item_product">{item.product}</p>
                                <p className="item_price">{item.price}</p>
                            </div>
                        </button> 
                    )}       
                </div>    
            );
        }else if(window.location.href.includes('complements')){
            return(
                <div className="products">
                    {items.filter(item => item.type === "complements").map(item => 
                        <button class="card-main">
                            <div class="card-image">
                                <div className="border-img">
                                    <img className="img"  src={item.img}/>
                                </div>
                            </div>
                            <div class="card-content">
                                <p className="item_product">{item.product}</p>
                                <p className="item_price">{item.price}</p>
                            </div>
                        </button> 
                    )}       
                </div>    
            );
        }   
    }
}
export default Products;



 // componentWillMount(){
    //     localStorage.getItem('items') && this.setState({
    //      items: JSON.parse(localStorage.getItem('items')),
    //      isLoaded: false
    //     });
    // }
    // componentDidMount(){
    //     if(!localStorage.getItem('items')){
    //        this.fetchData();
    //     }else{
    //         console.log('hola data en localstorage');
    //     }
        
    // }
    // fetchData(){
    //     fetch('https://burgerqueenmx.firebaseio.com/products.json')
    //     .then(response => response.json())
    //     // if hamburger - muestrame sòlo ese pedazo del json
    //     .then((findresponse) =>{
    //         // console.log(findresponse);
    //         this.setState({
    //             isLoaded: true,
    //             items: findresponse, 
    //         })
    //     });
    // }