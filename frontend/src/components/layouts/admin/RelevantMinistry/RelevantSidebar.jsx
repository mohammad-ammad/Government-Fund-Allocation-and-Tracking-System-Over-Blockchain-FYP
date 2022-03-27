import React from 'react'
import { Link } from 'react-router-dom'
const RelevantSidebar = (props) => {
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
        <Link to='/relevant/dashboard/departments'>
            <div className='sideBar_middler_container'>
                <div className='sideBar_Icon'>
                <i class='bx bxs-user'></i>
                </div>
                <div className='sideBar_Name'>
                    Departments
                </div>
            </div>
        </Link>
        <Link to='/relevant/dashboard/fund-request'>
            <div className='sideBar_middler_container'>
                <div className='sideBar_Icon'>
                <i class='bx bxs-user'></i>
                </div>
                <div className='sideBar_Name'>
                    Funds Request
                </div>
            </div>
        </Link>
        <Link to='/relevant/dashboard/finance-funds-request'>
            <div className='sideBar_middler_container'>
                <div className='sideBar_Icon'>
                <i class='bx bxs-user'></i>
                </div>
                <div className='sideBar_Name'>
                    Funds Approval Request
                </div>
            </div>
        </Link>
        <Link to='/dashboard'>
            <div className='sideBar_middler_container'>
                <div className='sideBar_Icon'>
                <i class='bx bx-money'></i>
                </div>
                <div className='sideBar_Name'>
                   Transactions
                </div>
            </div>
        </Link>
    </div>
    <div className='sideBar_bottom'>
        <p>Product By <span>GFATS</span></p>
    </div>
</aside>
  )
}

export default RelevantSidebar