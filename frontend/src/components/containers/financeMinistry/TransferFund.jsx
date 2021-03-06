import React, {useState, useEffect} from 'react'
import FinanceFund from "../../../contracts/FinanceFund.json";
import FinanceFundFactory from "../../../contracts/FinanceFundFactory.json";
import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
import Loader from '../../chunks/Loader';
const TransferFund = () => {
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
                "0xa40ACa2167B88B79D86A6b679334dBB140d5e7Cb",
                FinanceFundFactory.abi,
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

    const HandleTransferFund = async (e) => 
    {
        e.preventDefault();
        try {
            setChange(true);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(address, FinanceFund.abi, signer);
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
                        <h3>Finance Ministry</h3>
                        <div>
                            Home <span> Transfer Funds</span>
                        </div>
                    </div>
                    <div className='main_content_wrapper'>
                    <div className='caption_wrapper'>
                    <caption>All Projects Request</caption>
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
                                    <Link to={`/dashboard/view-transactions/${e.args.fundRequest}`} className="btn btn-success">View Transaction</Link>
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

export default TransferFund