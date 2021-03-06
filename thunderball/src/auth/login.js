import React from "react";
// import { axiosWithAuth } from "./axiosWithAuth";
import axios from 'axios'
import {Link} from 'react-router-dom';
import '../css/Login.css'
import Logo from '../images/logo.png'


class Login extends React.Component {
    state = {
        loading: false,
      credentials: {
        username: '',
        // email:'',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
      this.setState({ loading: true });
      
      axios
        .post('https://lambda-mud-ty.herokuapp.com/api/login/', this.state.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.key);
          this.props.history.push('/ThunderBall');
          this.setState({ loading: false });
        })
        .catch(err => console.log(err));
    };
    
  
    render() {
      return (
        <div className="wrapperDiv">
          <img src={Logo} alt='logo'  className='logoLogin'/>
          <div className="wholeForm"> 
            <form className= "formDiv" onSubmit={this.login}>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
                  {/* <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.credentials.email}
                onChange={this.handleChange}
              /> */}
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
            <button>Log in</button>
            </form>
        
          <div className= "logWrap">
            <p>Need to sign up? <Link to={"/"}>Register</Link></p>
          </div>
        </div>
        </div>
      
      );
    }
  }
  
  export default Login;