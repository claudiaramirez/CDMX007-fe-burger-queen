// import React from 'react';

// const Pagar = (props) =>(
    
//     <div className='login'>
//         <form class="col s12">
//             <div class="row">
//                 <div class="input-field col s6">
//                     <input id="email" type="email" class="validate"/>
//                     <label for="email">Usuario</label>
//                 </div>
//             </div>
//             <div class="row">
//                 <div class="input-field col s6">
//                     <input  id="password" type="password" class="validate"/>
//                     <label for="password">Contraseña</label>
//                 </div>
//             </div>
//         </form>
//         <button>Iniciar sesion</button>
//     </div>

// );

// export default Pagar;

import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import fire from '../config/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
        <form>
            <div >
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div >
            {/* <label for="exampleInputPassword1">Password</label> */}
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" onClick={this.login} class="btn btn-primary">Iniciar Sesión</button>
            <button onClick={this.signup} class="btn btn-success">Registro</button>
        </form>
 
 
    );
  }
}
export default Login;




