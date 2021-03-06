import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    return (
        <aside className={props.ActiveClass}>
                <div className='sideBar_top'>
                    <div>
                    <i class='bx bxl-bitcoin'></i>
                    </div>
                    <div>
                        GFATS 
                    </div>
                </div>
                <div className='sideBar_middle'>
                    <Link to='/dashboard'>
                        <div className='sideBar_middler_container'>
                            <div className='sideBar_Icon'>
                            <i class='bx bxs-dashboard'></i>
                            </div>
                            <div className='sideBar_Name'>
                                Dashbaord
                            </div>
                        </div>
                    </Link>
                    <Link to='/dashboard/relevant-ministry'>
                        <div className='sideBar_middler_container'>
                            <div className='sideBar_Icon'>
                            <i class='bx bxs-user'></i>
                            </div>
                            <div className='sideBar_Name'>
                                Relevant Ministry
                            </div>
                        </div>
                    </Link>
                    <Link to='/dashboard/fund-request'>
                        <div className='sideBar_middler_container'>
                            <div className='sideBar_Icon'>
                            <i class='bx bxs-user'></i>
                            </div>
                            <div className='sideBar_Name'>
                                Fund Request
                            </div>
                        </div>
                    </Link>
                    <Link to='/dashboard/transfer-funds'>
                        <div className='sideBar_middler_container'>
                            <div className='sideBar_Icon'>
                            <i class='bx bx-money'></i>
                            </div>
                            <div className='sideBar_Name'>
                               Transfer Funds
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='sideBar_bottom'>
                    <p>Product By <span>GFATS</span></p>
                </div>
            </aside>
    );
}

export default SideBar;