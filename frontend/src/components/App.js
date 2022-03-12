import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import './App.css';
import MasterLayout from './layouts/admin/relativeMinistry/MasterLayout';
import Layout from './layouts/frontend/Layout';
import Auth from './layouts/frontend/Auth';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/" exact>
          <Layout/>
        </Route>
        <Route path="/sign-in" exact>
          <Auth/>
        </Route>
      <Route name="Dashboard" path="/dashboard" render={(props) => <MasterLayout {...props}/>}/>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
