import React, {Component} from 'react';
import '../total/total.css';
import './products.css';
import cancel from '../../assets/close.png';
class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            itemsAdded: JSON.parse(localStorage.getItem('itemsAgregados')) != null ? JSON.parse(localStorage.getItem('itemsAgregados')) : [],
            total: localStorage.getItem('totalAgregados') != null ? parseFloat(localStorage.getItem('totalAgregados')) : 0.00,
            isLoaded: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickAdded = this.handleClickAdded.bind(this);
        this.handleClickSend = this.handleClickSend.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
        this.handleClickDelete= this.handleClickDelete.bind(this);

    }
    
    componentDidMount(){
        fetch('https://burgerqueenmx.firebaseio.com/products.json')
        .then(response => response.json())
        .then((findresponse) =>{
            // console.log(findresponse);
            this.setState({
                isLoaded: true,
                items: findresponse, 
            })
        });
    }
        
    handleClick(e){ 
        let id = e.target.id;
         let product = e.target.attributes.getNamedItem('data-product').value;//Returns the attribute node with the specified 
         let price = e.target.attributes.getNamedItem('data-productsprice').value;
         console.log(price)
         let image = e.target.attributes.getNamedItem('data-img').value;
         let type = e.target.attributes.getNamedItem('data-producttype').value;
         
         let precio = parseFloat(price.substring(1))
         let sum = parseFloat(this.state.total + precio);

        let productAdded = this.state.itemsAdded;
        let totalAddedNew = parseFloat(this.state.total);

         this.setState({
            itemsAdded: [...productAdded, {
                id:id,
                price: precio,
                img:image,
                product: product,
                type:type,
            }],
            total: sum
        })
        document.getElementById('price__total').innerHTML = '$'+ (totalAddedNew + precio)
        localStorage.setItem('itemsAgregados', JSON.stringify([...productAdded, {
            id: id,
            price: precio,
            img: image,
            product: product,
            type: type}])
        );
        localStorage.setItem('totalAgregados',sum);
        //console.log(this.state.itemsAdded)
      };
    handleClickSend(){
        console.log(this.state.itemsAdded)
        console.log(this.state.total)
    }
    handleClickCancel(){
        //Limpiamos state added items y local storage
        localStorage.clear();
        window.location.reload();
    }
    handleClickAdded(){
        // console.log('ok')
        
       
    }
    handleClickDelete(item){
        const data = this.state.itemsAdded.filter(i => i.id !== item.id)
        console.log(data)
        // this.setState({data})
        // alert('ok2')
      }

    render()
    {
        var { isLoaded, items,total,itemsAdded} = this.state;
        if(!isLoaded){
            return(
                <LoaderProducts />
                )
        } 
        else if(window.location.href.includes('breakfast')){
            return(
                <React.Fragment>
                <div className="products">
                <ProductList key={1 + Math.random() * (100 - 1)} items={items} category={'breakfast'} handleClick={this.handleClick}/>
                </div>
                    {/* bloque total  */}
                <div className='total'>
                    <TotalDesc/>
                    {/* lista de productos agregados */}
                    <div className="productsAdded">
                        <div className="list-products" >
                            <ProductAdded itemsAdded={itemsAdded} handleClickAdded={this.handleClickAdded}/> 
                        </div>
                            <TotalAdded total={total}/>
                    
                    </div>
                    {/* botones de accion  */}
                    <ButtonsOrder handleClickCancel={this.handleClickCancel} handleClickSend={this.handleClickSend}/>
                </div>
            </React.Fragment>
            );
        }else if(window.location.href.includes('hamburger')){
            return(
                <React.Fragment>
                <div className="products">
                <ProductList key={1 + Math.random() * (100 - 1)} items={items} category={'hamburguer'} handleClick={this.handleClick}/>
                </div>
                    {/* bloque total  */}
                <div className='total'>
                    <TotalDesc/>
                    {/* lista de productos agregados */}
                    <div className="productsAdded">
                        <div className="list-products">
                            <ProductAdded itemsAdded={itemsAdded} handleClickAdded={this.handleClickAdded}/> 
                        </div>
                            <TotalAdded total={total}/>
                        
                    </div>
                    {/* botones de accion  */}
                    <ButtonsOrder handleClickCancel={this.handleClickCancel} handleClickSend={this.handleClickSend}/>
                </div>
            </React.Fragment>
            );
        }else if(window.location.href.includes('drinks')){
            return(
                <React.Fragment>
                <div className="products">
                <ProductList key={1 + Math.random() * (100 - 1)} items={items} category={'drinks'} handleClick={this.handleClick}/>
                </div>
                    {/* bloque total  */}
                <div className='total'>
                    <TotalDesc/>
                    {/* lista de productos agregados */}
                    <div className="productsAdded">
                        <div className="list-products">
                            <ProductAdded itemsAdded={itemsAdded} handleClickAdded={this.handleClickAdded}/> 
                        </div>
                            <TotalAdded total={total}/>
                        
                    </div>
                    {/* botones de accion  */}
                    <ButtonsOrder handleClickCancel={this.handleClickCancel} handleClickSend={this.handleClickSend}/>
                </div>
            </React.Fragment>
            );
        }else if(window.location.href.includes('complements')){
            return(
                <React.Fragment>
                <div className="products">
                <ProductList key={1 + Math.random() * (100 - 1)} items={items} category={'complements'} handleClick={this.handleClick}/>
                </div>
                    {/* bloque total  */}
                <div className='total'>
                    <TotalDesc/>
                    {/* lista de productos agregados */}
                    <div className="productsAdded">
                        <div className="list-products">
                            <ProductAdded itemsAdded={itemsAdded} handleClickAdded={this.handleClickAdded} handleClickDelete={this.handleClickDelete}/> 
                        </div>
                            <TotalAdded total={total}/>
                        
                    </div>
                    {/* botones de accion  */}
                    <ButtonsOrder handleClickCancel={this.handleClickCancel} handleClickSend={this.handleClickSend}/>
                </div>
            </React.Fragment>
            );
        }   
    }
}

class ProductList extends Component{
    render(){
        return(
        this.props.items.filter(item => item.type === this.props.category).map((item,i) => 
            <React.Fragment>
                <div className="card-main .products">
                    <button 
                        key={i} 
                        id={ item.id} 
                        data-img={item.img}
                        data-product={item.product}
                        data-producttype={item.type}
                        data-productsprice={item.price}
                        onClick={this.props.handleClick}
                        >click
                    </button>
                    <div className="card-image">
                        <div className="border-img">
                            <img className="img"  src={item.img}/>
                        </div>
                    </div>
                    <div className="card-content">
                        <p className="item_product">{item.product}</p>
                        <p className="item_price">{item.price}</p>
                    </div>
                </div> 
            </React.Fragment>
        )
        )
    }
}
class TotalDesc extends Component{
    render (){
        return(
            <ul className="total-description">
                <li className="nav-menu_total"><span className="total-title">Cantidad</span></li>
                <li className="nav-menu_total"><span className="total-title">Producto</span></li>
                <li className="nav-menu_total"> <span className="total-title">Precio</span></li>
            </ul>
        )
    }
 }
 class ProductAdded extends Component{
     render(){
         return(
            this.props.itemsAdded.map((item,i) => 
            <div>
                <div className="card-main" key={i} id={item.id} onClick={this.props.handleClickAdded(this, item.id)}>
                    <div className="card-content">
                        <p className="number">1</p>
                        <p className="item_product">{item.product}</p>
                        <p className="item_price">{item.price}</p>
                        <button className="cancel-product" id={item.id} onClick={this.props.handleClickDelete}><img src={cancel} alt="delete" className="img-cancel" /></button>
                    </div>
                </div>
            </div>     
            )  
         )
     }
 }
 
  class TotalAdded extends Component{
      render(){
          return(
            <div className="total-products">
            <span>Total</span>
            <p id="price__total">${this.props.total}</p>
            </div>
          )
      }
 
  }
  class ButtonsOrder extends Component{
      render(){
          return(
            <div className="buttons-order">
                <button className="btn-cancel" onClick={this.props.handleClickCancel}>Cancelar orden</button>
                <button className="btn-send" onClick={this.props.handleClickSend}>Confirmar orden</button>
            </div> 
          )
      }
  }

  class LoaderProducts extends Component{
      render (){
          return(
            <div className="wpLoader">
            <div id="loading"></div>
            <span>Cargando...</span>
            </div>
          )
      }
  }
  export default Products;