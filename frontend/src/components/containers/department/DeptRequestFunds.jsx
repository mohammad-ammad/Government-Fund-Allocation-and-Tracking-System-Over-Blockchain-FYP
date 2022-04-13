import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { deptloadFundReq, deptdelFundReq } from '../../../Actions/DeptUser';
import {toast} from "react-hot-toast";
const DeptRequestFunds = () => {
    const {deptFetchFund} = useSelector((state)=> state.DeptUser);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(deptloadFundReq())
    }, [])
    
    const deleteFund = (e,id) => 
    {
        e.preventDefault();
        dispatch(deptdelFundReq(id));
        toast.success('Successfully deleted!')
        const thisClicked = e.currentTarget;
        thisClicked.closest("tr").remove();
    }
  return (
    <>
    <div className='breadCrumb'>
                        <h3>Departments</h3>
                        <div>
                            Home <span> Project Funds Request</span>
                        </div>
                    </div>
                    <div className='main_content_wrapper'>
                    <div className='caption_wrapper'>
                    <caption>Request Funds</caption>
                    <Link to="/department/dashboard/add-project-request">Add Request</Link>
                    </div>
                    <div className="table-wrapper">
                    <table class="fl-table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Project Title</th>
                            <th scope="col">Fund Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col">FeedBack</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                deptFetchFund && deptFetchFund.length > 0 ?
                                deptFetchFund.map((item,index)=> (
                                    <tr key={item.id}>
                                 <td data-label="no">{index+1}</td>
                                 <td data-label="name">{item.project_name}</td>
                                 <td data-label="amount">{item.funds_amount}</td>
                                 <td data-label="status">{item.status_approval === 0 ? 'Pending' : item.status_approval === 1 ? 'Processing' : item.status_approval === 3 ? 'Rejected' : 'Accepted'}</td>
                                 <td>
                                     {
                                         item.status_approval > 0 ? 
                                         <Link to={`/department/dashboard/view-project-feedback/${item.id}`} className='active_btn'>FeedBack</Link>
                                         : 'no feedback yet'
                                     }
                                 
                                 </td>
                                 <td data-label="action">
                                     {
                                         item.status_approval === 0 ?   <Link to={`/department/dashboard/add-project-request/${item.id}`} className='active_btn'>Edit</Link>
                                         : ''
                                     }
                                     {
                                         item.status_approval === 0 ?  <button className='delete_btn' onClick={(e)=>deleteFund(e,item.id)}>Delete</button>
                                         : ''
                                     }
                                    
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

export default DeptRequestFunds