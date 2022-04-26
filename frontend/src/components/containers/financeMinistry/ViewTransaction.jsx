import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import FinanceFund from "../../../contracts/FinanceFund.json";
import { ethers } from 'ethers';
import Loader from '../../chunks/Loader';
const ViewTransaction = (props) => {
    const [change, setChange] = useState(false);
    const [donar,setDonar] = useState([]);
    useEffect(()=>{
        console.log(props.match.params.address)
        const loadTransaction = async () => 
        {
            setChange(true);
            const provider = new ethers.providers.JsonRpcProvider(
                "https://eth-ropsten.alchemyapi.io/v2/OMkpbeJ45pT_LAt7uKuF8G-qXzv4lKso"
              );
            
              const contract = new ethers.Contract(
                props.match.params.address,
                FinanceFund.abi,
                provider
              );
            const Donations = contract.filters.amountTransfered();
            const AllDonations = await contract.queryFilter(Donations);
            setDonar(AllDonations);
            setChange(false);
            console.log(AllDonations);
        }

        loadTransaction();
    },[])
  return (
    <>
    <div className='breadCrumb'>
                        <h3>Finance Ministry</h3>
                        <div>
                            Home <span> View Transaction</span>
                        </div>
                    </div>
                    <div className='main_content_wrapper'>
                    <div className='caption_wrapper'>
                    <caption>Transaction</caption>
                    <Link to="/dashboard/transfer-funds">Back</Link>
                    </div>
                    <div className="table-wrapper">
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
    </>
  )
}

export default ViewTransaction