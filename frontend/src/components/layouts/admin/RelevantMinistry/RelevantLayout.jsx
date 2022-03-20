import React,{useState} from 'react'
import '../financeMinistry/app.scss';
import RelevantHeader from './RelevantHeader';
import RelevantSidebar from './RelevantSidebar';
import releventRoutes from '../../../../routes/relevantRoutes';
import {Switch, Route, Redirect} from "react-router-dom";
const RelevantLayout = () => {
    const [isActive, setActive] = useState(true);
    
    const toggleClass = () => {
      setActive(!isActive);
    };

    return (
        <div className='masterContainer'>
            <RelevantSidebar ActiveClass = {isActive ? 'sideBar_container': 'sideBar_container_hide'}/>
            <div className='main_wrapper'>
                <RelevantHeader toggle={toggleClass}/>
                <div className='main_content'>
                    <Switch>
                        {releventRoutes.map((route,idx)=>{
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
                        <Redirect from="relevant" to="/relevant/dashboard" />
                    </Switch>
                </div>
            </div>
        </div>
    );

}

export default RelevantLayout