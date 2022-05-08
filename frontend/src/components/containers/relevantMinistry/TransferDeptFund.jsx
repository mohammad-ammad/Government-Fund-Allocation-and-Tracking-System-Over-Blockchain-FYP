import React, {useEffect, useState} from 'react'
import { ethers } from 'ethers';
import ReleventFundFactory from "../../../contracts/RelevantFundFactory.json";
import RelevantFund from "../../../contracts/RelevantFund.json";
import Loader from '../../chunks/Loader';
import { Link } from 'react-router-dom';
const TransferDeptFund = () => {
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [address,setAddress] = useState(null);
    const [pName, setPname] = useState(null);
    const [reqAmount, setReqAmount] = useState(null);
    const [change, setChange] = useState(false);
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

              const getAllFundReq = contract.filters.fundRequestCreated();

              console.log(getAllFundReq);

              const AllRequest = await contract.queryFilter(getAllFundReq);
              setAllData(AllRequest);
              setLoading(false)
        }

        loadFund();
    },[]);

    const sendFundModel = (e,name,amount,address) => 
    {
        e.preventDefault();
        console.log(name,amount,address);
        setAddress(address);
        setPname(name);
        setReqAmount(amount)
    }

    const HandleTransferFund = async (e) => {
        e.preventDefault();
        try {
            setChange(true);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(address, RelevantFund.abi, signer);
            console.log(contract);
            console.log(address);
            const transaction = await contract.transferAmount({value: ethers.utils.parseEther(reqAmount)});
            await transaction.wait();

            setChange(false);
            console.log(transaction);

        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <div className='breadCrumb'>
                        <h3>Relevent Ministry</h3>
                        <div>
                            Home <span> Department Fund Transfer</span>
                        </div>
                    </div>
                    <div className='main_content_wrapper'>
                    <div className='caption_wrapper'>
                    <caption>All Department Transfer</caption>
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
                                    <a href="javaScript:void" className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#amountModal" onClick={(event)=>sendFundModel(event,e.args.projectName,ethers.utils.formatEther(e.args.fundAmount),e.args.fundRequest)}>Transfer Amount</a>
                                    <Link to={`/relevant/dashboard/view-transactions/${e.args.fundRequest}`} className="btn btn-success">View Transaction</Link>
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
      <form onSubmit={HandleTransferFund}>
      <div className="modal-body">
        <div className="row">
           <div className="col-md-12 p-4">
                Request Address: {address}
           </div>
           <div className="col-md-12">
                <label>Send Fund ({reqAmount}) ETH</label>
                <input type="text" className="form-control" value={reqAmount}  onChange={(e)=>setReqAmount(e.target.value)}/>
           </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {
            change ? 
            <Loader/>
            : 
            <button type="submit" className="btn btn-primary">Send Fund</button>
        }
      </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default TransferDeptFund