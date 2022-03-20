import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {registerRelevantMinistry} from '../../../Actions/FinanceRelevantMinistry';
import {toast} from 'react-hot-toast';
const AddRelevantMinistry = () => {
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
 
    const dispatch = useDispatch();
    const RegisterHandler  = async (e) => 
    {
        e.preventDefault();
        await dispatch(registerRelevantMinistry(code,name,password));
        toast.success('Successfully!');
        setCode("");
        setName("");
        setPassword("");
    }
  return (
    <>
    <div className='breadCrumb'>
        <h3>Finance Ministry</h3>
        <div>
            Home <span> Add Relevant Ministry</span>
        </div>
    </div>
    <div className='main_content_wrapper'>
        <div className='caption_wrapper'>
            <caption>Add New User</caption>
            <Link to="/dashboard/relevant-ministry">Back</Link>
        </div>
        <form className='form_wrapper' onSubmit={RegisterHandler}>
            <div>
                <input type="text" name="" id="" placeholder='Enter Relevant Ministry Code'
                value={code}
                onChange={(e)=>setCode(e.target.value)}
                required
                />
            </div>
            <div>
                <input type="text" name=""  id="" placeholder='Enter Username' value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    />
            </div>
            <div>
                <input type="password" name="" id="" placeholder='Enter Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                />
            </div>
            <div>
                <button type='submit' className='form_btn'>Save</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default AddRelevantMinistry