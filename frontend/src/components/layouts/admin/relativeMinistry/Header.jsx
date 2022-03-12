import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Header = (prop) => {
    const [isDrop, setDrop] = useState(false);
    const DropDwon = () => {
        setDrop(!isDrop);
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
                            <div>Admin</div>
                            <div><i class='bx bxs-chevron-down'></i></div>
                            <div className={isDrop ? 'nav__dropdown': 'nav__dropdown_hide'}>
                                <ul>
                                    <li>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='nav_img'>
                            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
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

export default Header