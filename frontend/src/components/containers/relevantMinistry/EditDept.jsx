import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {toast} from 'react-hot-toast';
import axios from 'axios';
import { relevantEditDept } from '../../../Actions/RelevantUser';

const EditDept = (props) => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        const id = props.match.params.id;
       axios.get(`/api/v1/relevant/get-dept/${id}`).then(res => {
           if(res.status == 201)
           {
               setName(res.data.result.office_name);
           }
       })
    },[]);

    const UpdateHandler  = async (e) => 
    {
        e.preventDefault();
        await dispatch(relevantEditDept(props.match.params.id,name));
        toast.success('Updated');
        setName("");
       
    }
  return (
    <>
    <div className='breadCrumb'>
        <h3>Finance Ministry</h3>
        <div>
            Home <span> Edit Relevant Ministry</span>
        </div>
    </div>
    <div className='main_content_wrapper'>
        <div className='caption_wrapper'>
            <caption>Edit User</caption>
            <Link to="/relevant/dashboard/departments">Back</Link>
        </div>
        <form className='form_wrapper' onSubmit={UpdateHandler}>
       
            <div>
                <input type="text" name=""  id="" placeholder='Enter Username' value={name}
                    onChange={(e)=>setName(e.target.value)}
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

export default EditDept