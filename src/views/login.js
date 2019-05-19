import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import fire from '../config/Fire';
import logo from '../assets/logo.jpg';
import './login.css'

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
      <div className="login">
        <div className="logo_right">
          <img src={logo} className="logo-login" alt="logo" />
        </div>
        <div className="form_left">
          <form>
              <h1 className="title-login">Inicio de sesión</h1>
              <p className="subtitles-form">Empleado</p>
              <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre"/>
              <p className="subtitles-form">Contraseña</p>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Solo 4 digitos"/>
              <button type="submit" onClick={this.login} className="btn-signin">Entrar</button>
              <p className="registrer">¿Aún no tienes cuenta?<a onClick={this.signup} className="btn-signup"> Registrate</a></p>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;




