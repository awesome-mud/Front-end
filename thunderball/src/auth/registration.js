import React from "react";
import axios from 'axios'
import {Link} from 'react-router-dom';
import '../css/Registration.css';

class Register extends React.Component {
    state = {
        loading: true,
      credentials: {
        username: '',
        // Email:'',
        password1: '',
        password2: ''
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
      console.log(this.state.credentials)
      axios
        .post('https://lambda-mud-ty.herokuapp.com/api/registration/', this.state.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.key);
          console.log('registration response: ', res)
      
          this.setState({ loading: false });
        })
        .catch(err => console.log(err));
    };
    
  
    render() {
      return (
        
        <div className="wrapperDiv">
          <div className="wholeForm">
            <form className="formDiv" onSubmit={this.login}>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              {/* <input
                type="email"
                name="Email"
                placeholder="email"
                value={this.state.credentials.Email}
                onChange={this.handleChange}
              /> */}
              <input
                type="password"
                name="password1"
                placeholder="password"
                value={this.state.credentials.password1}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password2"
                placeholder="confirm password"
                value={this.state.credentials.password2}
                onChange={this.handleChange}
              />
        <button>Register</button>
            </form>
          
          <div className="logWrap">
            <p>Already have an account? <Link to={"/login"}>Log in</Link></p>
          </div>
        </div>
        </div>
         
      
      );
    }
  }
  
  export default Register;