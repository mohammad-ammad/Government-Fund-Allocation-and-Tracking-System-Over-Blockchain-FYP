import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import './Signup.css';
function Signup() {
  return (
    <>
    <Navbar/>
    <div className="gf__container">
        <div className='signup__wrapper'>
            <div className='sign_up_heading'>
            <h3>Signup</h3>
            </div>
            <form>
            <div class="mb-3">
                <input type="email" class="form-control shadow-none" placeholder='Username'/>
            </div>
            <div class="mb-3">
                <input type="email" class="form-control shadow-none" placeholder='Email'/>
            </div>
            <div class="mb-3">
                <input type="email" class="form-control shadow-none" placeholder='Password'/>
            </div>
            <div class="mb-3">
                <input type="email" class="form-control shadow-none" placeholder='Confirm Password'/>
            </div>
            <div class="mb-3">
                <input type="email" class="form-control shadow-none" placeholder='Meta Mask Id'/>
            </div>
            <div class="mb-3">
                <select class="form-control shadow-none">
                    <option selected disabled>Choose Role</option>
                    <option>Ministry</option>
                    <option>Finance</option>
                </select>
            </div>
            <div class="d-grid gap-2">
                <input type="button" class="btn btn-primary btn-custom shadow-none" value="Sign Up"/>
            </div>
            </form>   
        </div>
    </div>
    </>
  );
}

export default Signup;
