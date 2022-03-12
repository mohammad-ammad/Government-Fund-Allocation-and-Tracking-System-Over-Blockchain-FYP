import React from 'react'
import Navbar from './Navbar'
import loginLogo from '../../../assets/login.png';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <>
    <Navbar/>
    <div className='auth__wrapper'>
       
        <div className="auth__container">
        <div className='left'>
            <img src={loginLogo} alt="" />
        </div>
        <div className='right'>
            <div className='right_heading'>
            <h3>SIGN IN</h3>
            <div className='dots'>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>
            </div>
            <form>
                <div className='auth_input'>
                    <input type="text"  name="" id="" placeholder='Enter Email'/>
                </div>
                <div className='auth_input'>
                    <input type="passsword" name="" id="" placeholder='Enter Password'/>
                </div>
                <div className='account__label'>
                    Don't have an account? <Link to="/sign-up">Sign Up</Link>
                </div>
                <div className='auth__submit'>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Auth