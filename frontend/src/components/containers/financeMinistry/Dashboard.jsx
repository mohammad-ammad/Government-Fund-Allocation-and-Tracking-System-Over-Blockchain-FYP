import React, {useState} from 'react'
import {ethers} from 'ethers';
import Card from '../../chunks/Card'
import {FaUsers} from 'react-icons/fa';
import {BiGitPullRequest,BiTransfer} from 'react-icons/bi';
import {MdPendingActions} from 'react-icons/md';
import {BsClipboardCheck} from 'react-icons/bs';
import {RiFundsFill} from 'react-icons/ri';

const Dashboard = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [walletBtn, setWalletBtn] = useState('Connect Wallet');
  const connectWallet = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const account = provider.getSigner();
    const Address = await account.getAddress();
    setAddress(Address);
    const Balance = ethers.utils.formatEther(await account.getBalance());
    setBalance(Balance);
    setWalletBtn("Wallet Connected!")
  }
  return (
    <div className='dashboard__wrapper'>
      <div className="dashboard__top_container">
        <div>
          Welcome Admin
        </div>
        <div>
          <button onClick={connectWallet}>{walletBtn}</button>
        </div>
      </div>
      <div className="dashboard__mid_container">
        <div>
          Account: <span>{address}</span>
        </div>
        <div>
          Balance: <span>{balance} Eth</span>
        </div>
      </div>
      <div className="dashboard__bottom_container">
        <Card title="Relevant Ministry" icon={<FaUsers/>} num={0}/>
        <Card title="Pending Fund Request" icon={<BiGitPullRequest/>} num={0}/>
        <Card title="Processing Fund Request" icon={<MdPendingActions/>} num={0}/>
        <Card title="Approved Fund Request" icon={<BsClipboardCheck/>} num={0}/>
        <Card title="Fund transfer" icon={<BiTransfer/>} num={0}/>
        <Card title="Pending Budget" icon={<RiFundsFill/>} num={0}/>
      </div>
    </div>
  )
}

export default Dashboard