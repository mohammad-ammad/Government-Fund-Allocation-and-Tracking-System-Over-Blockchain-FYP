import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import SideBar from './sideBar';
import routes from '../../../../routes/routes';
import {Switch, Route, Redirect} from "react-router-dom";
import Header from './Header';
import './app.scss';

const MasterLayout = () => {
    const [isActive, setActive] = useState(true);

    const toggleClass = () => {
      setActive(!isActive);
    };
    return (
        <div className='masterContainer'>
            <SideBar ActiveClass = {isActive ? 'sideBar_container': 'sideBar_container_hide'}/>
            <div className='main_wrapper'>
                <Header toggle={toggleClass}/>
                <div className='main_content'>
                    <Switch>
                        {routes.map((route,idx)=>{
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
                        <Redirect from="dashboard" to="/dashboard" />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default MasterLayout;