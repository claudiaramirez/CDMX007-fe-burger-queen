import React from 'react';
import TotalProducts from '../components/total';
import Products from '../components/products';

const Home = (props) =>(
    <div>
        <div className='main'>
            <h2>{props.title}</h2>
            <p>hola desde home</p>
        </div>
        {/* <Navbar title="icon home" /> */}
        {/* <Products></Products>
        <TotalProducts title="icon home" /> */}
        {/* <TotalProducts></TotalProducts> */}
    </div>
);
export default Home;