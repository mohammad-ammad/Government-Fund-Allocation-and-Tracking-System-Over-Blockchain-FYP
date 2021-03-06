import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import userLogo from '../../../../assets/user.png';
import {RiLogoutCircleRLine, RiUser3Fill} from 'react-icons/ri';
import {useDispatch, useSelector} from "react-redux";
import { logoutRelevant } from '../../../../Actions/RelevantUser';
const RelevantHeader = (prop) => {
    const [isDrop, setDrop] = useState(false);
    const {relevant_ministry_name} = useSelector((state)=> state.RelevantUser.user);
    const dispatch = useDispatch();
    const DropDwon = () => {
        setDrop(!isDrop);
    }
    const LogoutUser = () => {
        dispatch(logoutRelevant());
    }
  return (
    <nav>
    <div className='nav_left'>
        <div className='menu_icon' onClick={prop.toggle}>
        <i class='bx bx-menu'></i>
        </div>
    </div>
    <div className='nav_right'>
        <div className='nav_name' onClick={DropDwon}>
            <div>{relevant_ministry_name}</div>
            <div><i class='bx bxs-chevron-down'></i></div>
            <div className={isDrop ? 'nav__dropdown': 'nav__dropdown_hide'}>
                <div>
                    <Link to="/">
                        <span><RiUser3Fill/></span>
                        Profile
                    </Link>
                </div>
                <div>
                    <a href="javaScript:void(0)" onClick={LogoutUser}>
                        <span><RiLogoutCircleRLine/></span>
                        Logout
                    </a>
                </div>
            </div>
        </div>
        <div className='nav_img'>
            <img src={userLogo} alt="" />
        </div>
        <div className='icon_msg'>
        <i class='bx bx-message'></i>
        </div>
        <div className='icon_noti'>
        <i class='bx bx-bell'></i>
        </div>
    </div>
</nav>
  )
}

export default RelevantHeader