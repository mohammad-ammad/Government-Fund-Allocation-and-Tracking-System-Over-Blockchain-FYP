import React from 'react'
import { Link } from 'react-router-dom'
const DeptSidebar = (props) => {
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
        <Link to='/department/dashboard'>
            <div className='sideBar_middler_container'>
                <div className='sideBar_Icon'>
                <i class='bx bxs-dashboard'></i>
                </div>
                <div className='sideBar_Name'>
                    Dashbaord
                </div>
            </div>
        </Link>
        <Link to='/department/dashboard/project-request'>
            <div className='sideBar_middler_container'>
                <div className='sideBar_Icon'>
                <i class='bx bxs-user'></i>
                </div>
                <div className='sideBar_Name'>
                    Projects Request
                </div>
            </div>
        </Link>
        <Link to='/department/dashboard/view-transaction'>
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

export default DeptSidebar