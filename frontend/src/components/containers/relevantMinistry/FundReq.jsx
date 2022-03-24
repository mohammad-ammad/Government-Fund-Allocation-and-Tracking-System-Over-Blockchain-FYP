import React,{useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadFindFundsRelevant } from '../../../Actions/RelevantUser';
const FundReq = () => {
    let dispatch = useDispatch();
    let {allFunds} = useSelector((state)=>state.RelevantDept);
    useEffect(()=>{
        dispatch(loadFindFundsRelevant())
    },[])
  return (
    <>
    <div className='breadCrumb'>
                        <h3>Relevent Ministry</h3>
                        <div>
                            Home <span> All Funds Request</span>
                        </div>
                    </div>
                    <div className='main_content_wrapper'>
                    <div className='caption_wrapper'>
                    <caption>All Request</caption>
                    </div>
                    <table>
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Department</th>
                            <th scope="col">Project Name</th>
                            <th scope="col">Funds Amount</th>
                            <th scope="col">status</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {allFunds && allFunds.length > 0 ? allFunds.map((item,index)=>(
                               <tr key={item.id}>
                               <td data-label="no">{index+1}</td>
                               <td data-label="name">{item.office_name}</td>
                               <td data-label="name">{item.project_name}</td>
                               <td data-label="name">{item.funds_amount}</td>
                               <td data-label="name">{item.status_approval === 0 ? 'Pending' : item.status_approval === 1 ? 'Processing' : item.status_approval === 3 ? 'Rejected' : 'Accepted'}</td>
                               <td data-label="action">
                                   <Link to={`/relevant/dashboard/fund-status/${item.id}`} className='active_btn'>Status</Link>
                               </td>
                               </tr>
                           )):'no data yet'}
                               
                            
                        </tbody>
                        </table>
                    </div>
    </>
  )
}

export default FundReq