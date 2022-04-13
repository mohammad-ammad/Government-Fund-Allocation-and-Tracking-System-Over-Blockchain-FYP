import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {toast} from "react-hot-toast";
const FinanceFundReq = () => {
    const [relevantFinanceFundRequest, setrelevantFinanceFundRequest] = useState([]);
    useEffect(()=>{
        axios.get(`/api/v1/relevant/finance-fund-retrieve`).then(res => {
            if(res.status == 201)
            {
                setrelevantFinanceFundRequest(res.data.result);
            }
        })
    },[]);

    const deleteReq = (e,id) => 
    {
        e.preventDefault();
        axios.delete(`/api/v1/relevant/finance-fund-delete/${id}`).then(res => {
            if(res.status == 201)
            {
                toast.success('Successfully deleted!')
            }
        })
        const thisClicked = e.currentTarget;
        thisClicked.closest("tr").remove();
    }
  return (
    <>
    <div className='breadCrumb'>
                        <h3>Relevent Ministry</h3>
                        <div>
                            Home <span> All Funds Approval Request</span>
                        </div>
                    </div>
                    <div className='main_content_wrapper'>
                    <div className='caption_wrapper'>
                    <caption>All Request</caption>
                    </div>
                    <div className="table-wrapper">
                    <table class="fl-table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Project Name</th>
                            <th scope="col">Funds Amount</th>
                            <th scope="col">status</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                relevantFinanceFundRequest && relevantFinanceFundRequest.length > 0 ? 
                                relevantFinanceFundRequest.map((item,index)=> (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.project_name}</td>
                                        <td>{item.funds_amount}</td>
                                        <td>
                                            {item.stattus_approval === 0 ? <span className="badge bg-warning">Pending</span> : item.stattus_approval === 1 ? <span className="badge bg-info">Processing</span> : item.stattus_approval === 2 ? <span className="badge bg-success">Approved</span> : <span className="badge bg-danger">Rejected</span>}
                                        </td>
                                        <td>
                                            <Link to={`/relevant/dashboard/edit-finance-request/${item.id}`} className='btn btn-primary mx-1'>Edit</Link>
                                            <button className='btn btn-danger' onClick={(e)=>deleteReq(e,item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                                : 'no data yet'
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
    </>
  )
}

export default FinanceFundReq