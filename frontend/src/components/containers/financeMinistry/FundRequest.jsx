import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"
import axios from "axios"
const FundRequest = () => {
    const [allRequest, setAllRequest] = useState([]);
    const [title,setTitle] = useState(null);
    const [amount,setAmount] = useState(null);
    const [desc,setDesc] = useState(null);
    const [feed,setFeed] = useState(null);
    const [status,setStatus] = useState(null);
    const [id,setId] = useState(0);

    const loadData = async() => 
    {
        const {data} = await axios.get('/api/v1/get-relevant-funds');
        setAllRequest(data.result);
    }

    useEffect(()=>{
        loadData();
    },[])

    const openModel = (e,id) => {
        e.preventDefault();

        axios.get(`/api/v1/relevant-findone-fund/${id}`).then(res => {
            if(res.status == 201)
            {
              setTitle(res.data.editResult.project_name)
              setAmount(res.data.editResult.funds_amount)
              setDesc(res.data.editResult.project_description)
              setFeed(res.data.editResult.ministry_approval_details)
              setId(id)
            }
        })
    }

    const ReqHandler = async (e) => 
    {
        e.preventDefault();

        const stattus_approval = status;
        const ministry_approval_details = feed;
        const {data} = await axios.put("/api/v1/relevant-fund-status",{stattus_approval,ministry_approval_details,id},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        toast.success(data.message);
        loadData();
    }

    
  return (
    <>
    <div className='breadCrumb'>
                        <h3>Finance Ministry</h3>
                        <div>
                            Home <span> Project Fund Request</span>
                        </div>
                    </div>
                    <div className='main_content_wrapper'>
                    <div className='caption_wrapper'>
                    <caption>All Request</caption>
                    </div>
                    <table>
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Ministry</th>
                            <th scope="col">Project Title</th>
                            <th scope="col">Project Fund</th>
                            <th scope="col">Approval Status</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allRequest && allRequest.length > 0 ? 
                                allRequest.map((item,index)=> (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.relevant_ministry_name}</td>
                                        <td>{item.project_name}</td>
                                        <td>{item.funds_amount}</td>
                                        <td>
                                        {item.stattus_approval === 0 ? <span className="badge bg-warning">Pending</span> : item.stattus_approval === 1 ? <span className="badge bg-info">Processing</span> : item.stattus_approval === 2 ? <span className="badge bg-success">Approved</span> : <span className="badge bg-danger">Rejected</span>}
                                        </td>
                                        <td>
                                            <a href="javaScript:void" className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e)=>openModel(e,item.id)}>Action</a>
                                        </td>
                                    </tr>
                                ))
                                : 'no data yet'
                            }
                            
                        </tbody>
                        </table>
                    </div>

                                      {/* model  */}

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Request To Finance Ministry</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={ReqHandler}>
      <div className="modal-body">
        <div className="row">
            <div className="col-md-6 mb-3">
                <label>Project Title</label>
                <input type="text" className="form-control" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="col-md-6 mb-3">
                <label>Project Fund Amount</label>
                <input type="text" className="form-control" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className="col-md-12 mb-3">
            <label>Project Description</label>
                <textarea name="" className='form-control' id="" cols="30" rows="3" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
            </div>
            <div className="col-md-12 mb-3">
            <label>Project Feedback</label>
                <textarea name="" className='form-control' id="" cols="30" rows="2" value={feed} onChange={(e)=>setFeed(e.target.value)} required></textarea>
            </div>
            <div className="col-md-12 mb-3">
            <label>Approval Status</label>
                <select name="" id="" className='form-control' onChange={(e)=>setStatus(e.target.value)} required>
                    <option value="" selected>Choose Status</option>
                    <option value="1">Processing</option>
                    <option value="2">Approved</option>
                    <option value="3">Rejected</option>
                </select>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Send Request</button>
      </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default FundRequest