import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import RelevantLayout from "../components/layouts/admin/RelevantMinistry/RelevantLayout";
function RelevantProtectedRoute({...rest})
{
    const {isRelevant} = useSelector((state)=> state.RelevantUser);
    return(
        <Route
            {...rest}
            render = {
            ({props, location}) => 
            isRelevant ? (<RelevantLayout {...props}/>)
            :
            (<Redirect to={{pathname:"/relevant", state:{from:location}}} />)
            }
        />
    );
}

export default RelevantProtectedRoute;