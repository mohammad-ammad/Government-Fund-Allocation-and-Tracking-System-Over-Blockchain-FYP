import React, {useEffect} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router,Switch,Route,Link, Redirect } from 'react-router-dom';
import './App.css';
import MasterLayout from './layouts/admin/relativeMinistry/MasterLayout';
import Layout from './layouts/frontend/Layout';
import Auth from './layouts/frontend/Auth';
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "../Actions/FinanceUser";
import FinanceProtectedRoute from '../routes/FinanceProtectedRoute';

function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser());
  },[]);
  const {isAuthenticated} = useSelector((state)=> state.financeUser);
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/" exact>
          <Layout/>
        </Route>
        <Route path="/sign-in" exact>
          {
            isAuthenticated ? <Redirect to="/dashboard"/> : <Auth/>
          }
        </Route>
          <FinanceProtectedRoute name="Dashboard" path="/dashboard" />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
