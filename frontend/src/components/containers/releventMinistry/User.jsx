import React from 'react'
import { Link } from 'react-router-dom';
const User = () => {
  return (
    <>
    <div className='breadCrumb'>
                        <h3>Users</h3>
                        <div>
                            Home <span> Users</span>
                        </div>
                    </div>
                    <div className='main_content_wrapper'>
                    <div className='caption_wrapper'>
                    <caption>All Users</caption>
                    <Link to="/dashboard/add-user">Add Users</Link>
                    </div>
                    <table>
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td data-label="no">1</td>
                            <td data-label="name">Ammad</td>
                            <td data-label="Amount">ammad@gmail.com</td>
                            <td data-label="action">
                                <button className='active_btn'>Active</button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
    </>
  )
}

export default User