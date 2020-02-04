import React from "react";
// import { axiosWithAuth } from "./axiosWithAuth";
import axios from 'axios'
import {Link} from 'react-router-dom';


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
          
        //   this.props.history.push('/protected');
          this.setState({ loading: false });
        })
        .catch(err => console.log(err));
    };
    
  
    render() {
      return (
        <div className="login-container">
        <div className="login-form">
        
          <div className="login-card">
           
          <form onSubmit={this.login}>
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
        
          </div>
        </div>
        </div>
      
      );
    }
  }
  
  export default Login;