import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginUser, IUser } from './Components/UserLogin';
import { RegisterUser, IRegisterUser} from './Components/UserRegister';
import Socket from './Components/socket';

function App(this: any) : any {

  const [User, setLoggedUser] = useState<IUser>()
  const GetLoggedUser = () => {setLoggedUser(User)}
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Register">
            <RegisterUser/>
          </Route>
          <Route path="/Socket">
            <Socket/>
          </Route>
          <Route path = "/Login">
            <LoginUser GetUserData = { GetLoggedUser.bind(this) } properties = {{ Username: "", Password: "" }}/>
          </Route>
        </Switch>
     </Router>
    </div>
  )
}

export default App;
