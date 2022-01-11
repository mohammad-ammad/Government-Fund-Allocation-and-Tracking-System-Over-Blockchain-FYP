import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import './SignIn.css';
function Signup() {
  return (
    <>
    <Navbar/>
    <div className="gf__container">
        <div className='signup__wrapper'>
            <div className='sign_up_heading'>
            <h3>SignIn</h3>
            </div>
            <form>
            <div class="mb-3">
                <input type="email" class="form-control shadow-none" placeholder='Email'/>
            </div>
            <div class="mb-3">
                <input type="email" class="form-control shadow-none" placeholder='Password'/>
            </div>
            <div class="mb-3">
                <select class="form-control shadow-none">
                    <option selected disabled>Choose Role</option>
                    <option>Ministry</option>
                    <option>Finance</option>
                </select>
            </div>
            <div class="d-grid gap-2">
                <input type="button" class="btn btn-primary btn-custom shadow-none" value="Sign In"/>
            </div>
            </form>   
        </div>
    </div>
    </>
  );
}

export default Signup;
