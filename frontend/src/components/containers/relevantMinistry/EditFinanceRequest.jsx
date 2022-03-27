import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { relevantupdateFinanceReq } from '../../../Actions/RelevantUser';
const EditFinanceRequest = (props) => {
    const [title,setTitle] = useState(null);
    const [amount,setAmount] = useState(null);
    const [desc,setDesc] = useState(null);

    const dispatch = useDispatch();
    useEffect(()=>{
        const id = props.match.params.id;
        axios.get(`/api/v1/relevant/finance-fund-retrieve/${id}`).then(res => {
            if(res.status == 201)
            {
                setTitle(res.data.result.project_name);
                setDesc(res.data.result.project_description);
                setAmount(res.data.result.funds_amount);
            }
        })
    },[])

    const updateHandler = async(e) => 
    {
        e.preventDefault();
        const id = props.match.params.id;
        dispatch(relevantupdateFinanceReq(id,title,desc,amount));
        toast.success("Updated");
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
        <form onSubmit={updateHandler}>
        <div className="row">
            <div className="col-md-6 mb-3">
                <label>Project Title</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="col-md-6 mb-3">
                <label>Project Fund Amount</label>
                <input type="text" className="form-control" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className="col-md-12 mb-3">
            <label>Project Description</label>
                <textarea name="" className='form-control' id="" cols="30" rows="6" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
            </div>
        </div>
            <button type="submit" className='form_btn'>Save</button>
        </form>
    </div>
    </>
  )
}

export default EditFinanceRequest