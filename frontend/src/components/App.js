import React from 'react';
import Home from './layouts/frontend/Home/Home';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import './App.css';
import Signup from './layouts/frontend/Forms/Signup/Signup';
import SignIn from './layouts/frontend/Forms/signIn/SignIn';
function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route exact path="/">
            <Home />
      </Route>
      <Route path="/sign-up">
            <Signup/>
      </Route>
      <Route path="/sign-in">
            <SignIn/>
      </Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
