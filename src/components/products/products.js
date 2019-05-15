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
                <div className="Products">
                    {items.filter(item => item.type === "breakfast").map(item => 
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
                                </div>
                            </div>
                        </div>
                    )}     
                </div>    
            );
        }else if(window.location.href.includes('hamburger')){
            return(
                <div className="Products">
                    {items.filter(item => item.type === "hamburguer").map(item => 
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
                                </div>
                            </div>
                        </div>
                    )}       
                </div>    
            );
        }else if(window.location.href.includes('drinks')){
            return(
                <div className="Products">
                    {items.filter(item => item.type === "drinks").map(item => 
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
                                </div>
                            </div>
                        </div>
                    )}       
                </div>    
            );
        }else if(window.location.href.includes('complements')){
            return(
                <div className="Products">
                    {items.filter(item => item.type === "complements").map(item => 
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
                            </div>
                        </div>
                        </div>
                    )}       
                </div>    
            );
        }   
    }
}
export default Products;