import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import MasterLayout from "../components/layouts/admin/financeMinistry/MasterLayout";
function FinanceProtectedRoute({...rest})
{
    const {isAuthenticated} = useSelector((state)=> state.financeUser);
    return(
        <Route
            {...rest}
            render = {
            ({props, location}) => 
            isAuthenticated ? (<MasterLayout {...props}/>)
            :
            (<Redirect to={{pathname:"/sign-in", state:{from:location}}} />)
            }
        />
    );
}

export default FinanceProtectedRoute;