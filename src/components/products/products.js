import React, {Component} from 'react';
import './products.css';
import RouterHome from '../../RouterHome';
import {Route} from 'react-router-dom';
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
    render()
    {
        var { isLoaded, items} = this.state;
        if(!isLoaded){
            return <div>Cargando...</div>
        } 
        else if(window.location.href.includes('breakfast')){
            return(
                <div className="products">
                    {items.filter(item => item.type === "breakfast").map(item => 
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