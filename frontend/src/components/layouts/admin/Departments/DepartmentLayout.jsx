import React,{useState} from 'react'
import DeptHeader from './DeptHeader';
import DeptSidebar from './DeptSidebar';
import "../financeMinistry/app.scss";
import deptRoutes from '../../../../routes/DeptRoutes';
import {Switch, Route, Redirect} from "react-router-dom";

const DepartmentLayout = () => {
    const [isActive, setActive] = useState(true);
    
    const toggleClass = () => {
      setActive(!isActive);
    };
  return (
            <div className='masterContainer'>
            <DeptSidebar ActiveClass = {isActive ? 'sideBar_container': 'sideBar_container_hide'}/>
            <div className='main_wrapper'>
                <DeptHeader toggle={toggleClass}/>
                <div className='main_content'>
                    <Switch>
                        {deptRoutes.map((route,idx)=>{
                            return(
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(prop) => (
                                            <route.component {...prop}/>
                                        )}
                                    />
                                )
                            )
                        })}
                        <Redirect from="department" to="/department/dashboard" />
                    </Switch>
                </div>
            </div>
        </div>
  )
}

export default DepartmentLayout