import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import DepartmentLayout from "../components/layouts/admin/Departments/DepartmentLayout";
function DeptProtectedRoute({...rest})
{
    const {isDept} = useSelector((state)=> state.DeptUser);
    return(
        <Route
            {...rest}
            render = {
            ({props, location}) => 
            isDept ? (<DepartmentLayout {...props}/>)
            :
            (<Redirect to={{pathname:"/department", state:{from:location}}} />)
            }
        />
    );
}

export default DeptProtectedRoute;