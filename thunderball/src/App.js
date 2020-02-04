import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import logo from './logo.svg';
import Register from './auth/registration'
import Login from './auth/login'
import PrivateRoute from './auth/PrivateRoute'

function App() {
  return (
    <Router>
    <div className="App">
      <Register/>
      <Login/>
      
    </div>
    </Router>
  );
  
}

export default App;
