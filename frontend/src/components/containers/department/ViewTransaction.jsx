import React, {useEffect, useState} from 'react'
import { ethers } from 'ethers';
import ReleventFundFactory from "../../../contracts/RelevantFundFactory.json";
import RelevantFund from "../../../contracts/RelevantFund.json";
import Loader from '../../chunks/Loader';
import {useSelector} from "react-redux";

const ViewTransaction = () => {
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [address,setAddress] = useState(null);
    const [pName, setPname] = useState(null);
    const [change, setChange] = useState(false);
    const [donar,setDonar] = useState([]);

    const {office_id} = useSelector((state)=> state.DeptUser.user);

    useEffect(()=>{
        const loadFund = async () => 
        {
            const provider = new ethers.providers.JsonRpcProvider(
                "https://eth-ropsten.alchemyapi.io/v2/OMkpbeJ45pT_LAt7uKuF8G-qXzv4lKso"
              );
    
              const contract = new ethers.Contract(
                "0x8133926863fcE82E5088db388954f7b155aEe70c",
                ReleventFundFactory.abi,
                provider
              );

              setLoading(true);

              const getAllFundReq = contract.filters.fundRequestCreated(null,office_id,null,null,null,null);

              console.log(getAllFundReq);

              const AllRequest = await contract.queryFilter(getAllFundReq);
              setAllData(AllRequest);
              setLoading(false)
        }

        loadFund();
    },[])

    const sendFundModel = async(e,name,address) => 
    {
        e.preventDefault();
        
        setAddress(address);
        setPname(name);

        setChange(true);
            const provider = new ethers.providers.JsonRpcProvider(
                "https://eth-ropsten.alchemyapi.io/v2/OMkpbeJ45pT_LAt7uKuF8G-qXzv4lKso"
              );
            
              const contract = new ethers.Contract(
                address,
                RelevantFund.abi,
                provider
              );
            const Donations = contract.filters.amountTransfered();
            const AllDonations = await contract.queryFilter(Donations);
            setDonar(AllDonations);
            setChange(false);
            console.log(AllDonations);
        
    }

  return (
    <>
    <div className='breadCrumb'>
                        <h3>Department</h3>
                        <div>
                            Home <span> Department Fund Transfer</span>
                        </div>
                    </div>
                    <div className='main_content_wrapper'>
                    <div className='caption_wrapper'>
                    <caption>All Project Transfer</caption>
                    </div>
                    <div className="table-wrapper">
                    <table class="fl-table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Project Name</th>
                            <th scope="col">Fund Amount</th>
                            <th scope="col">Date of Request</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {loading ? <Loader/> : allData.length > 0 ? 
                            allData.map((e,index)=>(
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{e.args.projectName}</td>
                                    <td>{ethers.utils.formatEther(e.args.fundAmount)} Eth</td>
                                    <td>{new Date(parseInt(e.args.timestamp) * 1000).toLocaleString()}</td>
                                    <td>
                                    <a href="javaScript:void" className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#amountModal" onClick={(event)=>sendFundModel(event,e.args.projectName,e.args.fundRequest)}>View Transaction</a>
                                    </td>
                                </tr>
                            ))
                             : 'no data yet'}
                            
                        </tbody>
                        </table>
                    </div>
                    </div>

                                    {/* model  */}
<div className="modal fade" id="amountModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Project Name: {pName}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="table-wrapper p-2">
                    <table class="fl-table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Transfer Address</th>
                            <th scope="col">Amount</th>
                            <th scope="col">TimeStamp</th>
                            </tr>
                        </thead>
                        <tbody>
                        {change ? <Loader/> : donar.length > 0 ? donar.map((e,index)=>(
                               <tr>
                                   <td>{index+1}</td>
                                   <td>{e.args.donar}</td>
                                   <td>{ethers.utils.formatEther(e.args.fundAmount)}</td>
                                   <td>{new Date(parseInt(e.args.timeStamp) * 1000).toLocaleString()}</td>
                               </tr>
                           )):'no transaction found'}
                        </tbody>
                        </table>
                    </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ViewTransaction