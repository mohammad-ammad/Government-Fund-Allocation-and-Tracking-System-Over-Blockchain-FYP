import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadFindFundsRelevant } from '../../../Actions/RelevantUser';
import {toast} from "react-hot-toast";
import axios  from 'axios';
import {ethers} from "ethers";
import FinanceFundFactory from "../../../contracts/FinanceFundFactory.json";

const FundReq = () => {
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [amount, setAmount] = useState(null);
    const [loading, setLoading] = useState(false);

    let dispatch = useDispatch();
    let {allFunds} = useSelector((state)=>state.RelevantDept);
    let {user} = useSelector((state)=>state.RelevantUser);
    useEffect(()=>{
        dispatch(loadFindFundsRelevant())
    },[])

    const checkModel = (e,id) => 
    {
        e.preventDefault();
        axios.get(`/api/v1/department/project-feedback/${id}`).then(res => {
            if(res.status == 201)
            {
                setTitle(res.data.result.project_name);
                setDesc(res.data.result.project_description);
                setAmount(res.data.result.funds_amount);
            }
        })
    }

    const financeReqHandler = async (e) => 
    {
        e.preventDefault();
        const funds_amount = amount;
        const project_name = title;
        const project_description = desc;
        let fund_req_address = null;

        //setting provider for blockchain interaction

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        setLoading(true);

        const contract = new ethers.Contract(
            "0xa40ACa2167B88B79D86A6b679334dBB140d5e7Cb",
            FinanceFundFactory.abi,
            signer
          );

        const FundAmount = ethers.utils.parseUnits(funds_amount,'ether');

        const FundData = await contract.createFinanceFund(
            project_name,
            user.relevant_ministry_id,
            FundAmount,
          );

        let resp = await FundData.wait();
        fund_req_address = resp.to;
        // console.log(FundData.to);

        // post request for server side 
        const {data} = await axios.post("/api/v1/relevant/finance-fund-request",{funds_amount,project_name,project_description,fund_req_address},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        setLoading(false)
        toast.success(data.message);
    }
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
                    <div className="table-wrapper">
                    <table class="fl-table">
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
                                   <Link to={`/relevant/dashboard/fund-status/${item.id}`} className='btn btn-success mx-1'>Status</Link>
                                   <a href="javaScript:void(0)" className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e)=>checkModel(e,item.id)}>Request</a>
                                   <Link to={`/relevant/dashboard/transfer-dept-fund`} className='btn btn-danger mx-1'>Transfer Fund</Link>
                               </td>
                               </tr>
                           )):'no data yet'}
                               
                            
                        </tbody>
                        </table>
                    </div>
                    </div>

                    {/* model  */}

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Request To Finance Ministry</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={financeReqHandler}>
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
                <textarea name="" className='form-control' id="" cols="30" rows="6" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {
            loading ? 
            <button type="button" className="btn btn-primary">Loading</button>
            :
            <button type="submit" className="btn btn-primary">Send Request</button>
        }
      </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default FundReq