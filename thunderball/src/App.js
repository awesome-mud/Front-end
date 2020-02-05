import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import Register from './auth/registration'
import Login from './auth/login'
import PrivateRoute from './auth/PrivateRoute'
import Initialize from './components/initialize'
import PlayerProvider from './context/Player/PlayerProvider'
import Move from './components/move'
import MainPage from './view/mainPage'
function App() {
  return (
    <Router>
    <PlayerProvider>
    <div className="App">
      
      <Route exact path ="/" component = {Register} />
      <Route path ="/login" component = {Login} />      
      <PrivateRoute path ="/ThunderBall" component={MainPage}/>
      
    </div>
    </PlayerProvider>
    </Router>
  );
  
}

export default App;
