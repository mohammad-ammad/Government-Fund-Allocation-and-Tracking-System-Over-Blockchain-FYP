import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { relevantUpdateFundStatus } from '../../../Actions/RelevantUser';
import toast from 'react-hot-toast';
const FundStatus = (props) => {
    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [feed,setFeed] = useState(null);
    const [status,setStatus] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const id = props.match.params.id;
        axios.get(`/api/v1/relevant/get-funds-request/${id}`).then(res => {
            if(res.status === 201)
            {
                setName(res.data.result.project_name);
                setDesc(res.data.result.project_description);
                setStatus(res.data.result.status_approval)
            }
        })
    }, [])
    
    const updateHandler = async (e) => {
        e.preventDefault();
        await dispatch(relevantUpdateFundStatus(feed,status,props.match.params.id))
        toast.success("Status Updated");
    }
  return (
    <>
    <div className='breadCrumb'>
        <h3>Relevant Ministry</h3>
        <div>
            Home <span> Update Fund Request Status</span>
        </div>
    </div>
    <div className='main_content_wrapper'>
        <div className='caption_wrapper'>
            <caption>Project: {name}</caption>
            <Link to="/relevant/dashboard/fund-request">Back</Link>
        </div>
        <form className='form_wrapper' onSubmit={updateHandler}>

            <div>
                <label htmlFor="">Project Description</label>
                <textarea value={desc}></textarea>
            </div>
       
            <div>
                <label htmlFor="">Project Feedback</label>
                <input type="text" name=""  id="" placeholder='' value={feed}
                onChange={(e)=>setFeed(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="">Approval Status</label>
                <select name="" id="" onChange={(e)=>setStatus(e.target.value)} >
                    <option value="" selected >Choose Status</option>
                    <option value="2">Accept</option>
                    <option value="1">Process</option>
                    <option value="3">Rejected</option>
                </select>
            </div>
            <div>
                <button type='submit' className='form_btn'>Save</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default FundStatus