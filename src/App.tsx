import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginUser, IUser } from './Components/UserLogin';
import { RegisterUser, IRegisterUser} from './Components/UserRegister';
import { HomePage } from './Components/HomePage';
import Socket from './Components/socket';
import { Lobbies } from './Components/Lobbies';
import NavBar from './Components/NavBar';

function App(){
  
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Switch>

          <Route path="/Register">
            <RegisterUser/>
          </Route>
          <Route path="/Chat">
            <Socket/>
          </Route>
          <Route path = "/Login">
            <LoginUser properties = {{ Username: "", Password: "" }}/>
          </Route>
          <Route path = "/Lobbies">
            <Lobbies/>
          </Route>
        </Switch>
     </Router>
    </div>
  )
}

export default App;
