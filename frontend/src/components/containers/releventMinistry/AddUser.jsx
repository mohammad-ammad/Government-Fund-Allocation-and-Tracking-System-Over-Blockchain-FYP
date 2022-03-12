import React from 'react'
import { Link } from 'react-router-dom';
const AddUser = () => {
  return (
    <>
    <div className='breadCrumb'>
        <h3>Users</h3>
        <div>
            Home <span> Add Users</span>
        </div>
    </div>
    <div className='main_content_wrapper'>
        <div className='caption_wrapper'>
            <caption>Add New User</caption>
            <Link to="/dashboard/user">Back</Link>
        </div>
        <form className='form_wrapper'>
            <div>
                <input type="text" name="" id="" placeholder='Enter UserName'/>
            </div>
            <div>
                <input type="text" name="" id="" placeholder='Enter Email'/>
            </div>
            <div>
                <input type="text" name="" id="" placeholder='Enter Password'/>
            </div>
            <div>
                <button type='submit' className='form_btn'>Save</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default AddUser