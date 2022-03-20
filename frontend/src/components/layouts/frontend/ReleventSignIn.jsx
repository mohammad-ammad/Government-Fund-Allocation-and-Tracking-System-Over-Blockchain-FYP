import React, {useState} from 'react'
import Navbar from './Navbar'
import loginLogo from '../../../assets/login.png';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { relevantloginUser } from '../../../Actions/RelevantUser';
const RelevantSignIn = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loginHandler = (e) => 
    {
        e.preventDefault();
        dispatch(relevantloginUser(name,password));
    }
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
            <h3>Relevant Ministry</h3>
            <div className='dots'>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>
            </div>
            <form onSubmit={loginHandler}>
                <div className='auth_input'>
                    <input type="text"  name="" id="" placeholder='Enter Code'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                     required/>
                </div>
                <div className='auth_input'>
                    <input type="password" name="" id="" placeholder='Enter Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                     required/>
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

export default RelevantSignIn