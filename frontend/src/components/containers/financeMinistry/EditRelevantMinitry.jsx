import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {editRelevantMinistry, findRelevantMinistry, registerRelevantMinistry} from '../../../Actions/FinanceRelevantMinistry';
import {toast} from 'react-hot-toast';
import axios from 'axios';


const EditRelevantMinistry = (props) => {
    
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [editid, setid] = useState(0);
    const dispatch = useDispatch();
    useEffect(()=>{
        const id = props.match.params.id;
       axios.get(`/api/v1/find-relevant-ministry/${id}`).then(res => {
           if(res.status == 201)
           {
               setCode(res.data.editResult.relevant_ministry_id);
               setName(res.data.editResult.relevant_ministry_name);
               setid(res.data.editResult.relevant_id)
           }
       })
    },[]);

    const UpdateHandler  = async (e) => 
    {
        e.preventDefault();
        console.log(code,name,editid);
        await dispatch(editRelevantMinistry(code,name,editid));
        toast.success('Updated');
        setCode("");
        setName("");
        setid(0);
       
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
            <Link to="/dashboard/relevant-ministry">Back</Link>
        </div>
        <form className='form_wrapper' onSubmit={UpdateHandler}>
        <div>
                <input type="hidden" name="" id="" placeholder='Enter Relevant Ministry Code'
                value={editid}
                required
                />
            </div>
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
                <button type='submit' className='form_btn'>Save</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default EditRelevantMinistry