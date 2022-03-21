import React, {useEffect} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom';
import './App.css';
import Layout from './layouts/frontend/Layout';
import Auth from './layouts/frontend/Auth';
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "../Actions/FinanceUser";
import FinanceProtectedRoute from '../routes/FinanceProtectedRoute';
import {Toaster} from 'react-hot-toast';
import RelevantSignIn from './layouts/frontend/ReleventSignIn';
import RelevantProtectedRoute from '../routes/RelevantProtectedRoute';
import { relevantloadUser } from '../Actions/RelevantUser';
import DepartmentLayout from './layouts/admin/Departments/DepartmentLayout';
import DeptProtectedRoute from '../routes/DeptProtectedRoute';
import DeptAuth from './layouts/frontend/DeptAuth';
import { deptloadUser } from '../Actions/DeptUser';
function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser());
    dispatch(relevantloadUser());
    dispatch(deptloadUser());
  },[dispatch]);
  const {isAuthenticated} = useSelector((state)=> state.financeUser);
  const {isRelevant} = useSelector((state)=> state.RelevantUser);
  const {isDept} = useSelector((state)=> state.DeptUser);
  return (
    <div>
      <div>
        <Toaster 
          position='top-right'
          toastOptions={{
            success:{
              theme: {
                primary:'#4aed88'
              }
            }
          }}
        >

        </Toaster>
      </div>
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
          <Route path="/relevant" exact>
          {
            isRelevant ? <Redirect to="/relevant/dashboard"/> :  <RelevantSignIn/>
          }
        </Route>
        <Route path="/department" exact>
          {
            isDept ? <Redirect to="/department/dashboard"/> :   <DeptAuth/>
          }
        </Route>
        <RelevantProtectedRoute name="relevant" path="/relevant/dashboard" />
        <DeptProtectedRoute name="department" path="/department/dashboard"/>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
