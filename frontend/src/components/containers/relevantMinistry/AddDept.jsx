import React, {useState} from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { relevantAddDept } from '../../../Actions/RelevantUser';

const AddDept = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    let dispatch = useDispatch();
    const RegisterHandler  = async (e) => 
    {
        e.preventDefault();
        await dispatch(relevantAddDept(id,name,password));
        toast.success("Department Added");
        setId("");
        setName("");
        setPassword("");
    }
  return (
    <>
    <div className='breadCrumb'>
        <h3>Relevant Ministry</h3>
        <div>
            Home <span> Add Departments</span>
        </div>
    </div>
    <div className='main_content_wrapper'>
        <div className='caption_wrapper'>
            <caption>Add New Department</caption>
            <Link to="/relevant/dashboard/departments">Back</Link>
        </div>
        <form className='form_wrapper' onSubmit={RegisterHandler}>
            <div>
                <input type="text" name="" id="" placeholder='Office Id'
                value={id}
                onChange={(e)=>setId(e.target.value)}
                required
                />
            </div>
            <div>
                <input type="text" name=""  id="" placeholder='Department Name' value={name}
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

export default AddDept