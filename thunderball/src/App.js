import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import logo from './logo.svg';
import Register from './auth/registration'
import Login from './auth/login'
import PrivateRoute from './auth/PrivateRoute'
import Initialize from './components/initialize'
import Move from './components/move'

function App() {
  return (
    <Router>
    <div className="App">
      <Register/>
      <Login/>
      <Initialize/>
      <Move/>
      
    </div>
    </Router>
  );
  
}

export default App;
