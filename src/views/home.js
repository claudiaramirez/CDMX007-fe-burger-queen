// import React from 'react';
// // import TotalProducts from '../components/total';
// // import Products from '../components/products';

// const Home = (props) =>(
//     <div>
//         <div className='main'>
//             <h2>{props.title}</h2>
//             <p>hola desde home</p>
//         </div>
//         {/* <Navbar title="icon home" /> */}
//         {/* <Products></Products>
//         <TotalProducts title="icon home" /> */}
//         {/* <TotalProducts></TotalProducts> */}
//     </div>
// );
// export default Home;
import React, { Component } from 'react';
import fire from '../config/Fire';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                
                <h1>Home</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
export default Home;